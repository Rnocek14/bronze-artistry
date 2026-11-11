import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const component = readFileSync(new URL('../src/App.jsx', import.meta.url), 'utf8');
const styles = readFileSync(new URL('../src/styles.css', import.meta.url), 'utf8');

test('3D gallery has exactly one preview image source per model', () => {
  assert.match(component, /poster=\{item\.image\}/);
  assert.doesNotMatch(component, /className="stage-poster"/);
  assert.doesNotMatch(styles, /\.stage-poster/);
});

test('do not reveal model on top of its preview while loading', () => {
  assert.match(component, /reveal="manual"/);
  assert.match(component, /element\.dismissPoster\?\.\(\)/);
  assert.match(component, /element\.addEventListener\('load', success\)/);
  assert.match(component, /element\.loaded\) success\(\)/);
});

test('failed models replace the viewer with one concept-image fallback', () => {
  assert.match(component, /item\.model && !failed/);
  assert.match(component, /className="sculpture-art"/);
  assert.match(component, /setFailed\(true\)/);
});
