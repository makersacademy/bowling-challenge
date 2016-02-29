'use strict';

beforeEach(function () {
  this.rollMany = function (n, pins) {
    for (var i = 0; i < n; i++) {
      this.roll(pins);
    }
  };
});
