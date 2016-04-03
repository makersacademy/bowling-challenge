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
      expect(game.frames[0].roll1).toEqual(5);
    });
  });

  describe("#secondBall", function(){
    it ("updates the score for the frame second ball", function(){
      game.firstBall(5);
      game.secondBall(5);
      expect(game.frames[0].roll2).toEqual(5);
    });
  });

  describe("#scorer", function(){
    it("is a gutter frame", function() {
      game.firstBall(0);
      game.secondBall(0);
      game.scorer();
      expect(game.score).toEqual(0);
    });

    it("frame is open so current frame is scored", function() {
      game.firstBall(4);
      game.secondBall(3);
      game.scorer();
      expect(game.score).toEqual(7);
    });

    it("previous frame was a spare", function(){
      game.firstBall(5);
      game.secondBall(5);
      game.scorer();
      console.log(game.score)
      game.firstBall(4);
      game.secondBall(3);
      game.scorer();
      expect(game.score).toEqual(14 + 7);
    });

    it("previous frame was a strike",function(){
      game.firstBall(10);
      game.secondBall(0)
      game.scorer();
      game.firstBall(5);
      game.secondBall(4);
      game.scorer()
      expect(game.score).toEqual(19 + 9);
    });

    it("previous 2 frames were a strike",function(){
      game.firstBall(10);
      game.secondBall(0)
      game.scorer();
      console.log(game.score)
      game.firstBall(10);
      game.secondBall(0);
      game.scorer()
      console.log(game.score)
      game.firstBall(5);
      game.secondBall(4);
      game.scorer()
      expect(game.score).toEqual(29 + 19 + 9);
    });


  });




  // describe("#currentFrame", function(){
  //   it("gets the current frame from the frames array", function(){
  //
  //   });
  // });

});
