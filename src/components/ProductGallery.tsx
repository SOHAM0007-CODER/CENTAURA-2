import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { Maximize2, X } from 'lucide-react';
import type { Fragrance } from '../data';
import { Aura, Bottle, Packaging } from './Visuals';
import { Modal } from './UI';

const views=['Signature bottle','The visual aura','Presentation'] as const;
export function ProductGallery({scent}:{scent:Fragrance}) {
 const [view,setView]=useState(0),[expanded,setExpanded]=useState(false);const reduced=useReducedMotion();
 useEffect(()=>{setView(0);setExpanded(false);},[scent.id]);
 const art=()=>view===0?<><Aura scent={scent} dimension="Form"/><Bottle scent={scent}/></>:view===1?<Aura scent={scent}/>:<Packaging scent={scent}/>;
 return <div className="product-gallery"><div className={`gallery-canvas gallery-view-${view}`}><AnimatePresence mode="wait"><motion.div key={`${scent.id}-${view}`} className="gallery-object" initial={reduced?false:{opacity:0,y:8}} animate={{opacity:1,y:0}} exit={{opacity:0}} transition={{duration:.25}}>{art()}</motion.div></AnimatePresence><span className="gallery-edition micro">AURA {scent.number} / {views[view]}</span><button className="gallery-expand icon-button" aria-label="Enlarge product view" onClick={()=>setExpanded(true)}><Maximize2 size={16}/></button></div><div className="gallery-selectors" role="group" aria-label="Product views">{views.map((name,i)=><button key={name} aria-pressed={view===i} onClick={()=>setView(i)}><span className="gallery-thumbnail">{i===0?<Bottle scent={scent}/>:i===1?<Aura scent={scent} dimension="Form"/>:<Packaging scent={scent}/>}</span><span>{name}</span></button>)}</div>{expanded&&<Modal title={`${scent.name} enlarged product view`} onClose={()=>setExpanded(false)}><div className={`gallery-lightbox gallery-view-${view}`}><div className="gallery-object">{art()}</div><span className="micro">{scent.name} / {views[view]}</span><button className="text-link" onClick={()=>setExpanded(false)}>Close view <X size={13}/></button></div></Modal>}</div>;
}

export function FragranceDetails({scent}:{scent:Fragrance}) {return <div className="product-details"><details open><summary>The scent character</summary><p>{scent.character} {scent.description}</p><dl><div><dt>Feeling</dt><dd>{scent.mood}</dd></div><div><dt>Visual signature</dt><dd>{scent.form}</dd></div></dl></details><details><summary>The signature presentation</summary><p>One 30 ml fragrance concept, a champagne-toned cap and an outer carton carrying the {scent.aura.toLowerCase().replace('the ','')}. The discovery collection presents all four identities as 5 ml samples.</p></details><details><summary>Before the collection launches</summary><p>These digital renders express the intended product design. Ingredients, concentration, wear time, safety information and manufacturing specifications will be confirmed through formulation and physical prototyping.</p></details></div>;}
