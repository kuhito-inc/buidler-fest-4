import { readFileSync, writeFileSync, existsSync, mkdirSync } from "node:fs";
import { createHash } from "node:crypto";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
const root = resolve(dirname(fileURLToPath(import.meta.url)), "../..");
const assets = [
  ["title-logo-mini.png", "068cc7dd5b01ff1c44fcbd67003ef126dbfdf360"],
  ["hero-big-logo.png", "885f59fa2cd52a03601f22db3da4a341af6e0272"],
  ["title-logo2.png", "14ea80b1a4a63808ce69df6a8e3a30d425db4d0c"],
  ["title-logo.png", "575c9f759c50667d884a5824cad170ea4004c992"],
  ["second-hero-osaka-casle.png", "dd0047eee6f731cd365fa8ba325435c4661c790e"],
  ["osaka-night.png", "0569e252f2b0439a6d1fb799f1be7843f4d2aa70"],
];
for (const [name, expectedGitBlobSha] of assets) {
  const source = resolve(root, "brand/logos", name);
  const target = resolve(root, "website/public/brand", name);
  if (!existsSync(source)) throw new Error("Approved brand asset missing: " + source);
  const bytes = readFileSync(source);
  const hash = createHash("sha1").update(Buffer.from("blob " + bytes.length + "\0")).update(bytes).digest("hex");
  if (hash !== expectedGitBlobSha) throw new Error("Approved brand asset changed: " + name);
  mkdirSync(dirname(target), { recursive: true });
  writeFileSync(target, bytes);
  // Preserve the existing public master URL for downstream consumers.
  if (name === "hero-big-logo.png") writeFileSync(resolve(dirname(target), "logo.png"), bytes);
  console.log("Approved asset copied byte-for-byte:", name, hash);
}
// Display only decorative windows of the supplied design in CSS/SVG. The source
// remains intact; no reference logo, dates, or speaker portraits are used.
const reference = resolve(root, "references/website-design/大阪の未来を描くイベントサイトデザイン.png");
const referenceTarget = resolve(root, "website/public/decor/reference-composite.png");
writeFileSync(referenceTarget, readFileSync(reference));
