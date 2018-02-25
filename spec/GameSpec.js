'use strict'

describe("Game", function() {

  var game;
  var noStrikesNoSpareGame = [1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9,1,2]
  var gutterGame = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]

  beforeEach(function() {
    game = new Game();
  });

  describe("Rolls", function() {

    it('rolls initializes as an empty array', function() {
      expect(game.rolls).toEqual([]);
    });

    it('rolls are added to the rolls array', function() {
      game.roll(4)
      game.roll(8)
      game.roll(2)
      game.roll(0)
      expect(game.rolls).toEqual([4, 8, 2, 0]);
    });

  });

  describe("Scoring", function(){

    it("gutter games score 0", function(){
      game.rolls = gutterGame
      expect(game.score()).toEqual(0)
    });

    it("no strikes or spares game score", function(){
      game.rolls = noStrikesNoSpareGame
      expect(game.score()).toEqual(93)
    });

  });

});
