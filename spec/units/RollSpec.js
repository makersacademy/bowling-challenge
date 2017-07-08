'use strict';

describe('Roll', function () {
  var roll;
  beforeEach(function () {
    roll = new Roll();
  });

  describe('randomInt', function () {
    it('returns random number between 0 and the remaining pins for a frame',
      function () {
        expect(roll.randomInt(10)).toBeLessThan(11);
        expect(roll.randomInt(7)).toBeLessThan(8);
        expect(roll.randomInt(5)).toBeLessThan(6);
        expect(roll.randomInt(2)).toBeLessThan(3);
      });
  });

  describe('score', function () {
    it('returns random number between 0 and the remaining pins for a frame',
      function () {
        expect(roll.score(10)).toBeLessThan(11);
      });
  });
});
