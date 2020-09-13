'use strict';

describe("Bowling", function() {
  var bowlingGame;

  beforeEach(function() {
    bowlingGame = new Bowling();
  });

  describe('#strike', function() {
    it('returns true if it is a strike', function() {
      bowlingGame.roll(10)
      expect(bowlingGame.isStrike(0)).toEqual(true)

    });
  });

  describe('#spare', function() {
    it('returns true if it is a spare', function() {
      bowlingGame.roll(4)
      bowlingGame.roll(6)
      expect(bowlingGame.isSpare(0)).toEqual(true)
    });
  });
 

});
  

