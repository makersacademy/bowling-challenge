'use strict';

describe('randomInt', function () {
  it('returns random number between 0 and the remaining pins for a frame',
      function () {
        expect(randomInt(10)).toBeLessThan(11);
        expect(randomInt(7)).toBeLessThan(8);
        expect(randomInt(5)).toBeLessThan(6);
        expect(randomInt(2)).toBeLessThan(3);
      });
});

describe('roll', function () {
  it('returns random number between 0 and the remaining pins for a frame',
      function () {
        expect(roll(10)).toBeLessThan(11);
      });
});
