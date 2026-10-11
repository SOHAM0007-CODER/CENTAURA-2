import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from 'react';
import { scentById, type ScentId } from './data';
import { charms, configKey, configPrice, PRICES, sanitizeConfig, type BraceletConfig, type CharmId } from './wearables';
export interface CartLine { key:string; id:ScentId; quantity:number; gift:boolean; note:string; presentation:'single'|'discovery'; category?:'bracelet'|'pod'|'charm'; configuration?:BraceletConfig; charm?:CharmId; }
interface Store { cart:CartLine[]; add:(id:ScentId,quantity?:number,gift?:boolean,note?:string,presentation?:'single'|'discovery')=>void; addConfigured:(c:BraceletConfig,editKey?:string)=>void; addAccessory:(category:'pod'|'charm',id:ScentId,charm?:CharmId)=>void; update:(key:string,n:number)=>void; remove:(key:string)=>void; clear:()=>void; toast:string; notify:(s:string)=>void; }
export function readLocal<T>(key:string, fallback:T):T { try { const v=localStorage.getItem(key); return v ? JSON.parse(v) as T : fallback; } catch { return fallback; } }
export function writeLocal(key:string, value:unknown) { try { localStorage.setItem(key,JSON.stringify(value)); } catch { /* Private browser storage may be unavailable. The demo remains functional in memory. */ } }
export const linePrice=(l:CartLine)=>l.configuration?configPrice(l.configuration):l.category==='pod'?PRICES.refill:l.category==='charm'?(charms.find(c=>c.id===l.charm)?.price??149):(l.presentation==='discovery'?PRICES.discovery:(scentById(l.id)?.price??0))+(l.gift?PRICES.gift:0);
export const lineTitle=(l:CartLine)=>l.configuration?`Aura ${l.configuration.style[0].toUpperCase()+l.configuration.style.slice(1)}`:l.category==='pod'?`${scentById(l.id)?.name} AuraPod`:l.category==='charm'?`${charms.find(c=>c.id===l.charm)?.name??'Aura'} charm`:l.presentation==='discovery'?'Four-fragrance discovery':scentById(l.id)?.name??'Fragrance';
function sanitizeCart(raw:unknown):CartLine[] {
 if(!Array.isArray(raw))return [];
 const result:CartLine[]=[];
 for(const value of raw.slice(0,100)){
  if(!value||typeof value!=='object')continue;
  const v=value as Partial<CartLine>;
  if(!scentById(v.id??'')||!Number.isInteger(v.quantity)||!v.quantity||v.quantity<1||v.quantity>20)continue;
  const note=typeof v.note==='string'?v.note.trim().slice(0,160):'';
  const gift=v.gift===true;const presentation=v.presentation==='discovery'?'discovery':'single';
  let line:CartLine;
  if(v.category==='bracelet'){
   if(!v.configuration||typeof v.configuration!=='object')continue;
   const configuration=sanitizeConfig(v.configuration);
   line={key:configKey(configuration),id:configuration.fragrance,quantity:v.quantity,gift:configuration.gift,note:configuration.note,presentation:'single',category:'bracelet',configuration};
  }else if(v.category==='pod'||v.category==='charm'){
   const charm=charms.find(c=>c.id===v.charm)?.id;
   if(v.category==='charm'&&!charm)continue;
   line={key:JSON.stringify([v.category,v.id,charm]),id:v.id!,quantity:v.quantity,gift:false,note:'',presentation:'single',category:v.category,charm};
  }else{
   if(v.category!==undefined)continue;
   line={key:JSON.stringify([v.id,gift,note,presentation]),id:v.id!,quantity:v.quantity,gift,note,presentation};
  }
  const duplicate=result.find(l=>l.key===line.key);
  if(duplicate)duplicate.quantity=Math.min(20,duplicate.quantity+line.quantity);else result.push(line);
 }
 return result;
}
const StoreContext=createContext<Store|null>(null);
export function StoreProvider({children}:{children:ReactNode}) {
  const [cart,setCart]=useState<CartLine[]>(()=>sanitizeCart(readLocal<unknown>('centaura-cart-v1',[])));
  useEffect(()=>writeLocal('centaura-cart-v1',cart),[cart]);
  useEffect(()=>{const sync=(e:StorageEvent)=>{if(e.key==='centaura-cart-v1')setCart(sanitizeCart(readLocal<unknown>('centaura-cart-v1',[])));};window.addEventListener('storage',sync);return()=>window.removeEventListener('storage',sync);},[]);
  const [toast,setToast]=useState('');
  const notify=useCallback((s:string)=>setToast(s),[]);
  const change=(fn:(old:CartLine[])=>CartLine[])=>setCart(fn);
  const insert=(line:CartLine,editKey?:string)=>change(old=>{const remaining=editKey?old.filter(l=>l.key!==editKey):old;const existing=remaining.find(l=>l.key===line.key);return existing?remaining.map(l=>l.key===line.key?{...l,quantity:Math.min(20,l.quantity+line.quantity)}:l):[...remaining,line];});
  const add:Store['add']=(id,quantity=1,gift=false,note='',presentation='single')=>{
    if(!scentById(id)) return;
    const q=Math.max(1,Math.min(20,Math.floor(quantity)||1)); const clean=note.trim().slice(0,160); const key=JSON.stringify([id,gift,clean,presentation]);
    insert({key,id,quantity:q,gift,note:clean,presentation});
    notify(`${presentation==='discovery'?'Discovery collection':scentById(id)?.name} added to your bag`);
  };
  const addConfigured:Store['addConfigured']=(raw,editKey)=>{const configuration=sanitizeConfig(raw);const prior=editKey?cart.find(l=>l.key===editKey):undefined;insert({key:configKey(configuration),id:configuration.fragrance,quantity:prior?.quantity??1,gift:configuration.gift,note:configuration.note,presentation:'single',category:'bracelet',configuration},editKey);notify(editKey?'Your AuraWear design was updated':'Your AuraWear design was added to your bag');};
  const addAccessory:Store['addAccessory']=(category,id,charm)=>{if(!scentById(id))return;insert({key:JSON.stringify([category,id,charm]),id,quantity:1,gift:false,note:'',presentation:'single',category,charm});notify(category==='pod'?'AuraPod added to your bag':'Charm added to your bag');};
  return <StoreContext.Provider value={{cart,add,addConfigured,addAccessory,update:(key,n)=>change(old=>old.map(l=>l.key===key?{...l,quantity:Math.max(1,Math.min(20,Math.floor(n)||1))}:l)),remove:key=>change(old=>old.filter(l=>l.key!==key)),clear:()=>change(()=>[]),toast,notify}}>{children}</StoreContext.Provider>;
}
export const useStore=()=>{const value=useContext(StoreContext);if(!value)throw new Error('Missing store provider');return value;};
