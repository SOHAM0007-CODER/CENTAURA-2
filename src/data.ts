export type ScentId = 'kasturi' | 'mitti' | 'sandalwood' | 'mogra';
export type Dimension = 'Colour' | 'Form' | 'Texture' | 'Motion' | 'Typography';
export interface Fragrance {
  id: ScentId; number: string; name: string; aura: string; short: string;
  mood: string; character: string; description: string; story: string;
  colour: string; light: string; dark: string; texture: string; form: string; movement: string;
  price: number;
}
export const fragrances: Fragrance[] = [
  { id:'kasturi', number:'01', name:'Kasturi Attar', aura:'The Magnetic Aura', short:'The art of intrigue.', mood:'Intimate · Magnetic · Mysterious', character:'A deep, musk-inspired scent identity.', description:'An intimate presence that draws you closer. Deep, magnetic and quietly powerful.', story:'Some presences are felt long after they leave. Kasturi explores that quiet gravity through sculptural curves, velvet shadows and a warm antique-gold light. An expression of closeness, rendered in colour.', colour:'#592832', light:'#CDA477', dark:'#2E1523', texture:'Velvet and burnished metal', form:'Intertwining sculptural ribbons', movement:'Slow curves drawing inward', price:699 },
  { id:'mitti', number:'02', name:'Mitti Attar', aura:'The Grounded Aura', short:'The beauty of belonging.', mood:'Rooted · Nostalgic · Serene', character:'An earthy scent identity inspired by rain and memory.', description:'A familiar warmth that feels like belonging. Memory, comfort and the quiet beauty of being grounded.', story:'A moment you recognise before you can name it. Mitti translates the feeling of returning into terracotta, mineral texture and circles that gently expand. A small, familiar world you can carry with you.', colour:'#AC7155', light:'#F1D2AC', dark:'#613E31', texture:'Matte, porous mineral surfaces', form:'Expanding concentric circles', movement:'Gentle outward ripples and settling', price:699 },
  { id:'sandalwood', number:'03', name:'Mysore Sandalwood', aura:'The Timeless Aura', short:'The luxury of stillness.', mood:'Composed · Warm · Enduring', character:'A warm, woody scent identity.', description:'Quiet elegance with an enduring presence. Warmth, refinement and the luxury of stillness.', story:'There is confidence in a measured line. Mysore Sandalwood finds its visual voice in warm bronze, satin grain and flowing contours. Nothing hurried. Nothing overstated. Simply a sense of being completely at ease.', colour:'#C4A77E', light:'#EDDCC2', dark:'#5D4837', texture:'Smooth satin grain', form:'Parallel architectural contours', movement:'Controlled horizontal flow', price:699 },
  { id:'mogra', number:'04', name:'Mogra', aura:'The Luminous Aura', short:'The poetry of presence.', mood:'Airy · Graceful · Expressive', character:'A floral scent identity inspired by Indian jasmine.', description:'A radiant presence that feels almost weightless. Grace, luminosity and effortless expression.', story:'Light has a way of entering a room without asking. Mogra is that gentle arrival: pearlescent forms, translucent loops and a rhythm of unfolding. An airy expression of presence, softened by warm champagne.', colour:'#E8E2D9', light:'#FFF9F0', dark:'#9C8B69', texture:'Pearlescent organza', form:'Translucent loops and expanding arcs', movement:'Weightless, gentle unfolding', price:699 },
];
export const identityAccent=(s:Fragrance)=>s.id==='sandalwood'||s.id==='mogra'?s.dark:s.light;
export const dimensions: Dimension[] = ['Colour','Form','Texture','Motion','Typography'];
export const scentById = (id: string) => fragrances.find(s => s.id === id);
export const money = (n: number) => new Intl.NumberFormat('en-IN', {style:'currency',currency:'INR', maximumFractionDigits:0}).format(n);
export const dimensionCopy = (s: Fragrance, d: Dimension) => ({
  Colour: `${s.colour} and ${identityAccent(s)}: a palette that gives ${s.aura.toLowerCase()} its emotional temperature.`,
  Form: `${s.form}. A recognisable shape that expresses ${s.short.toLowerCase()}`,
  Texture: `${s.texture}. An imagined touch, translated into a visual surface.`,
  Motion: `${s.movement}. The rhythm of ${s.name}, made visible.`,
  Typography: 'One editorial serif and one clear sans-serif unite the collection. Spacing and expression give each aura its own voice.',
}[d]);
export const quizQuestions = [
  { title:'What kind of presence feels like you?', subtitle:'Choose the feeling you naturally return to.', answers:['Intense and magnetic','Calm and grounded','Refined and composed','Airy and expressive'] },
  { title:'Which visual world draws you in?', subtitle:'Let your eye choose before your mind does.', answers:['Sculptural shadows','Warm expanding ripples','Quiet flowing contours','Luminous unfolding loops'], visual:true },
  { title:'Where would you rather disappear?', subtitle:'Imagine an atmosphere, not a destination.', answers:['An intimate, mysterious room','Somewhere familiar and comforting','A quiet, elegant retreat','An open, light-filled space'] },
  { title:'Choose a texture you can almost feel.', subtitle:'The sensation matters more than the material.', answers:['Deep velvet','Warm mineral','Smooth satin','Weightless organza'] },
  { title:'How does your presence move?', subtitle:'One final instinct.', answers:['It draws people closer','It ripples gently outward','It flows with quiet confidence','It unfolds freely'] },
];
