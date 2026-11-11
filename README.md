# Bronze Artistry

A collection-first website for three hand-sculpted door knockers: **The Bull, The Rooster, and The Dragon**.

## Design direction

Open directly on the three sculptures. No oversized slogan, intro animation, or forced scroll to reach the products. The Bull uses a genuine interactive 3D reconstruction; the Rooster and Dragon have concept images until their dedicated 3D meshes are completed. The work-in-progress casting story belongs below the collection.

Built with **React 19, Vite, Three.js and React Three Fiber**. Models are digital visualization studies, **not casting-ready scans**. The physical bronze editions have not yet been made.

## Development

```bash
npm install
npm run dev
npm run check
npm run build
```

The 3D Bull currently uses its Meshy-generated GLB hosted through Higgsfield. For production, save it to `public/models/bull.glb` and set `VITE_BULL_MODEL_URL=/models/bull.glb`. The two other model files can be added later.

## Images and permissions

Concept and workshop imagery temporarily load from the existing owner's archival public repository `Rnocek14/Door-Knockers`. Preserve that archive until the image files are migrated into this repository. The sculpture source photographs and digital concepts are visually differentiated on the site.

## Release note

This is a design preview. Do not represent the pieces as shipped or manufactured, accept orders, or advertise a finish as a proven physical result before production is confirmed.
