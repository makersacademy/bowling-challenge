'use strict';

beforeEach(function () {
  this.rollMany = function (obj, n, pins) {
    for (var i = 0; i < n; i++) {
      obj.roll(pins);
    }
  };
});
