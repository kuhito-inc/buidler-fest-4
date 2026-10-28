# Brand Guidelines — DRAFT v0.1

## Identity
Event: **Buidler Fest 2027** (preserve spelling: Buidler, not Builder).
Location: **Osaka, Japan**.

## Approved creative direction (concept only)
- Base: top-left variant of the latest four-logo concept sheet.
- Japanese ink-brush aesthetic, Osaka Castle, red rising sun, cherry blossoms.
- Cardano mark must be **single-color solid fill**; use a verified official vector asset and follow applicable brand permissions.
- Website direction: navy, vermilion red, white, Japanese visual motifs.

## Not yet approved
Exact logo geometry, typography, color hex values, layout spacing, motion timing, and event dates are not finalized. Do not infer exact values from raster mockups.

## Production rules
1. Create a clean vector master, review it, and record approval before using it as official identity.
2. Never use generative redraws to edit approved master assets.
3. Website, social, and motion must import shared approved assets and design tokens.
4. Track design changes through commits and review; increment version when masters change.
5. Dates, speakers, sponsors, and venue remain placeholders until confirmed.

## Cardano icon masters — approved source files

User supplied three official-named SVG variants, stored under `brand/logos/`:
- `Cardano-RGB_Logo-Icon-Black.svg` — solid black
- `Cardano-RGB_Logo-Icon-White.svg` — solid white
- `Cardano-RGB_Logo-Icon-Blue.svg` — solid `#0033AD`

All three supplied files have the same 30 path geometries and `viewBox="0 0 375 346.51"`. Preserve paths, proportions and dot placement exactly. Do not regenerate, trace, simplify, distort or introduce gradients. Select the appropriate supplied monochrome variant for background contrast. These source icons are approved; the complete event logo is governed by the authoritative master designation below.

## Cardano logo production asset (2026-10-28)

The user explicitly selects `brand/logos/Cardano-RGB_Logo-Icon-Blue.png` as the **transparent production asset** for subsequent event logo compositing. GitHub blob SHA at selection: `d81e2be8d7075f3862996777681991f35f887074`. Use the exact PNG bytes as an overlay layer; do not ask an image generator to draw this emblem, remove generated logos via inpainting, trace, or reinterpret it. Keep source SVG variants as references, but prefer this designated PNG for PNG compositions. Any change to this master requires explicit approval.

## Approved event artwork — v1.0 (2026-10-28)

User explicitly approved the latest **Cardano-free** Buidler Fest 2027 Osaka Japan artwork (Osaka Castle, red sun, sakura, brush typography). This is the immutable approved artwork master; do not regenerate, redraw, crop, recolor, or substitute it without approval.

Approved local export filename: `Buidler-Fest-2027-APPROVED-v1.0.png`.
SHA-256: `a418686eb37e20e0c4c80fb1c1424399dfa313ab7c413ad7f8e050db49901276`.
Dimensions: 1536 x 1024 pixels; RGBA (alpha channel present). Transparency is not guaranteed visually perfect at every edge; review before print use.

**Important:** The approved artwork contains NO Cardano logo. The separate Cardano transparent PNG is approved for optional future composite use only; never alter this approved base image to add a generated mark. The binary PNG master has not yet been uploaded to this GitHub repository; do not claim it has.


## Authoritative event logo master — approved 2026-10-28

The user explicitly designates **`brand/logos/builder-fest-2027-logo.png`** as the sole official Buidler Fest 2027 logo master. This designation supersedes prior generated artworks, crops, vector reconstructions, and draft approval notes in this file.

GitHub blob SHA at approval: `13207b122d312f7982e5ff843b49a87e14c00993`. The filename intentionally contains `builder`; preserve it exactly even though the event is spelled `Buidler Fest`.

**Rules:** Never redraw, regenerate, inpaint, recolor, crop, distort, or alter this master when producing web, video, social, or print derivatives. Import the existing PNG as-is, maintain aspect ratio, and create layouts around it. If a different resolution is needed, resample the *same* source without generating new artwork, and label the derivative. Do not substitute a different earlier logo. Verify transparency and print quality before publishing; a PNG alone does not guarantee large-format suitability.

The separately supplied Cardano icon assets remain available but must **not** be composited into or substituted for the approved master without an explicit new request.
