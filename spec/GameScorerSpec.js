'use strict';

describe('GameScorer  unit tests', function() {

  var gameScorer;
  var frameScorer;
  var game;

  beforeEach(function() {
    gameScorer = new GameScorer();
    frameScorer = new FrameScorer();
    game = new Game();

  });

  describe("basic scoring functionality(not spares or strikes)", function() {
    it("can score multiple frames scores together and return a total", function() {
      frameScorer.inputBowls(4,2)
      game.updateStrike(frameScorer)
      gameScorer.calculateFirstBowlScore(game, frameScorer)
      gameScorer.calculateSecondBowlScore(game, frameScorer)
      frameScorer.inputBowls(5,7)
      game.updateStrike(frameScorer)
      gameScorer.calculateFirstBowlScore(game, frameScorer)
      gameScorer.calculateSecondBowlScore(game, frameScorer)
      expect(gameScorer.total).toEqual(18)
    });
  });

  describe("when complex combinations of scores are put in gamescorer \
  return the correct total", function() {
    it("test 1", function() {
      frameScorer.inputBowls(10,0);
      game.updateStrike(frameScorer)
      gameScorer.calculateFirstBowlScore(game, frameScorer)
      gameScorer.calculateSecondBowlScore(game, frameScorer)
      game.updateStrikeAndSpareVariables(frameScorer)
      frameScorer.inputBowls(9,1);
      game.updateStrike(frameScorer)
      gameScorer.calculateFirstBowlScore(game, frameScorer)
      gameScorer.calculateSecondBowlScore(game, frameScorer)
      game.updateStrikeAndSpareVariables(frameScorer)
      frameScorer.inputBowls(5,5);
      game.updateStrike(frameScorer)
      gameScorer.calculateFirstBowlScore(game, frameScorer)
      gameScorer.calculateSecondBowlScore(game, frameScorer)
      game.updateStrikeAndSpareVariables(frameScorer)
      frameScorer.inputBowls(7,2);
      game.updateStrike(frameScorer)
      gameScorer.calculateFirstBowlScore(game, frameScorer)
      gameScorer.calculateSecondBowlScore(game, frameScorer)
      game.updateStrikeAndSpareVariables(frameScorer)
      frameScorer.inputBowls(10,0);
      game.updateStrike(frameScorer)
      gameScorer.calculateFirstBowlScore(game, frameScorer)
      gameScorer.calculateSecondBowlScore(game, frameScorer)
      game.updateStrikeAndSpareVariables(frameScorer)
      frameScorer.inputBowls(10,0);
      game.updateStrike(frameScorer)
      gameScorer.calculateFirstBowlScore(game, frameScorer)
      gameScorer.calculateSecondBowlScore(game, frameScorer)
      game.updateStrikeAndSpareVariables(frameScorer)
      frameScorer.inputBowls(10,0);
      game.updateStrike(frameScorer)
      gameScorer.calculateFirstBowlScore(game, frameScorer)
      gameScorer.calculateSecondBowlScore(game, frameScorer)
      game.updateStrikeAndSpareVariables(frameScorer)
      frameScorer.inputBowls(9,0);
      game.updateStrike(frameScorer)
      gameScorer.calculateFirstBowlScore(game, frameScorer)
      gameScorer.calculateSecondBowlScore(game, frameScorer)
      game.updateStrikeAndSpareVariables(frameScorer)
      frameScorer.inputBowls(8,2);
      gameScorer.calculateFirstBowlScore(game, frameScorer)
      gameScorer.calculateSecondBowlScore(game, frameScorer)
      game.updateStrikeAndSpareVariables(frameScorer)
      frameScorer.inputBowls(9,1);
      game.updateStrike(frameScorer)
      gameScorer.calculateFirstBowlScore(game, frameScorer)
      gameScorer.calculateSecondBowlScore(game, frameScorer)
      game.updateStrikeAndSpareVariables(frameScorer)
      frameScorer.inputBowls(10,0);
      game.updateStrike(frameScorer)
      gameScorer.calculateFirstBowlScore(game, frameScorer)
      gameScorer.calculateSecondBowlScore(game, frameScorer)
      game.updateStrikeAndSpareVariables(frameScorer)
      expect(gameScorer.total).toEqual(187)
    });

    it("test 2", function() {
      frameScorer.inputBowls(1,4);
      gameScorer.calculateFirstBowlScore(game, frameScorer)
      gameScorer.calculateSecondBowlScore(game, frameScorer)
      game.updateStrikeAndSpareVariables(frameScorer)
      frameScorer.inputBowls(4,5);
      gameScorer.calculateFirstBowlScore(game, frameScorer)
      gameScorer.calculateSecondBowlScore(game, frameScorer)
      game.updateStrikeAndSpareVariables(frameScorer)
      frameScorer.inputBowls(6,4);
      gameScorer.calculateFirstBowlScore(game, frameScorer)
      gameScorer.calculateSecondBowlScore(game, frameScorer)
      game.updateStrikeAndSpareVariables(frameScorer)
      frameScorer.inputBowls(5,5);
      gameScorer.calculateFirstBowlScore(game, frameScorer)
      gameScorer.calculateSecondBowlScore(game, frameScorer)
      game.updateStrikeAndSpareVariables(frameScorer)
      frameScorer.inputBowls(10,0);
      gameScorer.calculateFirstBowlScore(game, frameScorer)
      gameScorer.calculateSecondBowlScore(game, frameScorer)
      game.updateStrikeAndSpareVariables(frameScorer)
      frameScorer.inputBowls(0,1);
      gameScorer.calculateFirstBowlScore(game, frameScorer)
      gameScorer.calculateSecondBowlScore(game, frameScorer)
      game.updateStrikeAndSpareVariables(frameScorer)
      frameScorer.inputBowls(7,3);
      gameScorer.calculateFirstBowlScore(game, frameScorer)
      gameScorer.calculateSecondBowlScore(game, frameScorer)
      game.updateStrikeAndSpareVariables(frameScorer)
      frameScorer.inputBowls(6,4);
      gameScorer.calculateFirstBowlScore(game, frameScorer)
      gameScorer.calculateSecondBowlScore(game, frameScorer)
      game.updateStrikeAndSpareVariables(frameScorer)
      frameScorer.inputBowls(10,0);
      gameScorer.calculateFirstBowlScore(game, frameScorer)
      gameScorer.calculateSecondBowlScore(game, frameScorer)
      game.updateStrikeAndSpareVariables(frameScorer)
      frameScorer.inputBowls(2,8);
      gameScorer.calculateFirstBowlScore(game, frameScorer)
      gameScorer.calculateSecondBowlScore(game, frameScorer)
      game.updateStrikeAndSpareVariables(frameScorer)
      frameScorer.inputBowls(6,0);
      gameScorer.calculateFirstBowlScore(game, frameScorer)
      gameScorer.calculateSecondBowlScore(game, frameScorer)
      game.updateStrikeAndSpareVariables(frameScorer)
      expect(gameScorer.total).toEqual(133)
    });
  });
});
