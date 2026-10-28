# Buidler Fest 2027 website

Next.js App Router landing page. Uses the **existing approved master PNG** at `../brand/logos/builder-fest-2027-logo.png` without redrawing or regenerating it. The predev/prebuild script copies those exact bytes to `public/brand/logo.png` (gitignored).

## Local development

```bash
cd website
npm install
npm run dev
```

## Production build

```bash
cd website
npm install
npm run build
npm start
```

For Vercel/Cloudflare CI, set the project root to `website`, and ensure the checkout contains the parent `brand/` folder. Do not deploy the `website` directory in isolation. Cloudflare Pages Next.js support may require a compatible adapter.

## Content status
- Dates, hotel, ticket sales, speakers, sponsors, and registration links are **not yet confirmed** and are not invented on the page.
- Search indexing is intentionally disabled while the site is a draft.
- No external social links are shown until official ownership is confirmed.
- This is a first implementation, not a verified production deployment. Run build and browser QA before publishing.

## Design lock
Do not regenerate the logo or substitute another image. Adjust layout, sizing and spacing around the approved master instead.

## Visual reference alignment — iteration 2

The hero now layers independent `public/decor/osaka-skyline.svg` and `public/decor/sakura-petals.svg` underneath the unchanged approved master `/brand/logo.png`. These are lightweight vector decorations, **not** reproductions of Osaka Castle or the exact original illustration. The official master remains the only source of the event logo.

Next QA: run `npm run build`, check desktop 1440px and mobile 390px, verify that no logo text is clipped, and compare against the user-provided three-panel reference screenshot. The current SVG decorations are first-pass approximations; browser QA and visual approval are outstanding.

## Reference implementation checkpoint (2026-10-28)

The user-provided composite screenshot of desktop/tablet/mobile is the **visual target**, not a source for fictitious event facts. The layout has been adjusted to a full-width, centrally presented approved logo, followed by tagline, date/location metadata, skyline, ink-edge stats band, speaker placeholders, program, and venue.

Reference discrepancies still requiring actual screenshot QA: reference has bespoke Osaka Castle, waterfront photography/illustration, a full stage photograph, and speaker portraits. These cannot be substituted with fabricated real-world photographs or fake speaker identities. Current placeholder illustrations are explicitly temporary. Do not claim pixel-perfect fidelity until assets are licensed/approved and desktop/mobile browser captures have been compared.

Do not overwrite `brand/logos/builder-fest-2027-logo.png`. The master is copied byte-for-byte by `scripts/sync-brand.mjs` and checked against its approved Git blob SHA.
