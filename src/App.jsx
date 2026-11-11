import React, { useEffect, useRef, useState } from 'react';
import { sculptures } from './data.js';

function Sculpture({ item, onOpen }) {
  const viewer = useRef(null);
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);
  const [reduced, setReduced] = useState(() => window.matchMedia('(prefers-reduced-motion: reduce)').matches);

  useEffect(() => {
    if (!item.model) return;
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    const onChange = () => setReduced(media.matches);
    media.addEventListener('change', onChange);
    return () => media.removeEventListener('change', onChange);
  }, [item.model]);

  // Native custom-element events are more reliable than framework event bridges.
  // Avoid leaving a perpetual loading label if a browser cannot decode a GLB.
  useEffect(() => {
    if (!item.model || !viewer.current || failed) return undefined;
    const element = viewer.current;
    const success = () => {
      try {
        for (const material of (element.model?.materials || [])) {
          const pbr = material.pbrMetallicRoughness;
          pbr?.setBaseColorFactor([0.52, 0.32, 0.15, 1]);
          pbr?.setMetallicFactor(0.96);
          pbr?.setRoughnessFactor(0.34);
        }
      } catch (error) {
        console.warn('Could not apply digital bronze material', error);
      }
      setLoaded(true);
    };
    const failure = () => setFailed(true);
    element.addEventListener('load', success);
    element.addEventListener('error', failure);
    if (element.loaded) success();
    const deadline = window.setTimeout(() => {
      if (!element.loaded) setFailed(true);
    }, 30000);
    return () => {
      window.clearTimeout(deadline);
      element.removeEventListener('load', success);
      element.removeEventListener('error', failure);
    };
  }, [item.model, failed]);


  return (
    <article className="sculpture" aria-labelledby={'name-' + item.id}>
      <div className="sculpture-stage">
        <span className="piece-number">{item.number} / 03</span>
        {item.model && !failed ? (
          <>
            {!loaded && <img className="stage-poster" src={item.image} alt="" aria-hidden="true" />}
            <model-viewer
              ref={viewer}
              src={item.model}
              poster={item.image}
              alt={'Rotatable digital 3D reconstruction of ' + item.name + ' sculpture'}
              camera-controls
              auto-rotate={reduced ? undefined : ''}
              auto-rotate-delay="0"
              rotation-per-second="13deg"
              interaction-prompt="none"
              shadow-intensity="1"
              exposure="1.1"
              environment-image="neutral"
              loading="eager"
              reveal="auto"
            />
            <span className="stage-label">{loaded ? (item.experimental ? 'EARLY 3D STUDY · DRAG TO ROTATE' : 'DRAG TO ROTATE · LIVE 3D') : 'PREPARING THE 3D SCULPTURE'}</span>
          </>
        ) : (
          <>
            <img className="sculpture-art" src={item.image} alt={'Bronze concept rendering of ' + item.name} loading="eager" />
            <span className="stage-label">{failed ? '3D PREVIEW UNAVAILABLE' : 'BRONZE CONCEPT STUDY'}</span>
          </>
        )}
      </div>
      <div className="sculpture-info">
        <div><h2 id={'name-' + item.id}>{item.name}</h2><p>{item.line}</p></div>
        <button type="button" onClick={() => onOpen(item)} aria-label={'Inspect ' + item.name}>Explore <span aria-hidden="true">↗</span></button>
      </div>
    </article>
  );
}

function Detail({ item, onClose }) {
  const closeRef = useRef(null);
  useEffect(() => {
    if (!item) return;
    const oldOverflow = document.body.style.overflow;
    const prior = document.activeElement;
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();
    function onKey(e) { if (e.key === 'Escape') onClose(); }
    document.addEventListener('keydown', onKey);
    return () => { document.body.style.overflow = oldOverflow; document.removeEventListener('keydown', onKey); prior?.focus?.(); };
  }, [item, onClose]);
  if (!item) return null;
  return (
    <div className="modal-shade" onMouseDown={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      <section className="modal" role="dialog" aria-modal="true" aria-label={item.name + ' sculpture detail'}>
        <button ref={closeRef} className="close-modal" onClick={onClose}>Close ×</button>
        <img src={item.original} alt={item.originalLabel} />
        <div className="modal-copy"><span className="overline">THE COLLECTION / {item.number}</span><h2>{item.name}</h2>
          <p>{item.line} These sculptures began as original handmade artworks. Bronze finishes shown are digital visualizations; physical castings have not yet been made.</p>
          <p className="fine">{item.experimental ? "This is an experimental single-photo 3D study. Back, side and mounting geometry may differ substantially from the handmade original." : "The Bull includes an exploratory 3D reconstruction based on one photograph. Its shape and mounting details still need independent review."}</p>
          <a href="#process" onClick={onClose}>See the making ↓</a>
        </div>
      </section>
    </div>
  );
}

export default function App() {
  const [active, setActive] = useState(null);
  return (
    <>
      <header className="site-header" id="top">
        <a className="brand" href="#top">BRONZE <span>ARTISTRY</span></a>
        <nav aria-label="Main navigation"><a href="#collection">Collection</a><a href="#process">The Making</a><a href="#studio">The Studio</a></nav>
        <span className="header-detail">ORIGINAL SCULPTURAL OBJECTS</span>
      </header>
      <main>
        <section className="opening" id="collection" aria-labelledby="collection-title">
          <div className="collection-top">
            <h1 id="collection-title">The Collection <span className="collection-count">/ 001—003</span></h1>
            <p>Three original sculptures. Explore the forms.</p>
          </div>
          <div className="sculpture-grid">
            {sculptures.map(item => <Sculpture key={item.id} item={item} onOpen={setActive} />)}
          </div>
          <div className="opening-foot"><span>ORIGINAL SCULPTURES · EXPERIMENTAL 3D RECONSTRUCTIONS</span><a href="#process">BEHIND THE WORK <span>↓</span></a></div>
        </section>
        <section className="process" id="process">
          <div className="process-heading"><span className="overline">BEFORE THE BRONZE</span><h2>Made by hand.</h2><p>The original sculptures exist in clay and wax. Every curve, horn, feather and scale was made by an artist—not invented for a product rendering.</p></div>
          <div className="photo-grid">
            <figure><img src="https://raw.githubusercontent.com/Rnocek14/Door-Knockers/main/First%20Bull%20Updated.jpg" alt="Handmade bull head sculpture in clay" loading="lazy"/><figcaption>01 / THE BULL · ORIGINAL WORK</figcaption></figure>
            <figure><img src="https://d2ol7oe51mr4n9.cloudfront.net/user_3JKXANr2UOgVCTXeHeEY7LLgXbS/7d23e374-bce7-4648-bc10-79a3fd944cd6.jpg" alt="Original hand-sculpted rooster head with curved beak and oval backplate" loading="lazy"/><figcaption>02 / THE ROOSTER · ORIGINAL WAX WORK</figcaption></figure>
            <figure><img src="https://d2ol7oe51mr4n9.cloudfront.net/user_3JKXANr2UOgVCTXeHeEY7LLgXbS/ed3c7138-b461-47c8-95c9-99a7002dc449.jpg" alt="Original dragon wax sculpture with scales and swept-back horns" loading="lazy"/><figcaption>03 / THE DRAGON · ORIGINAL WAX WORK</figcaption></figure>
          </div>
        </section>
        <section className="studio" id="studio"><span className="overline">THE ART OF CASTING</span><h2>From sculpture<br/><em>to bronze.</em></h2><p>A closer look at the original forms and the lost-wax casting process. The foundry film is still being developed. The 3D reconstructions are visual studies, not verified scans or production-ready castings.</p><a href="#collection">Return to the collection ↑</a></section>
      </main>
      <footer><a className="brand" href="#top">BRONZE <span>ARTISTRY</span></a><span>ART AT THE THRESHOLD</span><span>{new Date().getFullYear()}</span></footer>
      {active && <Detail item={active} onClose={() => setActive(null)} />}
    </>
  );
}
