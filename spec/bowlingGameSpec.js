  'use strict';

  describe("bowlingGame", function() {
    var game;

    beforeEach(function(){
      game = new BowlingGame;
    });

  describe("Initialize", function(){
    it("Should initialize with score property set to zero", function(){
      expect(game.scoreTotal).toEqual(0);
    });
  });

  describe("#roll", function(){

    it("should store the score in scoresheet after finishing a frame", function(){
      game.rolls(10);
      console.log(game.scoreSheet)
      expect(game.scoreSheet).toEqual([10])
    });

    it("should score double points in the next frame if a strike is obtained", function(){
      game.rolls(10);
      game.rolls(4,1);
      console.log(game.scoreSheet)
      expect(game.scoreSheet).toEqual([10,10])
    });

    it("should score 120 with 5 strikes in a row", function(){
      for (var i = 0; i < 6; i++) {
       game.rolls(10)
     }
     game.rolls(4,1)
     expect(game.scoreTotal).toEqual(130)

    });

  });








});
