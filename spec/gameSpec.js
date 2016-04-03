"use strict";

describe("Game", function(){
  var game;

  beforeEach(function(){
    game  = new Game();
  });


  describe("#frames", function(){
    it("initializes as an empty array", function(){
      expect(game.frames.length).toEqual(0);
    });
  });

  describe("#nextRound", function(){
    it("moves the round on by 1", function(){
      game.nextRound();
      expect(game.frameNumber).toEqual(1);
    });

  });


  describe("#firstBall", function(){
    it ("updates the score for the frame first ball ", function(){
      game.firstBall(5);
      var length = game.frames.length;
      expect(game.frames[length -1].roll1).toEqual(5);
    });
  });

  describe("#secondBall", function(){
    it ("updates the score for the frame second ball", function(){
      game.firstBall(5);
      game.secondBall(5);
      var length = game.frames.length;
      expect(game.frames.pop().roll2).toEqual(5);
    });
  });

  describe("#setScore", function(){
    it("frame is open so current frame is scored", function() {
      game.firstBall(4);
      game.secondBall(3);
      game.scorer();
      expect(game.frames[0].score).toEqual(7);
    });

    it("frame is spare so current frame is cached", function() {
      game.firstBall(7);
      game.secondBall(3);
      game.scorer();
      expect(game.frames[0].score).toEqual(0);
    });

    it("previous frame was a spare and current frame scored", function() {
      game.firstBall(5);
      game.secondBall(5);
      game.firstBall(5);
      game.secondBall(4);
      // game.firstBall(5);
      // game.secondBall(4);


      game.scorer();
      console.log(game.frames);
      console.log(game.frames[0]);
      console.log(game.frames[1]);
      expect(game.frames[0].score).toEqual(15);
      expect(game.frames[1].score).toEqual(7);
    });
  });


  // describe("#currentFrame", function(){
  //   it("gets the current frame from the frames array", function(){
  //
  //   });
  // });

});
