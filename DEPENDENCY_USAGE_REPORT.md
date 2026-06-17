# Dependency Usage Report

## Summary
- Total dependencies tracked in `package.json`: 79
- Dependencies detected as unused by `depcheck`: 37
- Dependencies detected as used by `depcheck`: 42

> Note: `depcheck` can produce false positives for packages imported dynamically, referenced only in runtime-generated code, or used by tools/config files outside typical JS import paths.

---

## Installed but likely unused dependencies
These packages are present in `package.json` but were not detected as used in the project source by the depcheck scan.

- @fortawesome/fontawesome-free
- @fortawesome/free-brands-svg-icons
- @fullhuman/postcss-purgecss
- @ionic/react
- @lexical/react
- @next/bundle-analyzer
- @react-three/drei
- @react-three/fiber
- @sendgrid/mail
- @vercel/analytics
- @vercel/edge
- body-parser
- bootstrap
- bootstrap-icons
- canvas-confetti
- cheerio
- class-variance-authority
- critical
- critters
- d3-scale
- fa-icons
- leaflet
- leaflet.heat
- lexical
- mapbox-gl
- postcss
- puppeteer
- react-bootstrap-icons
- react-fontawesome
- react-globe.gl
- react-lazy-hydration
- react-leaflet
- react-map-gl
- react-scroll
- rimraf
- three
- three-globe

---

## Heavy libraries used in this project
These are the larger or more significant runtime/development libraries that are detected as used and are likely to contribute to bundle size or runtime complexity.

- `next`
- `react`
- `react-dom`
- `@react-google-maps/api`
- `framer-motion`
- `react-quill-new`
- `recharts`
- `swiper`
- `xlsx`
- `@lottiefiles/dotlottie-react`
- `react-icons`
- `lucide-react`
- `@heroicons/react`
- `react-bootstrap`
- `bootstrap` (if CSS is used indirectly; note: depcheck listed `bootstrap` as unused)
- `tailwindcss` and Tailwind plugins
- `axios`
- `cloudinary`
- `mongoose`
- `multer`
- `jsonwebtoken`
- `bcryptjs`

---

## Important observations
- A large portion of the unused dependencies are map/3D-related packages, icon/font packages, and build tooling packages.
- The `depcheck` output is the basis for this report; if any packages are loaded dynamically or only referenced in non-standard ways, they may still be required.
- For a cleanup pass, review the unused list carefully before removing dependencies.
