'use strict'

describe("Game", function() {

  var game;
  var noStrikesNoSpareGame = [3,3,3,3,3,3,3,3,3,3,2,2,2,2,2,2,2,2,2,2]
  var gutterGame = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
  var gameWithSpares = [5,5,5,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
  var gameWithStrikes = [10,null,10,null,10,null,10,null,1,1,1,1,1,1,1,1,1,1,1,1]
  var gameWithStrikesAndSpares = [10,null,5,5,10,null,6,4,10,null,5,5,1,1,1,1,1,1,1,1]
  var perfectGame = [10,null,10,null,10,null,10,null,10,null,10,null,10,null,10,null,10,null,10,null,10,null,10,null]

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
      expect(game.score()).toEqual(50)
    });

    it("game with spares", function(){
      game.rolls = gameWithSpares
      expect(game.score()).toEqual(37)
    });

    it("game with strikes", function(){
      game.rolls = gameWithStrikes
      expect(game.score()).toEqual(105)
    });

    it("game with strikes and spares", function(){
      game.rolls = gameWithStrikesAndSpares
      expect(game.score()).toEqual(119)
    });

    it("perfect game", function(){
      game.rolls = perfectGame
      expect(game.score()).toEqual(300)
    });

  });

});
