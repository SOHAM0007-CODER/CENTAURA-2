# AuraWear builder realism pass

## Bracelet atlas v3

- Mode: built-in image generation; transparent background requested.
- Input: original generation, no reference images.
- Original output: C:/Users/soham/.codex/generated_images/01a129a5-94b9-7112-bbf3-c91cc3eb5335/exec-9f0d00ba-1517-45a5-ba8d-2c0175e315fb.png
- Saved master: public/images/products/bracelet-atlas-v3.png
- Delivery copy: public/images/products/bracelet-atlas-v3.webp, 1536 × 1024, 259,926 bytes, RGBA. Sharp compression preserves the composition and alpha.
- Layout: three columns (Classic, Signature, Charm), three rows (Champagne Gold, Silver, Plum). Display regions use SVG viewports. Capsule windows and original jewellery charms are editable native vectors layered over the product photograph.
- All earlier masters remain intact.

### Exact prompt

Use case: product-mockup. Asset type: a transparent production-quality catalogue sprite atlas for a fragrance-jewellery website. Create a 3 by 3 grid of exactly NINE separate photorealistic perfume bracelets. Each cell equally sized, generous transparent gutters, every bracelet centered in identical slightly elevated front three-quarter perspective. Columns left to right: slim round Classic bangle, subtly wider rounded Signature bangle, delicate small oval-link Charm bracelet. Rows top to bottom: restrained pale CHAMPAGNE GOLD metal, POLISHED SILVER metal, dark satin MIDNIGHT PLUM metal. All nine are the same physical fragrance bracelet family, wearable and slim. Each has a compact elongated rectangular refillable perfume capsule at the upper middle of the bracelet, approximately one fifth of the bracelet's total width. The capsule should look like a functional removable scent reservoir housed in a refined cradle: thin rim, visible tiny side dispensing slots and a discreet refill seam, no gemstone. Capsule face is empty neutral satin ivory, without any text. Photograph actual manufactured jewellery: softly brushed microtexture, realistic machining, very small joint seams and hinged clasp, restrained broad softbox highlights, no molten chrome, no yellow-orange gold, no exaggerated heavy ends. Each bracelet forms an oval tilted toward the viewer. Each bracelet fits entirely in its own cell with clean sharp alpha edges and zero overlap. No additional dangling charms, no shadows outside object, no hands, no labels, no logos, no text, no borders, no scenery. True transparent background. Exact 3 columns by 3 rows. Consistent lighting and scale across all nine. The task is to make understated realistic functional fragrance jewellery, like a refined industrial product photograph; avoid fantastical AI jewellery or glossy illustration.

## Component construction

The six existing original charm silhouettes are kept as native vector artwork. Each now has a small jump ring, explicit dimensions, a darker extruded edge, a restrained metal front and rim highlights. The fragrance module has a brushed shell, a visible scent window, a refill seam and a recessed control. These remain concept details and are not manufacturing specifications.

## Final higher-resolution finish families

- Mode: built-in image editing with transparent background, one portrait sprite per finish. Each is native 1024 × 1536; every silhouette has 1024 pixels of source width.
- Active source files: public/images/products/bracelet-gold-portrait-v3.png, bracelet-silver-portrait-v3.png, bracelet-plum-portrait-v3.png.
- Active delivery files: sibling WebP copies, quality91, alphaQuality100, unchanged composition. Gold253,190 bytes; Silver199,088; Plum194,800.
- Initial gold edit reference: public/images/products/bracelet-atlas-v3.png.
- Silver and Plum edit reference: public/images/products/bracelet-gold-portrait-v3.png.
- Original generated paths: C:/Users/soham/.codex/generated_images/01a129a5-94b9-7112-bbf3-c91cc3eb5335/exec-6d16298c-4bac-4203-a848-e934f3a12eed.png (Gold); exec-a5db514c-fd08-40be-ac18-2c57865e2bc7.png (Silver); exec-1fd64250-900b-4dd9-9625-f68b722dc5ae.png (Plum).
- No image compositing/recolouring is done by compression. The SVG renderer selects crop regions directly from each intact photograph.
- Crop regions begin at source y0, y530 and y1050; source width1024, source viewport height530. Middle and lower starts sit inside transparent gutters, preventing another bracelet's clasp entering the crop.
- Capsule face source anchors: Classic x378,y62; Signature x374,y568; Charm x378,y1084. Overlay width265, fitting the original recessed plate.
- Sampled delivered WebP alpha values at source (20,300), (512,300), (512,800), (512,1310) are zero for all three finishes. The oval centres remain transparent.

### Gold exact prompt

Use case: precise-object-edit. Reference/edit target: this transparent 9-bracelet atlas. Produce a sharper portrait atlas, 1024 pixels wide and 1536 high, containing ONLY its three CHAMPAGNE GOLD bracelets, arranged one per row, vertically stacked. Top row slim round Classic, middle row wider rounded Signature, bottom row delicate linked Charm bracelet. Keep the exact understated manufactured product designs, brushed pale gold texture, realistic functional capsule cradles with tiny dispensing vents, real small clasps, perspective and soft studio lighting from the supplied image. Do not redesign. Only extract the three top-row gold products, enlarge faithfully with crisp real machining detail, and recompose them as three vertically stacked identical-size cells. Each complete bracelet centered horizontally, occupies 900px of 1024px canvas width, oval horizontal width to height ratio approximately 2.1:1, each is fully contained in its own 512px-high cell. Top capsule face remains empty pale satin metal. No text or marks, no dangling charms, no other objects, no backgrounds or floor or shadows. True transparent background, preserve natural restrained highlights. This is a website catalogue sprite, maximum detail, clean alpha edges. EXACTLY three bracelets in ONE COLUMN by THREE ROWS.

### Silver exact prompt

Use case: precise-object-edit. Edit target: supplied transparent portrait 3-bracelet catalogue atlas. Change ONLY the metal finish of all three bracelets to natural polished SILVER, neutral cool silver alloy, restrained broad grey-white highlights; no warm gold remains. Maintain identical portrait canvas 1024×1536, each bracelet position, perspective, geometry, exact bounds, clasp, capsule cradle, empty ivory capsule face, vents, brushed microtexture and soft realistic studio lighting. Keep three same products in one column by three rows, Classic above Signature above Charm. Do not shift, resize, crop or redesign any component. Capsule central satin ivory face stays unchanged, only surrounding metal and band changes. No labels, no text, no dangling charms. Preserve the existing true alpha transparency, especially completely transparent oval centers and cell corners. No background, floor, coloured glow or floor shadow. This is an exact finish variant for an interactive jewellery configurator.

### Plum exact prompt

Use case: precise-object-edit. Edit target: supplied transparent portrait 3-bracelet catalogue atlas. Change ONLY the metal finish of all three bracelets to deep MIDNIGHT PLUM satin coated metal, dark muted purple-plum #665069, subtle natural silver-plum edge highlights, no gold remains. Maintain identical portrait canvas 1024×1536, each bracelet position, perspective, geometry, exact bounds, clasp, capsule cradle, empty ivory capsule face, vents, brushed microtexture and soft realistic studio lighting. Keep three same products in one column by three rows, Classic above Signature above Charm. Do not shift, resize, crop or redesign any component. Capsule central satin ivory face stays unchanged, only surrounding metal and band changes. No labels, no text, no dangling charms. Preserve the existing true alpha transparency, especially completely transparent oval centers and cell corners. No background, floor, coloured glow or floor shadow. This is an exact finish variant for an interactive jewellery configurator.
