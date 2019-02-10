"use strict";

describe("BowlingGame", function() {
  var game;

  beforeEach(function() {
    game = new BowlingGame();
  });

  describe('#enterTurn', () => {
    it("returns an array of objects", function() {
      game.play(3, 4);
      expect(game.turns[0].firstBowl).toEqual(3)
      expect(game.turns[0].secondBowl).toEqual(4)
    });
  });

  describe('#countScore', () => {
    it("returns the score after one normal turn", function() {
      expect(game.play(3, 4)).toEqual(7)
    });

    it("updates the score after second normal turn", function() {
      game.play(9, 0)
      expect(game.play(3, 4)).toEqual(16)
    });
  });

  describe('#Bonus', () => {
    it('should add bonus for a strike', function(){
      game.play(10)
      expect(game.play(5, 3)).toEqual(26)
    });
  });
});
