import { readFileSync, writeFileSync, existsSync, mkdirSync } from "node:fs";
import { createHash } from "node:crypto";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
const root = resolve(dirname(fileURLToPath(import.meta.url)), "../..");
const assets = [
  ["main-logo.png", "21f995434caec202f21aea1d6a94dd17774f7228"],
  ["title-logo.png", "575c9f759c50667d884a5824cad170ea4004c992"],
  ["top-hero-image.png", "af85a5c28ba9d3784ceb030a3fb0fe0990af2ddc"],
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
  if (name === "main-logo.png") writeFileSync(resolve(dirname(target), "logo.png"), bytes);
  console.log("Approved asset copied byte-for-byte:", name, hash);
}
// Display only decorative windows of the supplied design in CSS/SVG. The source
// remains intact; no reference logo, dates, or speaker portraits are used.
const reference = resolve(root, "references/website-design/大阪の未来を描くイベントサイトデザイン.png");
const referenceTarget = resolve(root, "website/public/decor/reference-composite.png");
writeFileSync(referenceTarget, readFileSync(reference));
