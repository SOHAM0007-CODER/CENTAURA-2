# CENTAURA image asset provenance

All four assets were generated using the built-in `image_gen` tool. No CLI or direct API fallback was used. Original generated files were retained; selected outputs were copied into the project. The original perfume assets were first saved in `C:\Centaura_renewed`, before the project moved to `C:\Users\soham\Centaura_renewed`.

## hero-campaign.png

- Mode: built-in `image_gen`, new generation.
- Transparent background: false.
- Reference images: none.
- Final project path: `C:\Users\soham\Centaura_renewed\public\images\hero-campaign.png`.
- Size: 1536 × 1024; 1,783,780 bytes.

Exact final prompt:

```text
Use case: product-mockup. Asset type: premium perfume landing page hero photograph. Generate a cinematic realistic luxury product photograph, landscape composition around 1536x1024. Scene: deep midnight plum studio backdrop near #251B2B, quiet gradient and subtle floor reflection. Subject: ONE thick clear-glass perfume bottle, rounded rectangular body, amber liquid with faint plum reflections, polished champagne-gold cylindrical cap with thin engraved rings. Small understated cream label with precise uppercase serif wordmark "CENTAURA" (C E N T A U R A) and no other text. Bottle placed right-of-center, occupying right half, full silhouette visible including cap and base. Dramatic sculptural burgundy satin ribbons flowing behind and to right of bottle evoke an abstract scent aura, restrained and elegant. LEFT 45 percent of composition must be very quiet dark negative space for webpage headline, no objects or highlights there. Gold rim light, convincing thick glass refraction, dark editorial shadows, immaculate high-end fragrance campaign photography. No people, hands, ingredients, flowers, UI, slogans, watermarks, extra bottles. Photograph should look real, sophisticated and restrained rather than glowing science fiction.
```

## bottle-master.png

- Mode: built-in `image_gen`, reference-based transparent product cutout.
- Transparent background: true.
- Reference image path at generation: `C:\Centaura_renewed\public\images\hero-campaign.png`.
- Current reference asset path: `C:\Users\soham\Centaura_renewed\public\images\hero-campaign.png`.
- Final project path: `C:\Users\soham\Centaura_renewed\public\images\bottle-master.png`.
- Size: 1536 × 1024; 1,394,569 bytes.
- Alpha inspection: exterior and corner pixels were transparent; product pixels had opacity.

Exact final prompt:

```text
Use case: background-extraction / product-mockup. Asset type: transparent perfume bottle master cutout for interactive premium website. Input image is the exact product design reference. Create a front-facing centered isolated cutout of ONLY the same CENTAURA perfume bottle from the reference image. Preserve bottle design: clear thick rounded rectangular glass body with rounded shoulders and substantial glass base, softly amber liquid, polished champagne-gold cylindrical cap with thin engraved rings near base, understated rectangular cream label with exact uppercase serif text "CENTAURA" and no additional text. Render product front facing symmetrically, full cap through full base visible, generous empty space around all edges. Reflections should be clean neutral champagne highlights suitable for compositing on many differently colored backdrops; NO burgundy satin inside or behind bottle, no backdrop, no floor reflection, no detached shadow. Premium realistic studio photograph. Actual transparent alpha background required, not a white or checkerboard painted background. One bottle only, no props, no watermark. Keep the same product geometry and label design as reference.
```

## aurawear-campaign.png

- Mode: built-in `image_gen`, reference-based campaign generation.
- Transparent background: false.
- Reference image path: `C:\Users\soham\Centaura_renewed\public\images\hero-campaign.png`.
- Reference role: lighting and style only.
- Final project path: `C:\Users\soham\Centaura_renewed\public\images\aurawear-campaign.png`.
- Size: 1536 × 1024; 1,801,146 bytes.

Exact final prompt:

```text
Use case: product-mockup. Asset type: premium concept fragrance jewelry campaign photograph for website. Reference image is style and lighting reference ONLY; replace the bottle product with a fragrance bracelet, do not include any perfume bottle. Generate luxury photoreal studio photograph in a landscape 1536x1024 composition. Deep midnight plum background near #251B2B and sculptural dark burgundy satin folds behind jewelry, quiet controlled gold rim highlights, same refined lighting as reference. ONE believable oval slim champagne-gold bangle bracelet shown in elegant three-quarter front view, complete silhouette fully visible, horizontally oval. Compact pill-shaped rounded rectangular fragrance pod integrated at top center of gold bangle: small burgundy translucent perfume reservoir capsule seated securely in a polished gold cradle, jewelry-like compact proportions, no screen or watch face. Three delicate original charms hanging separately on lower outer arc: crescent moon, small five-point star, and minimal circular aura ring. Precise fine jewelry details, realistic gold reflections, shadow on studio floor, sculptural product elegance. Jewelry positioned right-center of landscape with LEFT 45% very quiet dark negative space usable for headline. No people, hands, watches, screens, GPS, buttons, icons, text, branding, logos, watermarks, extra products. Fragrance wearable concept render should be convincing luxury jewelry, rather than electronic gadget.
```

## bracelet-master.png

- Mode: built-in `image_gen`, reference-based transparent product cutout.
- Transparent background: true.
- Reference image path: `C:\Users\soham\Centaura_renewed\public\images\aurawear-campaign.png`.
- Final project path: `C:\Users\soham\Centaura_renewed\public\images\bracelet-master.png`.
- Size: 1536 × 1024; 1,555,042 bytes.
- Alpha inspection: corner and open oval interior pixels had alpha 0.

Exact final prompt:

```text
Use case: background-extraction / product-mockup. Asset type: transparent base jewelry cutout for premium fragrance website. Input image reference establishes exact bracelet geometry. Isolate the SAME champagne-gold oval slim bangle bracelet in same three-quarter front view, with same compact pill-shaped rounded rectangular translucent burgundy perfume pod in gold cradle integrated at top center. REMOVE all three dangling charms including their loops; retain the continuous smooth bare gold lower arc. Keep exact realistic metal finish, gold cradle, burgundy reservoir shape, slim proportions. Place one bracelet centered with full silhouette visible and generous empty space. Actual transparent alpha background, including open empty oval interior; no floor, satin, shadows, dark backdrop, gradient backdrop, checkerboard painted pattern, text, watermark, or additional products. Product highlights must be neutral warm gold, suitable for compositing on multiple backgrounds. One premium believable fragrance jewelry bangle, no watch screen, no electronics, no buttons.
```
