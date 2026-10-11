import { scentById, type ScentId } from './data';
export const PRICES = { bottle:699, bracelet:999, starter:1299, refill:249, discovery:1299, gift:150 } as const;
export const braceletStyles = [
  {id:'classic',name:'Aura Classic',description:'A slim, quiet silhouette. Your everyday expression.'},
  {id:'signature',name:'Aura Signature',description:'A sculptural band with a defining central AuraPod.'},
  {id:'charm',name:'Aura Charm',description:'A refined linked band, made personal by your charms.'},
] as const;
export const finishes = [
  {id:'gold',name:'Champagne Gold',light:'#F5DFAC',base:'#C6A269',dark:'#6A492F'},
  {id:'silver',name:'Polished Silver',light:'#FAFCFF',base:'#B8BDC8',dark:'#515865'},
  {id:'plum',name:'Midnight Plum',light:'#BA8FAC',base:'#5B3C61',dark:'#231829'},
] as const;
export const charms = [
  {id:'heart',name:'Heart',price:149}, {id:'moon',name:'Crescent Moon',price:149},
  {id:'star',name:'Star',price:149}, {id:'infinity',name:'Infinity',price:199},
  {id:'initial',name:'Initial',price:199}, {id:'aura',name:'Aura Symbol',price:299},
] as const;
export type BraceletStyle = typeof braceletStyles[number]['id'];
export type FinishId = typeof finishes[number]['id'];
export type CharmId = typeof charms[number]['id'];
export interface BraceletConfig { fragrance:ScentId; style:BraceletStyle; finish:FinishId; charms:CharmId[]; initial:string; note:string; memory:string; starter:boolean; gift:boolean; }
export const defaultConfig:BraceletConfig={fragrance:'mitti',style:'signature',finish:'gold',charms:[],initial:'A',note:'',memory:'',starter:true,gift:false};
export function sanitizeConfig(raw:unknown):BraceletConfig {
 const v=(raw&&typeof raw==='object'?raw:{}) as Partial<BraceletConfig>;
 return {fragrance:scentById(v.fragrance??'')?.id??defaultConfig.fragrance,style:braceletStyles.some(s=>s.id===v.style)?v.style!:defaultConfig.style,finish:finishes.some(f=>f.id===v.finish)?v.finish!:defaultConfig.finish,charms:Array.isArray(v.charms)?[...new Set(v.charms.filter(c=>charms.some(x=>x.id===c)))].slice(0,3):[],initial:typeof v.initial==='string'?(v.initial.toUpperCase().replace(/[^A-Z]/g,'').slice(0,1)||'A'):'A',note:typeof v.note==='string'?v.note.slice(0,160):'',memory:typeof v.memory==='string'?v.memory.slice(0,400):'',starter:v.starter!==false,gift:v.gift===true};
}
export const configPrice=(c:BraceletConfig)=>(c.starter?PRICES.starter:PRICES.bracelet)+c.charms.reduce((n,id)=>n+(charms.find(ch=>ch.id===id)?.price??0),0)+(c.gift?PRICES.gift:0);
export const configKey=(c:BraceletConfig)=>{const text=JSON.stringify(sanitizeConfig(c));let a=2166136261,b=2246822519;for(let i=0;i<text.length;i++){a=Math.imul(a^text.charCodeAt(i),16777619);b=Math.imul(b^text.charCodeAt(i),3266489917);}return `aw-${(a>>>0).toString(36)}-${(b>>>0).toString(36)}`;};
