  'use strict';

  describe("bowlingGame", function() {
    var game;

    beforeEach(function(){
      game = new BowlingGame;
    });

  describe("Initialize", function(){
     it("Should initialize with score set to zero", function(){
       expect(game.score).toEqual(0)
     });
  });

  describe("#roll", function(){
    it("Should update score when player rolls less than a strike or spare", function(){
      game.roll(2,4)
      expect(game.score).toEqual(6)
    });


  });








});
