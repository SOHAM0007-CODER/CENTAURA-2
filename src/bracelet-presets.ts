import { sanitizeConfig, type BraceletConfig } from './wearables';

type DesignFields=Pick<BraceletConfig,'fragrance'|'style'|'finish'|'charms'>;
export interface BraceletPreset { id:string; name:string; description:string; design:DesignFields; }

export const braceletPresets:BraceletPreset[]=[
 {id:'first-rain',name:'First Rain',description:'Warm earth. A quiet gold crescent.',design:{fragrance:'mitti',style:'classic',finish:'gold',charms:['moon']}},
 {id:'moon-garden',name:'Moon Garden',description:'Luminous jasmine with a little starlight.',design:{fragrance:'mogra',style:'charm',finish:'silver',charms:['heart','star']}},
 {id:'quiet-ritual',name:'Quiet Ritual',description:'Sandalwood, warm metal, enduring symbols.',design:{fragrance:'sandalwood',style:'signature',finish:'gold',charms:['infinity','aura']}},
 {id:'velvet-hours',name:'Velvet Hours',description:'Magnetic Kasturi. Deep plum. After dark.',design:{fragrance:'kasturi',style:'signature',finish:'plum',charms:['moon','star']}},
];

export function applyBraceletPreset(config:BraceletConfig,preset:BraceletPreset):BraceletConfig {
 // Presets describe the jewellery; personal text, initials and gift choices belong to the wearer.
 return sanitizeConfig({...config,...preset.design,charms:[...preset.design.charms]});
}
export function matchingBraceletPreset(config:BraceletConfig):BraceletPreset|undefined {
 return braceletPresets.find(p=>p.design.fragrance===config.fragrance&&p.design.style===config.style&&p.design.finish===config.finish&&p.design.charms.length===config.charms.length&&p.design.charms.every(c=>config.charms.includes(c)));
}
export function surpriseBraceletPreset(config:BraceletConfig):BraceletPreset {
 const current=matchingBraceletPreset(config);const choices=braceletPresets.filter(p=>p.id!==current?.id);
 return choices[Math.floor(Math.random()*choices.length)];
}
export function braceletDesignLink(config:BraceletConfig):string {
 const query=new URLSearchParams({fragrance:config.fragrance,style:config.style,finish:config.finish,charms:config.charms.join(',')});
 const preset=matchingBraceletPreset(config);if(preset)query.set('preset',preset.id);
 return `/atelier?${query.toString()}`;
}
