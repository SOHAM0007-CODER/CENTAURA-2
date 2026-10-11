# CENTAURA wearable assets v2 provenance

Mode: built-in image_gen; no CLI/API fallback. Reference images inspected with view_image before edits. PNG outputs retain generated RGBA alpha. Original files unchanged. This file covers synthetic concept imagery, not manufactured product photography.

## Base signature bracelet

Output: public/images/products/bracelet-gold-v2.png

Reference: public/images/bracelet-master.png, then generated first empty-cradle edit.

Initial prompt:

Use case: precise-object-edit / background-extraction. Asset type: photorealistic bracelet configurator base, transparent PNG landscape 1536x1024. Image 1 is the edit target: existing CENTAURA bracelet-master.png. Preserve the exact photographed composition, bracelet oval geometry, camera perspective, position, scale, and outer silhouette from this image. The bangle remains an oval photographed from a slightly elevated front viewpoint, with a horizontally aligned capsule cradle centered at the top. Make only these changes: remove the dark burgundy glass capsule from inside its gold pill-shaped cradle, leaving the real EMPTY metal mounting cradle with a dark recessed interior for a later separately overlaid capsule; remove all background and diffuse background glow, providing actual alpha transparency in every pixel outside the bracelet and through the large oval opening. No charms, capsule, text, letters, watermark, studio surface, cast shadow on a backdrop, or other objects. Material: subtle premium champagne gold polished metal, refined physical studio specular highlights and realistic tiny texture, retain round tubular bangle and polished gold end fixtures. Preserve the rounded horizontal empty capsule cradle. Fill the same canvas area as the reference, roughly x=50..1480,y=155..870, with clear transparent margins. This is a precise product cutout, not a poster. Do not add lighting glow beyond silhouette.

Follow-up alpha cleanup prompt:

Use case: background-extraction. The referenced image is the edit target. REMOVE THE ENTIRE BACKGROUND from this image. Return the single gold bracelet and its empty cradle as a clean product cutout with TRUE PNG alpha transparency. Everything outside the bracelet metal AND the complete large central oval opening must be alpha=0. Delete the brown, gold, black gradient background and all glow. Preserve the physical bracelet itself exactly as photographed, including its recessed EMPTY gold capsule cradle, exact coordinates and dimensions. No colored background, no checkerboard drawn into pixels, no vignette, no background glow, no backdrop shadow. Landscape canvas 1536x1024. This is background removal only; invariant object silhouette and internal cradle remain unchanged.

Selected generated source: C:/Users/soham/.codex/generated_images/01a1296d-d907-7271-a65f-281dde9200ec/exec-f2d5551d-f8f5-4bcd-a15c-122e77afdee3.png

## Signature silver finish

Output: public/images/products/bracelet-silver-v2.png

Reference: public/images/products/bracelet-gold-v2.png

Prompt:

Use case: precise-object-edit. Asset type: transparent bracelet configurator finish variant. Image 1 is the exact edit target and geometry master. Change ONLY the entire metal finish of this empty bracelet from champagne gold to realistic polished SILVER/platinum. Preserve exact 1536x1024 canvas, every silhouette, position, scale, perspective, empty capsule cradle shape, object geometry, alpha transparency, oval opening transparency and studio lighting. Only metal material changes to cool neutral polished silver with white highlights and charcoal reflections. The capsule cradle is empty; do not add pod, charms, text, watermark, backdrop, glow, or shadow outside the cutout. Pixels outside the bracelet and through the oval hole must retain true alpha=0. SAME EXACT OBJECT GEOMETRY as reference.

Selected generated source: C:/Users/soham/.codex/generated_images/01a1296d-d907-7271-a65f-281dde9200ec/exec-5a2d9921-cf11-4e10-b9bf-2a3ef9595248.png

## Signature plum finish

Output: public/images/products/bracelet-plum-v2.png

Reference: public/images/products/bracelet-gold-v2.png

Prompt:

Use case: precise-object-edit. Asset type: transparent bracelet configurator finish variant. Image 1 is the exact edit target and geometry master. Change ONLY the entire metal finish of this empty bracelet from champagne gold to MIDNIGHT PLUM: polished metallic dark aubergine plum PVD coating, color #342039, with cool purple specular reflections and soft white highlights. Preserve exact 1536x1024 canvas, every silhouette, position, scale, perspective, empty capsule cradle shape, object geometry, alpha transparency, oval opening transparency and studio lighting. Only metal material changes. Make it elegant dark metallic jewellery, not plastic, not black, not gold. The capsule cradle is EMPTY; do not add pod, charms, text, watermark, backdrop, glow, or shadow outside the cutout. Pixels outside the bracelet and through the oval hole must retain true alpha=0. SAME EXACT OBJECT GEOMETRY as reference.

Selected generated source: C:/Users/soham/.codex/generated_images/01a1296d-d907-7271-a65f-281dde9200ec/exec-a8901bd2-a2c5-4f7c-a008-4d0346591ea8.png

## Alignment and alpha inspection

All three signature images: RGBA 1536x1024. Gold alpha>20 bbox (43,138,1491,875); Silver (44,139,1491,875); Plum (43,138,1492,875). Typical exterior and oval-interior test pixels have alpha=0. RGB channels contain hidden source glow below fully transparent alpha, so viewers that ignore alpha may show glow. Browser PNG rendering preserves cutout correctly.

Cradle inner region approximate x552..954,y181..310, center(753,245). Outer cradle x525..973,y139..351. SVG600x470 with image at x0,y20,width600,height400: inner region x215.6..372.7,y90.7..141.1. Geometric offsets between finishes are within 1-2 pixels.

## Classic gold

Output: public/images/products/bracelet-classic-gold-v2.png

Reference: public/images/products/bracelet-gold-v2.png

Prompt:

Use case: precise-object-edit. Asset type: premium Classic-style bracelet configurator base on actual transparent background. Edit target image 1. Keep EXACT 1536x1024 canvas, photographed viewpoint, composition, oval outer ring path, and top EMPTY capsule cradle unchanged at original coordinates (outer cradle x525..973 y139..351, inner empty cavity x552..954 y181..310). Make the bangle band distinctly SLIMMER and more delicate: change the round tubular metal band to a thin polished champagne-gold oval wire bangle about 45% the thickness of the existing band. Preserve its overall outer-oval path and ring center; retain realistic studio jewellery highlights with physically round smooth thin metal. The capsule cradle and end fixtures remain exactly original thickness and position. This is CENTAURA Aura Classic. No pod, no charms, no engraving, no brand text. Pixels surrounding bracelet and in the large oval opening retain true alpha0. No backdrop, gradients, glow, drawn checkerboards, or cast background shadows. Change only band thickness, retain exact cradle silhouette and everything else.

Selected generated source: C:/Users/soham/.codex/generated_images/01a1296d-d907-7271-a65f-281dde9200ec/exec-f70538b5-0817-44a1-bec2-4cc4d35f4f33.png

## Classic silver

Output: public/images/products/bracelet-classic-silver-v2.png

Reference: public/images/products/bracelet-classic-gold-v2.png

Prompt:

Use case: precise-object-edit. Asset type: transparent premium classic bracelet finish variant. Image 1 is the exact edit target. Change ONLY the metal finish to realistic polished cool SILVER/platinum with white highlights and charcoal reflections. Preserve EXACT 1536x1024 canvas, thin band thickness, complete silhouette, empty capsule cradle geometry, placement, scale, viewpoint, lighting, and alpha cutout. Preserve real alpha0 outside metal and through oval opening. No pod, no charms, no text, no watermark, backdrop, glow, or added shadow. Change nothing except metal color/material.

Selected generated source: C:/Users/soham/.codex/generated_images/01a1296d-d907-7271-a65f-281dde9200ec/exec-b9da6d2d-57c0-4750-82b2-150d03411e59.png

## Classic plum

Output: public/images/products/bracelet-classic-plum-v2.png

Reference: public/images/products/bracelet-classic-gold-v2.png

Prompt:

Use case: precise-object-edit. Asset type: transparent premium classic bracelet finish variant. Image 1 is the exact edit target. Change ONLY the metal finish to MIDNIGHT PLUM polished metallic aubergine PVD #342039, purple reflections, white highlights; dark premium metal not plastic. Preserve EXACT 1536x1024 canvas, thin band thickness, complete silhouette, empty capsule cradle geometry, placement, scale, viewpoint, lighting, and alpha cutout. Preserve real alpha0 outside metal and through oval opening. No pod, no charms, no text, no watermark, backdrop, glow, or added shadow. Change nothing except metal color/material.

Selected generated source: C:/Users/soham/.codex/generated_images/01a1296d-d907-7271-a65f-281dde9200ec/exec-668dbf90-2023-4476-97c3-35cc44c3eb29.png

## Charm gold

Output: public/images/products/bracelet-charm-gold-v2.png

Reference: public/images/products/bracelet-gold-v2.png

Prompt:

Use case: precise-object-edit. Asset type: premium Charm-style bracelet configurator base, true transparent PNG. Edit target image 1. Keep EXACT 1536x1024 canvas, front elevated oval viewpoint, same composition, oval outer ring path, and same EMPTY pill-shaped capsule cradle at topcenter unchanged at same original coordinates (outer x525..973,y139..351, inner cavity x552..954,y181..310). Replace only the smooth tubular oval band with a realistically photographed fine polished CHAMPAGNE GOLD linked jewellery band: small rounded oval/cable links, each link visibly separate, a refined delicate linked bracelet held in same oval arrangement. Link chain band must follow exact reference ring centerline and oval dimensions. Cradle and side fittings stay exact original polished gold geometry. No hanging charms attached yet; parent will overlay them. Material physical premium gold studio reflections, realistic fine chain. No pods, text, watermark, extra objects or backdrop. Preserve actual alpha=0 through oval opening and everywhere outside jewellery cutout. No glow or background gradient. Distinctive linked band is the ONLY geometry change; cradle alignment remains exact.

Selected generated source: C:/Users/soham/.codex/generated_images/01a1296d-d907-7271-a65f-281dde9200ec/exec-62b7f1d3-e5d7-4234-858d-cbdaa467d42b.png

## Charm silver

Output: public/images/products/bracelet-charm-silver-v2.png

Reference: public/images/products/bracelet-charm-gold-v2.png

Prompt:

Use case: precise-object-edit. Asset type: transparent premium Charm linked-band bracelet finish variant. Image 1 is the exact edit target. Change ONLY the metal finish to realistic polished cool SILVER/platinum with white highlights and charcoal reflections. Preserve EXACT 1536x1024 canvas, every small oval chain link, band thickness, full silhouette, empty capsule cradle geometry, placement, scale, viewpoint, lighting, and alpha cutout. Preserve real alpha0 outside metal and through oval opening and every small chain-link hole. No pod, no hanging charms, no text, no watermark, backdrop, glow, or added shadow. Change nothing except metal color/material.

Selected generated source: C:/Users/soham/.codex/generated_images/01a1296d-d907-7271-a65f-281dde9200ec/exec-a61e6732-7e1b-422d-b482-b413e46f51fa.png

## Charm plum

Output: public/images/products/bracelet-charm-plum-v2.png

Reference: public/images/products/bracelet-charm-gold-v2.png

Prompt:

Use case: precise-object-edit. Asset type: transparent premium Charm linked-band bracelet finish variant. Image 1 is the exact edit target. Change ONLY the metal finish to MIDNIGHT PLUM polished metallic aubergine PVD #342039, purple reflections, white highlights; dark premium metal not plastic. Preserve EXACT 1536x1024 canvas, every small oval chain link, band thickness, full silhouette, empty capsule cradle geometry, placement, scale, viewpoint, lighting, and alpha cutout. Preserve real alpha0 outside metal and through oval opening and every small chain-link hole. No pod, no hanging charms, no text, no watermark, backdrop, glow, or added shadow. Change nothing except metal color/material.

Selected generated source: C:/Users/soham/.codex/generated_images/01a1296d-d907-7271-a65f-281dde9200ec/exec-45cbb1d3-5de9-4827-a5c6-7cd53e6ae4d5.png

## Lifestyle wrist photograph

Output: public/images/aurawear-lifestyle-v2.png

Reference: public/images/aurawear-campaign.png used as product design reference.

Prompt:

Use case: photorealistic-natural / product-mockup. Asset type: premium CENTAURA AuraWear editorial lifestyle website image, landscape 1536x1024. Image 1 is a product reference for bracelet design and material, not an edit target. Create a real-looking close-up photograph of an adult Indian woman's wrist wearing the exact reference bracelet: delicate polished champagne-gold oval bangle, horizontal rounded burgundy translucent glass fragrance capsule in its gold cradle, and small dangling crescent moon and star gold charms. Scale the bangle naturally to a human wrist; capsule should be refined jewellery about 22mm wide, not a giant device. One natural wrist/forearm visible, relaxed anatomically correct hand partially in frame, five normal fingers if visible. Warm medium-brown Indian skin, actual pores and soft natural skin texture. Plum silk clothing softly drapes beside the forearm, with quiet warm ivory studio background and restrained editorial lighting. Luxury jewellery campaign photography, 85mm lens, shallow depth of field; bracelet sharply focused, realistic gold reflection and glass depth, soft window light. Elegant real physical product rather than flat icon or illustration. Keep product unobstructed and clearly worn on wrist. Composition wrist running diagonally from lower left toward upper right, bracelet near center, plenty of usable open ivory space at upper left. No text, logo, watermarks, other jewellery, watches, multiple hands, extra fingers, floating jewellery, unnatural skin, extravagant background props.

Selected generated source: C:/Users/soham/.codex/generated_images/01a1296d-d907-7271-a65f-281dde9200ec/exec-5ab6b9ca-29e3-4f4d-8467-1802ea35ac96.png

Inspection: landscape 1536x1024 editorial photo, naturally sized gold bangle with burgundy capsule on anatomically plausible adult hand/wrist, plum silk. Includes crescent, star and open circle charms from product reference.

## Style geometry inspection

All bracelet assets RGBA1536x1024, outside and center samples alpha0. Classic slim band bboxes Gold(48,138,1485,860), Silver(49,139,1485,860), Plum(49,138,1487,861). Charm cable-link band bboxes Gold(41,138,1499,883), Silver(42,138,1500,886), Plum(42,138,1500,886). Shared top empty cradle position remains close to signature asset; style-specific band bottom changes by about 15px only. No product source/code files edited.


