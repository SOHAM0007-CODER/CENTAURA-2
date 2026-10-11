# CENTAURA — Brandathon demo

**The scent you can see. The aura you can wear.**

This is the upgraded fragrance and wearable jewellery website in `C:\Users\soham\Centaura_renewed`.

## Run the finished offline website

Double-click **START-DEMO.cmd**. Keep its terminal open and visit **http://127.0.0.1:4173**.

The supplied `dist` folder is already built. The production server uses only Node.js built-ins: no npm install or internet is needed to run that build. Node.js must already be installed on the demo computer. Opening `dist/index.html` by itself does not support the website's routes; use the launch script.

The server supports direct route refreshes and byte-range requests for local films. Everything needed by the core website is local: images, fonts, films, quiz, customizer, memory cards, cart and demo checkout.

## Continue developing

```powershell
cd C:\Users\soham\Centaura_renewed
npm run dev
```

Development preview: http://127.0.0.1:5173. Dependencies are installed in this folder. If using a fresh machine for development, run `npm ci` while internet is available.

After source changes:

```powershell
npm run build
npm run serve
```

## Main experiences

- `/`: cinematic perfume / bracelet opening, aura discovery, instant personalisation preview, local sensory films, collection, packaging and campaign.
- `/collection`: perfumes, bracelets, pods, original charms and gift sets.
- `/fragrance/mitti`: fragrance details, local film, packaging, shopping and matching bracelet link. Other IDs are `kasturi`, `sandalwood`, `mogra`.
- `/aurawear`: bracelet styles, live scent switching and illustrated module assembly.
- `/atelier`: live bracelet configuration, three finishes, up to three charms, initial letter, dedication, memory message, gift presentation and itemised pricing.
- `/aura-language`: five visual dimensions and synchronized bottle, pod, bracelet, packaging, digital and campaign identities.
- `/find-your-aura`: five-question visual preference journey, with an exact fragrance handoff to the Atelier.
- `/our-story`: brand story, campaign and twelve branded deliverable studies.
- `/gifting`, `/memory-card`, `/cart`, `/checkout`: connected gifting and local shopping demo.

## Five-minute judging journey

1. Begin on the homepage. Explain the visual scent challenge and the connected AuraWear idea.
2. Select **Mitti Attar** in the four aura cards and choose **Wear this aura**.
3. In the Atelier, keep **Aura Signature**, select **Champagne Gold**, add **Crescent Moon**. A starter set plus this charm is **₹1,448**.
4. Change to another finish to show immediate product feedback; restore gold and add your creation to the bag.
5. Open **Aura Language**, switch from Kasturi to Mogra and show the six coordinated brand applications.
6. Open **Our Story** for the campaign and twelve deliverables. End with the quiz or memory gift if time permits.

## Product and pricing model

Four fixed fragrances: **Kasturi Attar, Mitti Attar, Mysore Sandalwood and Mogra**. Jewellery choices change the format and presentation, not the perfume formulation.

Indicative competition prices: perfume ₹699 / 30 ml; bracelet ₹999; bracelet + one matching filled AuraPod + signature box ₹1,299; refill ₹249; charms ₹149–₹299; premium gift wrap ₹150. Charms are additional to the starter set. Price definitions live in `src/wearables.ts`; fragrance data lives in `src/data.ts`.

Bracelet imagery and assembly are design concepts requiring physical prototyping. No leak resistance, scent duration or certified material performance is claimed. No physical product or commercial order is created.

## Local data and privacy

Cart configurations, Atelier preferences, quiz results and saved memory cards persist only in this browser. Different configurations keep separate cart lines; identical configurations combine quantities. Cart designs can be edited.

Personal memory-card URLs contain no dedication. A card saved here does **not** travel to another device. `/memory-card?example=1` contains fictional demonstration text. Newsletter and checkout actions do not transmit details, take payment or place an order. Clear saved demo preferences through **Privacy → Clear demo data**.

## Media and motion

Four user-supplied films are mapped in `public/videos/video-assets.json`, copied locally with audio removed and fast-start metadata. Each has a JPG poster. Videos load near the viewport, pause offscreen or in a hidden tab, and respect reduced-motion preferences. The unrelated fifth film is retained as an optional asset and is not used in the core fragrance narrative.

Campaign images were generated specifically for CENTAURA. Photographic bottle renders and restrained bracelet material renders are combined with deterministic SVG capsule and charm layers. Selections update immediately without generating a new image or calling a server. All asset files are under `public`; source assets in `USABLE` are preserved.

The two local font downloads are compressed WOFF2 subsets, reduced from approximately 1.44 MB to 156 KB. Original fonts and their OFL licenses are preserved.

Motion uses small SVG/CSS transformations and Motion for reveals and state transitions. No WebGL, external API or remote font is needed.

## Demo preparation

Use the same browser profile when demonstrating persistence. Start the server before disconnecting internet. Manually switch Wi-Fi off and reload the production URL on your presentation computer before the event. Physical Wi-Fi was not changed by the build process. Clear sample bag items before judging.

## Realism and production polish — 11 October update

- Four photographic bottle variants, consistent labels and glass silhouette.
- Bracelet visuals redesigned with brushed materials, visible scent window, refill seam, side vents and clasp. Original charms have explicit dimensions, bevels and small attachment rings; the oversized clipped charm defect is corrected.
- Gold, silver and plum versions of Classic, Signature and Charm, with matching campaign, wrist and gift presentation images.
- Product gallery: bottle, aura and presentation views, enlarged view and expandable specifications.
- A purchase bar keeps the current selection available after primary controls leave view.
- Routes are loaded in separate chunks; navigation warms the next page on hover/focus. Browser Back restores prior scroll positions. Search includes bracelets, pods, gifting and charms.
- Local films have explicit poster fallbacks. Campaign imagery can be paused or chosen manually. Sequence timers and media stop when offscreen or hidden.
- Saved cart data is validated, normalized and synchronized across browser tabs. Error recovery keeps the bag available.
- The local server supports ETag revalidation, long caching for hashed assets and a policy limiting resources to this website.

WebP delivery copies preserve image composition and transparency while retaining original PNGs in the project. Bottles fell from roughly 1.8 MB to 170–180 KB each; campaign images are roughly 80–120 KB. Exact byte counts: `public/images/optimized-assets.json`. This is a polished offline competition build; payments, fulfilment and physical product validation are still outside the demo.

Generated asset prompts and references: `ASSET-PROVENANCE-PRODUCTS-V2.md`, `ASSET-PROVENANCE-WEARABLES-V2.md`, `ASSET-PROVENANCE-BUILDER-V3.md`, `ASSET-PROVENANCE-CAMPAIGN-V3.md`.

## Latest handoff

Use `deliverables/CENTAURA-OFFLINE-DEMO-V3.zip` for the final upgraded demo. Extract it, double-click `START-DEMO.cmd` and keep that terminal open. The original `CENTAURA-OFFLINE-DEMO.zip` is an earlier snapshot.

Updated screenshots: `deliverables/bracelet-builder-v3-desktop.jpg`, `deliverables/bracelet-builder-v3-mobile.jpg`, and `deliverables/fragrance-gallery-v3.jpg`.

## Aura Language and personalisation — final v4

Aura Language now presents five distinct premium studies: architectural colour planes with palette values, sculptural forms, four material impressions, local silent motion films, and editorial typography compositions. The selected fragrance also updates the new product-led identity showcase.

The Atelier and homepage preview now offer four curated bracelet compositions and a Surprise me shortcut. Every composition remains editable; personal text, starter-set and gift-wrap choices are preserved. The homepage passes the entire chosen design into the Atelier.

Film controls now use a clean circular pause/play icon, with accessible labels reflecting actual playback. The Mogra homepage bracelet preview uses a neutral background with readable caption contrast.

**Latest handoff:** `deliverables/CENTAURA-OFFLINE-DEMO-V4.zip`. Earlier ZIPs are snapshots. Extract this package and launch `START-DEMO.cmd` with Node.js installed.

Latest package: `deliverables/CENTAURA-OFFLINE-DEMO-V5.zip`, including the cleaner memory-card presentation and unobstructed campaign hashtag.

## Final layout corrections — v6

The homepage now uses the same five premium Aura Language studies as the dedicated page. Our Story's twelve touchpoints use shrinkable grid tracks and one column on phones, fixing the horizontal overflow and cropped mockups.

**Current handoff: `deliverables/CENTAURA-OFFLINE-DEMO-V6.zip`.** Extract the ZIP, run `START-DEMO.cmd` with Node.js installed, and keep its terminal open. Earlier packages are snapshots. Presentation checklist: `PPT-CHECKLIST.md`.
