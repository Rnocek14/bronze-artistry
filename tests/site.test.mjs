import test from 'node:test';
import assert from 'node:assert/strict';
import { sculptures, bullModel } from '../src/data.js';

test('collection is product-first with the original three', () => {
  assert.deepEqual(sculptures.map(x=>x.id), ['bull','rooster','dragon']);
});

test('only the generated bull is claimed to be 3D', () => {
  assert.equal(sculptures.filter(x=>x.model).length, 1);
  assert.equal(sculptures[0].model, bullModel);
  assert.equal(sculptures[1].model, null);
  assert.equal(sculptures[2].model, null);
});

test('every sculpture includes an image and description', () => {
  for (const s of sculptures) {
    assert.match(s.image, /^https:\/\//);
    assert.ok(s.name && s.line && s.originalLabel);
  }
});
