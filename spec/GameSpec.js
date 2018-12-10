'use strict';

describe('Game unit tests', function() {

  var gameScorer;
  var frameScorer;
  var game;

  beforeEach(function() {
    gameScorer = new GameScorer();
    frameScorer = new FrameScorer();
    game = new Game();

  });

  describe("fuctionality exists for recording whether a strike was bowled \
  in the previous 2 frames", function() {
    it("can use the #strike variable to check for a strike", function() {
      frameScorer.inputBowls(10,0)
      game.updateStrike(frameScorer)
      expect(game.strike).toEqual(true);
    });

    it("#strike returns false if user didn't bowl a strike", function() {
      game.strike = true;
      frameScorer.inputBowls(8,1)
      game.updateStrike(frameScorer);
      expect(game.strike).toEqual(false);
    });
  });

  describe("whether a spare was bowled in the previous frame or not", function() {
    it("can use #spare to check if a spare was bowled in the previous \
    frame", function() {
      frameScorer.inputBowls(5,5)
      game.updateSpare(frameScorer);
      expect(game.spare).toEqual(true);
    });

    it("#spare returns false if a spare was not bowled in the previous \
    frame", function() {
      frameScorer.inputBowls(0,5)
      game.updateSpare(frameScorer);
      expect(game.spare).toEqual(false);
    });
  });
  //
  describe("first and second strike variable values are \
  changed post scoring", function() {
    it("when #firstbowl score is calculated, if first \
    bowl is a strike firstStrike should become true", function() {
      frameScorer.inputBowls(10,0)
      game.updateStrike(frameScorer)
      gameScorer.calculateFirstBowlScore(game, frameScorer)
      gameScorer.calculateSecondBowlScore(game, frameScorer)
      game.updateStrikeAndSpareVariables(frameScorer)
      expect(game.firstStrike).toEqual(true)
    });

    it("when #firstbowl score is calculated, if first bowl is not a \
    // strike firstStrike should be false", function() {
      game.firstStrike = true;
      frameScorer.inputBowls(8,2)
      game.updateStrike(frameScorer)
      gameScorer.calculateFirstBowlScore(game, frameScorer)
      gameScorer.calculateSecondBowlScore(game, frameScorer)
      game.updateStrikeAndSpareVariables(frameScorer)
      expect(game.firstStrike).toEqual(false)
    });

    it("when #firstbowl score is calculated, if user bowled\
     two consecutive strikes #secondStrike should be true", function() {
      frameScorer.inputBowls(10,0)
      game.updateStrike(frameScorer)
      gameScorer.calculateFirstBowlScore(game, frameScorer)
      gameScorer.calculateSecondBowlScore(game, frameScorer)
      game.updateStrikeAndSpareVariables(frameScorer)
      frameScorer.inputBowls(10,0)
      game.updateStrike(frameScorer)
      gameScorer.calculateFirstBowlScore(game, frameScorer)
      gameScorer.calculateSecondBowlScore(game, frameScorer)
      game.updateStrikeAndSpareVariables(frameScorer)
      expect(game.secondStrike).toEqual(true)
      });


    it("if user bowled did not bowl \
     a strike two frames ago #secondStrike should be false", function() {
      game.secondStrike = true;
      frameScorer.inputBowls(8,2)
      game.updateStrike(frameScorer)
      gameScorer.calculateFirstBowlScore(game, frameScorer)
      gameScorer.calculateSecondBowlScore(game, frameScorer)
      game.updateStrikeAndSpareVariables(frameScorer)
      frameScorer.inputBowls(7,3)
      game.updateStrike(frameScorer)
      gameScorer.calculateFirstBowlScore(game, frameScorer)
      gameScorer.calculateSecondBowlScore(game, frameScorer)
      game.updateStrikeAndSpareVariables(frameScorer)
      expect(game.secondStrike).toEqual(false)
    });
  });
});
