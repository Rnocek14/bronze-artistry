# Bronze Artistry

A product-first presentation of three original hand-sculpted door knockers: **The Bull, The Rooster, and The Dragon**.

## Current experience

- The three sculpture cards appear immediately; there is no forced casting intro or oversized slogan.
- All three cards now have **real GLB 3D reconstructions** and slow auto-rotation, with drag controls. The new Bull was generated with Meshy; the Rooster and Dragon were generated as lower-cost experimental single-image SAM 3D lifts.
- The Rooster and Dragon models are **unverified early studies** and may have inaccurate backs, sides and mounting geometry. The Bull also requires comparison with the original sculpture.
- Each sculpture retains a concept-image fallback if the 3D asset cannot load. The detail view and workshop section present genuine original sculpture photographs.
- Production castings do **not yet exist**; the bronze material is a digital visualization.

## Technology

React 19 + Vite 7, with Google's model-viewer custom element for GLB display and metallic PBR finish experiments. No Three.js/React Three Fiber dependency is currently installed in this repository.

```bash
npm install
npm test
npm run build
npm run dev
```

## GitHub Pages preview

`.github/workflows/publish.yml` builds and publishes the site to the generated `gh-pages` branch whenever `main` changes. The workflow uses the Vite base path `/bronze-artistry/`.

**To enable the live URL:** open repository **Settings > Pages**, choose **Deploy from a branch**, select **gh-pages** and **/(root)**, then save. The eventual URL should be `https://rnocek14.github.io/bronze-artistry/` after GitHub activates hosting.

Note: a passing upload workflow does not itself enable Pages. Until the setting is enabled the URL may return 404.

## Assets and production cautions

The website currently loads concept images from the owner's archived `Rnocek14/Door-Knockers` repository, workshop source photographs from a confirmed media library, and GLB studies from Higgsfield's result CDN. For a commercial release, archive/version these assets in reliable project-controlled hosting, validate copyright and ownership, review mesh geometry, and commission a proper casting-engineering check.

A single-photo reconstruction is not a dimensionally accurate 3D scan, nor proof of mechanical fit, hinge function, wall thickness, or bronze casting suitability. Avoid accepting orders until physical manufacturing and pricing are confirmed.
