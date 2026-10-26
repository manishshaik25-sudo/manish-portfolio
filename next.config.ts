import type { NextConfig } from "next";

// Static export: `npm run build` writes a fully static site to /out.
// Works on Vercel, Netlify, GitHub Pages, or any static host.
const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  // PREVIEW_BUILD=1 emits relative asset paths so /out can be opened from any sub-path.
  ...(process.env.PREVIEW_BUILD === "1" ? { assetPrefix: "." } : {}),
};

export default nextConfig;
