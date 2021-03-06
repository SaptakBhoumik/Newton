// |reftest| skip module -- import-assertions is not supported
// Copyright (C) 2021 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
description: >
  AssertClause in ImportDeclaration may include line terminators
esid: sec-modules
info: |
  ImportDeclaration:
    import ModuleSpecifier[no LineTerminator here] AssertClause;

  AssertClause:
    assert {}
    assert {AssertEntries ,opt}

  AssertEntries:
    AssertionKey : StringLiteral
    AssertionKey : StringLiteral , AssertEntries

  AssertionKey:
    IdentifierName
    StringLiteral

  This test uses all four LineFeed characters in order to completely verify the
  grammar.
features: [import-assertions, globalThis]
flags: [module]
---*/

import x from './import-assertion-1_FIXTURE.js' assert
  {
  test262
  :
  ''
  };
import './import-assertion-2_FIXTURE.js' assert
  {
  test262
  :
  ''
  };
export * from './import-assertion-3_FIXTURE.js' assert
  {
  test262
  :
  ''
  };

assert.sameValue(x, 262.1);
assert.sameValue(globalThis.test262, 262.2);

reportCompare(0, 0);
