# CENTAURA implementation checks

Production build: **`npm run build` completed successfully** on 11 October 2026.

## Observed browser journeys

- Homepage Mitti selection → Wear this aura → Atelier: Mitti preselected.
- Aura Signature + Champagne Gold + Crescent Moon starter configuration: **₹1,448** in the bag.
- Change a bag design to Polished Silver: updated design and total remain after page refresh.
- A second bracelet with Mogra: separate line from the Mitti bracelet, subtotal **₹2,896**.
- Demo checkout: completion explicitly states no order or payment; demo bag cleared.
- Five grounded quiz choices: Mitti Attar recommendation and exact `/atelier?fragrance=mitti` handoff.
- Fourth charm attempt after three selections: limit message appears and preview remains at three charms.
- Saved fictional dedication and memory: correct text appears on the local memory card.
- Aura Language switches to Mogra: bottle, AuraPod, bracelet, packaging, digital and campaign visuals all reference Mogra.
- Local Mogra MP4: playback observed with readyState 4, 1280 px video width, advancing current time and no media error.
- Mobile navigation exposes every main route with working links.

## Layout checks

Aura Language inspected at **360, 390, 768, 1024, 1280, 1440 and 1920 px**. An initial narrow-screen grid overflow was found and fixed by allowing identity cells to shrink. Final document width stayed within the viewport at every listed size.

Home and Atelier also inspected at 390 px; desktop homepage inspected at 1440 px. Screenshots are in `deliverables`.

## Local server checks

The homepage and ten main routes returned HTTP 200 when opened directly on the production server. A local video byte-range request returned HTTP 206 with the correct Content-Range. All core source references use local media and local fonts.

## Limits of these checks

Physical Wi-Fi was not switched off. A separate lower-powered laptop was not available. There is no measured frame-rate or Lighthouse score. The demo's architecture requires no remote services, but rehearse on the actual judging laptop using `START-DEMO.cmd` with Wi-Fi off.

Bracelet renders and assembly are illustrative concepts. Hardware performance and manufacturing feasibility require prototyping.

## Realism upgrade — 11 October, final v3

- Production build completed after the final high-resolution bracelet family and campaign integration.
- Dedicated bracelet agent inspected all nine style/finish combinations: photographic layer loaded, finish URI matched selection, connected charms stayed inside the preview SVG.
- Home bracelet preview inspected at 390 px and 1440 px. Mobile document width stayed within viewport; the earlier giant cropped moon is fixed.
- Final production Atelier preview inspected at 1440 px: brushed Signature band, small Mitti scent window, clasp and connected crescent. Caption remains fully visible.
- Product gallery's bottle enlargement, aura and packaging views opened on the production server. Modal closed successfully.
- The fragrance purchase dock appeared after navigating to the aura section, showing the current title and ₹699 selection price.
- Local Mitti film loaded to readyState 4 without a media error and responded to Pause.
- New campaign, wrist and starter-box visuals inspected and integrated. Original PNGs and exact generation prompts retained in the project.
- Route bundles are split, WebP delivery images are compressed, offscreen film/sequence activity pauses, saved cart content is normalized and synchronized between local tabs.
- No frame-rate benchmark or Lighthouse score was measured. Commercial checkout, inventory and fulfillment remain outside this offline competition demo.

Latest package: `deliverables/CENTAURA-OFFLINE-DEMO-V3.zip`. Extract and run `START-DEMO.cmd` on a computer with Node.js installed. Runtime package omits unused PNG masters, TTF originals and inspection frames; all source assets remain in the project.

## Aura Language / curated designs — v4 observations

- Final TypeScript and Vite production build passed after all changes.
- All five Aura Language view controls opened their distinct output: Colour, Form, Texture, Motion and Typography.
- Inspected desktop composition at1440px, mobile typography/motion at390px, and the film control at886px. Mobile document width375px stayed inside390px viewport.
- Mogra motion film loaded to readyState4, no media error, and responded to Pause. Play resumed on the product page; final screenshot shows the pause icon.
- Moon Garden preset selected Mogra/Charm/Silver/Heart+Star. Surprise then selected a different curated design.
- Homepage surprise selected an exact fragrance/style/finish/plural-charms URL; opening Make this yours selected the same preset in Atelier.
- Current gift-wrap preference persisted in preset prices. Existing bag contents were left intact.
- Corrected Mogra's legacy dark homepage preview background; computed caption colour is dark ink on the neutral studio.
- Screenshots: aura-language-v4-desktop.jpg, identity-showcase-v4.jpg, curated-bracelets-mobile-v4.jpg, film-control-v4.jpg.
- No new dependencies or test suites added. No frame-rate benchmark or real-commerce backend was introduced.

## Touchpoint corrections — v5

Shortened the memory-card message to “Always close.” and separated its card from the bracelet. Campaign lettering is above the product layer, with a separate visible hashtag footer. Production build passed; both touchpoints inspected at1002px. Screenshot: `deliverables/story-touchpoints-v5.jpg`.

Latest offline package: `deliverables/CENTAURA-OFFLINE-DEMO-V5.zip`.

## Final review corrections — v6

- TypeScript and Vite production build passed after homepage and touchpoint fixes.
- Homepage now renders AuraStudio with Colour, Form, Texture, Motion and Typography; the old compact AuraLab is removed from this page.
- Our Story inspected at 1280, 1024, 768 and 390 px. Document widths stayed within each viewport; phone layout shows one complete touchpoint per row.
- Proof: `deliverables/home-aura-studio-v6.png` and `deliverables/story-grid-mobile-v6.png`.
- No frame-rate benchmark or commercial backend verification was performed.
- Latest handoff: `deliverables/CENTAURA-OFFLINE-DEMO-V6.zip`.
