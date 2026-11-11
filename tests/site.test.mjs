import test from 'node:test';
import assert from 'node:assert/strict';
import { sculptures, bullModel } from '../src/data.js';

test('collection is product-first with the original three', () => {
  assert.deepEqual(sculptures.map(x=>x.id), ['bull','rooster','dragon']);
});

test('all three have a real 3D file and unverified models are marked experimental', () => {
  assert.equal(sculptures.filter(x=>x.model).length, 3);
  assert.equal(sculptures[0].model, bullModel);
  assert.equal(sculptures[1].experimental, true);
  assert.equal(sculptures[2].experimental, true);
  for (const s of sculptures) assert.match(s.model, /\.glb$/);
});

test('every sculpture includes an image and description', () => {
  for (const s of sculptures) {
    assert.match(s.image, /^https:\/\//);
    assert.ok(s.name && s.line && s.originalLabel);
  }
});
