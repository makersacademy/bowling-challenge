describe("Game", function() {
  var game;
  var player;
  var frameSet;
  var score;

  beforeEach(function() {
    frameSet = {
      currentFrame : "frame2",
      number : 2,
      MaxNumberFrames : 10,
      nextFrame : function(){
        frameSet.currentFrame = "frame3"}
      };
    score = {
      frameSet : frameSet,
      scorecard : {
        frame1 : { roll1 : 0, roll2 : 0, frameScore : 0 },
        frame2 : { roll1 : 0, roll2 : 0, frameScore : 0 },
        frame3 : { roll1 : 0, roll2 : 0, frameScore : 0 },
        frame10 : { roll1 : 0, roll2 : 0, frameScore : 0 }
      },
      calculateFrameScore : function(){},
      frame10Strike : function(){},
      frame10Spare : function(){}
      };
    player = { score : score };
    game = new Game(player, frameSet);
  });

  describe("When instantiated:", function() {

    it("It has a #player", function() {
      expect(game.player).toEqual(player);
    });

    it("It has a #frameSet", function() {
      expect(game.frameSet).toEqual(frameSet);
    });

    it("It starts with 10 pins", function() {
      expect(game.pinsRemaining).toEqual(10);
    });
  });

  describe("#playerScore", function() {

    it("Has access to the player's scorecard", function() {
      expect(game.playerScore()).toEqual(player.score.scorecard)
    });
  });

  describe("#currentFrame", function() {

    it("Provides the current frame number", function() {
      expect(game.currentFrame()).toEqual("frame2");
    });
  });

  describe("#playBall", function() {

    it("Allows the player to bowl if #gameNotFinished", function() {
      expect(function() {game.playBall()}).not.toThrow(new Error ("Game Over"));
    });

    it("Prevents the player from bowling if game is over", function() {
      spyOn(game, 'gameNotFinished').and.returnValue(false);
      expect(function() {game.playBall()}).toThrow(new Error ("Game Over"));
    });
  });

  describe("#gameNotFinished", function() {

    it("#Checks if the game is finished or not", function() {
      expect(game.gameNotFinished()).toEqual(true)
    });
  });

  describe("#throwBall1", function() {

    it("Allows user to throw ball 1 and then records the score", function() {
      spyOn(game, 'pinsKnockedDown').and.returnValue(6);
      game.throwBall1();
      expect(game.playerScore()[game.currentFrame()].roll1).toEqual(6);
    });

    it("Removes the knocked down pins", function() {
      spyOn(game, 'pinsKnockedDown').and.returnValue(4);
      game.throwBall1();
      expect(game.pinsRemaining).toEqual(6);
    });

    it("Changes the #nextBall to throw to number 2", function() {
      spyOn(game, 'pinsKnockedDown').and.returnValue(2);
      game.throwBall1();
      expect(game.nextBall).toEqual(2);
    });

    it("Allows player to move to next frame if a strike is scored", function() {
      spyOn(game, 'pinsKnockedDown').and.returnValue(10);
      game.throwBall1();
      expect(game.nextBall).toEqual(1);
    });
  });

  describe("#throwBall2", function() {

    it("Allows user to throw ball 2 and then records the score", function() {
      spyOn(game, 'pinsKnockedDown').and.returnValue(3);
      game.throwBall2();
      expect(game.playerScore()["frame2"].roll2).toEqual(3);
    });

    it("Changes the #nextBall to throw to number 1", function() {
      game.throwBall2();
      expect(game.nextBall).toEqual(1);
    });

    it("Resets the number of pins to 10", function() {
      game.throwBall2();
      expect(game.pinsRemaining).toEqual(10);
    });

    it("Moves the player to the next frame", function() {
      game.throwBall2();
      expect(game.currentFrame()).toEqual("frame3");
    });
  });

  describe("#pinsKnockedDown returns a random number between:", function() {

    it("0-10 if 10 pins remain", function() {
      expect(game.pinsKnockedDown()).toBeLessThan(11);
    });

    it("0 and number of remaining pins after ball 1 is thrown", function() {
      game.pinsRemaining = 4;
      expect(game.pinsKnockedDown()).toBeLessThan(5);
    });
  });

  describe("#isAStrike", function() {

    it("Checks if the player scored a strike", function() {
      expect(game.isAStrike(10)).toEqual(true);
    });
  });

  describe("Frame 10:", function() {

    it("#isFrame10 checks if it's currently frame number 10", function() {
      frameSet.currentFrame = "frame10"
      expect(game.isFrame10()).toEqual(true);
    });

    it("#checkExtraBallRequired sees if a third ball is required", function() {
      spyOn(score, 'frame10Strike').and.returnValue(true);
      expect(function() {game.checkExtraBallRequired()}).not.toThrow(new Error ("Game Over"));
    });

    it("Does not give a third ball if no strike/spare in frame 10", function() {
      expect(function() {game.checkExtraBallRequired()}).toThrow(new Error ("Game Over"));
    });

    it("#playExtraBall adds on the extra points from extra ball", function() {
      frameSet.currentFrame = "frame10";
      game.playerScore()["frame10"].frameScore = 10;
      spyOn(game, 'pinsKnockedDown').and.returnValue(8);
      game.playExtraBall();
      expect(game.playerScore()["frame10"].frameScore).toEqual(18);
    });
  });
});
