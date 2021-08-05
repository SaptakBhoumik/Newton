/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use strict";

const EXPORTED_SYMBOLS = ["TestOnlyInWindowGlobalModule"];

class TestOnlyInWindowGlobalModule {
  constructor(messageHandler) {
    this.messageHandler = messageHandler;
  }

  destroy() {}

  /**
   * Commands
   */

  testOnlyInWindowGlobal() {
    return "only-in-windowglobal";
  }
}