"use strict";

describe("Game", function(){
  var game;
  var frame;

  beforeEach(function(){
    game  = new Game();
    frame = new Frame();
  });

  describe("frameNumber", function(){
    it ("game starts at frame 1", function(){
      expect(game.frameNumber).toEqual(1);
    })
  });

  describe("#frames", function(){
    it("initializes as an empty array", function(){
      expect(game.frames.length).toEqual(0);
    });
  });

  describe("#nextRound", function(){
    it("moves the round on by 1", function(){
      game.nextRound();
      expect(game.frameNumber).toEqual(2);
      console.log(game.frames.pop());
    });
  });


  describe("#firstBall", function(){
    it ("updates the score for the frame first ball ", function(){
      game.newFrame()
      game.newFrame()

      console.log(game.frames);
      console.log(game.frameObject);
      game.firstBall(5);
      console.log(game.frames.pop());
      console.log(game._currentFrame());

      expect(game._currentFrame().roll1).toEqual(5);
    });
  });

  // describe("#currentFrame", function(){
  //   it("gets the current frame from the frames array", function(){
  //
  //   });
  // });

});
