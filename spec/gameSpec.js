"use strict";

describe("Game", function(){
  var game;
  var i;

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

  describe("#scorer",function(){
    it ("scores a gutter game", function(){
      for(i=1; i <=10; i++){
        game.firstBall(0);
        game.secondBall(0);
      }
      game.scorer();
      expect(game.score).toEqual(0);
    })

    it ("scores a singles game", function(){
      for(i=1; i <=10; i++){
        game.firstBall(1);
        game.secondBall(1);
      }
      console.log(game.frames);
      game.scorer();
      expect(game.score).toEqual(20);
    })

    it ("scores a two's game", function(){
      for(i=1; i <=10; i++){
        game.firstBall(2);
        game.secondBall(2);
      }
      console.log(game.frames);
      game.scorer();
      expect(game.score).toEqual(40);
    })

// Tenth round not implemented

    it ("scores a spares's game", function(){
      for(i=1; i <=10; i++){
        game.firstBall(9);
        game.secondBall(1);
      }
      console.log(game.frames);
      game.scorer();
      expect(game.score).toEqual(181);
    })

    it ("scores a strikes's game", function(){
      for(i=1; i <=11; i++){
        game.firstBall(10);
        game.secondBall(0);
      }
      console.log(game.frames);
      game.scorer();
      expect(game.score).toEqual(300);
    })



  })

});
