import { useEffect, useState } from 'react';
import { Plus } from 'lucide-react';
import { money } from '../data';

/** Keep the current selection available after its primary purchase controls leave view. */
export function PurchaseDock({targetId,title,price,onAdd,label='Add to bag'}:{targetId:string;title:string;price:number;onAdd:()=>void;label?:string}) {
 const [visible,setVisible]=useState(false),[footer,setFooter]=useState(false);
 useEffect(()=>{const target=document.getElementById(targetId);const foot=document.querySelector('footer');if(!target)return;const observer=new IntersectionObserver(([e])=>setVisible(!e.isIntersecting&&e.boundingClientRect.top<0),{threshold:0});observer.observe(target);const end=new IntersectionObserver(([e])=>setFooter(e.isIntersecting));if(foot)end.observe(foot);return()=>{observer.disconnect();end.disconnect();};},[targetId]);
 return visible&&!footer?<div className="purchase-dock"><div><span>{title}</span><strong>{money(price)}<small> Concept price</small></strong></div><button className="button button-dark" onClick={onAdd}>{label}<Plus size={15}/></button></div>:null;
}
