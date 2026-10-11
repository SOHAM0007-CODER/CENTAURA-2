import { useEffect, useRef, useState, type ReactNode } from 'react';
import { createPortal } from 'react-dom';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Plus, X } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { dimensions, dimensionCopy, identityAccent, fragrances, money, type Dimension, type Fragrance } from '../data';
import { useStore } from '../store';
import { LocalFilm } from './LocalFilm';
import { Aura, Bottle, Mark, Reveal, scentStyle, TextLink } from './Visuals';
export function Modal({title,onClose,children}:{title:string;onClose:()=>void;children:ReactNode}) {
  const ref=useRef<HTMLDivElement>(null); const closeRef=useRef(onClose); closeRef.current=onClose;
  useEffect(()=>{
    const previous=document.activeElement as HTMLElement|null; const original=document.body.style.overflow; document.body.style.overflow='hidden';
    const controls=()=>Array.from(ref.current?.querySelectorAll<HTMLElement>('button,a[href],input,select,textarea,[tabindex="0"]')??[]).filter(el=>!el.hasAttribute('disabled'));
    controls()[0]?.focus();
    const keyboard=(e:KeyboardEvent)=>{if(e.key==='Escape')closeRef.current();if(e.key==='Tab'){const all=controls(); const first=all[0],last=all[all.length-1];if(!first){e.preventDefault();return;}if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus();}else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus();}}};
    document.addEventListener('keydown',keyboard);return()=>{document.body.style.overflow=original;document.removeEventListener('keydown',keyboard);previous?.focus();};
  },[]);
  return createPortal(<div className="modal-backdrop" onClick={onClose}><motion.div ref={ref} role="dialog" aria-modal="true" aria-label={title} className="modal" initial={{opacity:0,y:18}} animate={{opacity:1,y:0}} onClick={e=>e.stopPropagation()}><button className="icon-button modal-close" onClick={onClose} aria-label="Close dialog"><X size={22}/></button>{children}</motion.div></div>,document.body);
}
export function Quantity({value,onChange}:{value:number;onChange:(v:number)=>void}) {return <div className="quantity" aria-label="Quantity"><button aria-label="Decrease quantity" disabled={value<=1} onClick={()=>onChange(value-1)}>−</button><span aria-live="polite">{value}</span><button aria-label="Increase quantity" disabled={value>=20} onClick={()=>onChange(value+1)}>+</button></div>;}
export function ProductCard({scent,index=0}:{scent:Fragrance;index?:number}) {
 const {add}=useStore();const [quick,setQuick]=useState(false);const [quantity,setQuantity]=useState(1);
 return <><Reveal className="product-card"><div className="product-topline"><span>AURA {scent.number}</span><span>30 ML</span></div><Link className={`product-stage product-${scent.id}`} to={`/fragrance/${scent.id}`} style={scentStyle(scent)} aria-label={`Explore ${scent.name}`}><Aura scent={scent} dimension="Form"/><Bottle scent={scent}/><span className="product-stage-label">{scent.aura}</span></Link><div className="product-info"><div><span className="micro">{scent.aura}</span><h3><Link to={`/fragrance/${scent.id}`}>{scent.name}</Link></h3><p>{scent.short}</p></div><span className="product-price">{money(scent.price)}</span></div><div className="product-actions"><button className="text-link" onClick={()=>{setQuick(true);setQuantity(1);}}>Quick view <ArrowUpRight size={14}/></button><button className="add-button" onClick={()=>add(scent.id)} aria-label={`Add ${scent.name} to bag`}><Plus size={17}/> Add to bag</button></div><span className="sr-only">Collection product {index+1}</span></Reveal>
 {quick&&<Modal title={`${scent.name} quick view`} onClose={()=>setQuick(false)}><div className="quick-view"><div className="quick-art" style={scentStyle(scent)}><Aura scent={scent}/><Bottle scent={scent}/></div><div className="quick-content"><span className="eyebrow">{scent.aura}</span><h2>{scent.name}</h2><p>{scent.description}</p><p className="muted">{scent.character}</p><div className="quick-price">{money(scent.price)} <small>30 ml · Concept price</small></div><Quantity value={quantity} onChange={setQuantity}/><button className="button button-dark" onClick={()=>{add(scent.id,quantity);setQuick(false);}}>Add to bag <Plus size={16}/></button><TextLink to={`/fragrance/${scent.id}`}>Explore the fragrance</TextLink></div></div></Modal>}</>;
}
export function AuraLab({compact=false,onScentChange}:{compact?:boolean;onScentChange?:(s:Fragrance)=>void}) {
 const [selected,setSelected]=useState(fragrances[0]); const [dimension,setDimension]=useState<Dimension>('Form');
 return <div className={`aura-lab ${compact?'compact':''}`}>
  <div className="lab-controls"><span className="micro">CHOOSE YOUR FRAGRANCE</span><div className="scent-tabs" role="group" aria-label="Choose fragrance">{fragrances.map(s=><button key={s.id} className={selected.id===s.id?'selected':''} aria-pressed={selected.id===s.id} onClick={()=>{setSelected(s);onScentChange?.(s);}}><span style={{background:s.colour}}/>{s.name}</button>)}</div><div className="dimension-tabs" role="group" aria-label="Visual dimension">{dimensions.map((d,i)=><button key={d} className={dimension===d?'selected':''} aria-pressed={dimension===d} onClick={()=>setDimension(d)}><span>0{i+1}</span>{d}<ArrowUpRight size={16}/></button>)}</div></div>
  <div className="lab-stage" style={scentStyle(selected)}><span className="lab-stage-top">CENTAURA / AURA STUDY {selected.number}</span><AnimatePresence mode="wait"><motion.div key={`${selected.id}-${dimension}`} className="lab-art" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} transition={{duration:.22}}>{dimension==='Motion'?<LocalFilm scent={selected.id}/>:<Aura scent={selected} dimension={dimension}/>}</motion.div></AnimatePresence><div className="lab-stage-bottom"><span>{selected.aura}</span><span>{dimension}</span></div></div>
  <div className="lab-caption" aria-live="polite"><span className="eyebrow">{dimension} / {selected.name}</span><p>{dimensionCopy(selected,dimension)}</p><div className="colour-chips"><span style={{background:selected.colour}}/><span style={{background:identityAccent(selected)}}/><span className="micro">{selected.colour} · {identityAccent(selected)}</span></div></div>
 </div>;
}
export function PageIntro({eyebrow,title,description,children}:{eyebrow:string;title:string;description?:string;children?:ReactNode}) {return <div className="page-intro container"><div className="breadcrumbs"><Link to="/">Home</Link><span>/</span><span>{eyebrow}</span></div><Reveal><span className="eyebrow">{eyebrow}</span><h1 tabIndex={-1}>{title}</h1>{description&&<p>{description}</p>}{children}</Reveal></div>;}
export function EmptyState({title,description}:{title:string;description:string}) {return <div className="empty-state"><Mark/><h2>{title}</h2><p>{description}</p><Link className="button button-dark" to="/collection">Explore the collection <ArrowUpRight size={16}/></Link></div>;}
