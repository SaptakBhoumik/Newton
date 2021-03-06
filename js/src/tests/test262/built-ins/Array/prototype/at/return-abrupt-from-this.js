// Copyright (C) 2020 Rick Waldron. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-array.prototype.at
description: >
  Return abrupt from ToObject(this value).
info: |
  Array.prototype.at( index )

  Let O be ? ToObject(this value).

features: [Array.prototype.at]
---*/
assert.sameValue(typeof Array.prototype.at, 'function');

assert.throws(TypeError, () => {
  Array.prototype.at.call(undefined);
}, '`Array.prototype.at.call(undefined)` throws TypeError');

assert.throws(TypeError, () => {
  Array.prototype.at.call(null);
}, '`Array.prototype.at.call(null)` throws TypeError');

reportCompare(0, 0);
