'use strict';

describe("Frame", function () {
  var frame;

  beforeEach(function() {
    frame = new Frame();
  });

  describe('playRolls', function () {
    it("returns the number of pins player rolled over", function () {
      expect(frame.playRoll(5)).toEqual(5);
    });
  });

});