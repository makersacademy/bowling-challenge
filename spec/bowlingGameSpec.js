'use strict';

describe("BowlingGame", function() {
var game;

  beforeEach(function() {

    game = new BowlingGame();

  });

  describe("when starting a game", function(){

    it('should start with a total score of 0', function(){
      expect(game.totalScore).toEqual(0)
    });

    it("should know that it's on the first frame", function(){
      expect(game.currentFrame).toEqual(game.frame_one);
    });

    it("should start with an array of 10 frames", function(){
      expect(game.framesArray.length).toEqual(10);
    });

  });

  describe("when starting a frame", function(){

    it('should be able to add a score of 3 to frame one', function(){
      game.takeShot(3);
      expect(game.frame_one.first_ball).toEqual(3);
    });

    it('should move to next frame when game finished', function(){
      game.frame_one.isFinished = true;
      game.takeShot(3);
      expect(game.currentFrame).toEqual(game.frame_two);
    });

  });
  //
  // describe("Scoring after a strike", function(){
  //   it("Should change the strike frame score after next 2 frames", function(){
  //     game.takeShot(10);
  //     game.takeShot(2);
  //     game.takeShot(2);
  //     game.takeShot(2);
  //     game.takeShot(2);
  //     expect(game.frame_one.frame_score).toEqual(18);
  //   });
  // });

});
