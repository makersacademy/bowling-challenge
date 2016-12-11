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
      expect(game.scoreSheet).toEqual([10])
    });

    it("should score double points in the next frame if a strike is obtained", function(){
      game.rolls(10);
      game.rolls(4,1);
      expect(game.scoreSheet).toEqual([10,10])
    });
  });








});
