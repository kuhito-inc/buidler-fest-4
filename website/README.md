# Buidler Fest 2027 website

Next.js landing page based on `../references/website-design/大阪の未来を描くイベントサイトデザイン.png`.

## Development

```sh
npm ci
npm run dev
```

On Windows PowerShell with script execution disabled, use `npm.cmd`.

## Verification

```sh
npm run build
node scripts/visual-qa.mjs
```

The Playwright script expects a server at `http://127.0.0.1:3000` and installed Chrome. Set `QA_BROWSER=msedge` for Edge. It captures full-page and viewport images at 1440×900 and 390×844 in ignored `qa-output/after/`, checks images, horizontal overflow, anchor targets, JavaScript errors, and mobile navigation. Set `QA_STAGE` to retain another comparison pass.

## Assets and content

- The user approved replacement assets on 2026-10-28: `main-logo.png` (official master), `title-logo.png` (header), and `top-hero-image.png` (hero), all in `brand/logos/`. `predev` and `prebuild` verify their individual Git blob hashes and copy them byte-for-byte. `/brand/logo.png` remains an alias of the new master. The old master is retained as a historical asset.
- Display the supplied header and hero artwork in full, preserving their aspect ratios. The hero already contains the waterfront and petals, so no duplicate decoration is layered behind it.
- `app/reference-art.tsx` frames decorative regions of the intact supplied composite with SVG viewBoxes: stage, gathering, and Osaka Castle. No reference logo, speaker portraits, or unconfirmed dates are displayed. The composite is copied byte-for-byte by the sync script, without raster editing or generation.
- These small reference regions are interim concept visuals, not photographs of this event. Stage images are captioned accordingly. High-resolution source assets would improve sharpness.
- Dates, venue, speakers, ticket sales, and sponsors remain unconfirmed. No invented names, schedules, purchase flow, or language switcher.
- Search indexing remains disabled for this draft.

CI must retain the parent `brand/` and `references/` folders. Use `website` as the project root; do not deploy it in isolation.

See `QA.md` for the completed comparison and remaining fidelity limits.
