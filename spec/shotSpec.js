"use strict";

describe('Shot', function () {
  var shot;

  beforeEach(function () {
    shot = new Shot();
  });

  describe('test', function () {
    it('initial spec test', function () {
      expect(shot.test).not.toBe(undefined);
    });
  });
});