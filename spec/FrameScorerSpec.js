'use strict';

describe('FrameScorer unit tests', function() {

  var gameScorer;
  var frameScorer;
  var game;

  beforeEach(function() {
    gameScorer = new GameScorer();
    frameScorer = new FrameScorer();
    game = new Game();

  });
  describe('total pins array test', function() {
    it('#frameScores array records players scores for each bowl', function() {
      frameScorer.inputBowls(10,0)
      frameScorer.inputBowls(7,3)
      frameScorer.inputBowls(5,3)
      expect(frameScorer.totalPinsPerBowlArray).toEqual([10,0,7,3,5,3])
    });
  });
  //
  describe('frameScorer.frameTotals array calculates each individual frame \
  score', function() {
    it('normal scores e.g. non strike/spare scores are recorded as the end \
     of each frame', function() {
     frameScorer.updateFirstBowlScore(6)
     game.updateStrike(frameScorer)
     gameScorer.calculateFirstBowlScore(game, frameScorer)
     frameScorer.updateFrameScoreFirstBowl(game, gameScorer)
     frameScorer.updateSecondBowlScore(3)
     gameScorer.calculateSecondBowlScore(game, frameScorer)
     frameScorer.updateFrameScoreSecondBowl(game, gameScorer)
     game.updateStrikeAndSpareVariables(frameScorer)

     frameScorer.updateFirstBowlScore(5)
     game.updateStrike(frameScorer)
     gameScorer.calculateFirstBowlScore(game, frameScorer)
     frameScorer.updateFrameScoreFirstBowl(game, gameScorer)
     frameScorer.updateSecondBowlScore(3)
     gameScorer.calculateSecondBowlScore(game, frameScorer)
     frameScorer.updateFrameScoreSecondBowl(game, gameScorer)
     game.updateStrikeAndSpareVariables(frameScorer)

     expect(frameScorer.frameTotals).toEqual([9,17])
    });

    it('the frame after a spare the frame score is updated after \
    the first bowl of the next frame ', function() {
      frameScorer.updateFirstBowlScore(6)
      game.updateStrike(frameScorer)
      gameScorer.calculateFirstBowlScore(game, frameScorer)
      frameScorer.updateFrameScoreFirstBowl(game, gameScorer)
      frameScorer.updateSecondBowlScore(3)
      gameScorer.calculateSecondBowlScore(game, frameScorer)
      game.updateStrikeAndSpareVariables(frameScorer)
      frameScorer.updateFrameScoreSecondBowl(game, gameScorer)

      frameScorer.updateFirstBowlScore(5)
      game.updateStrike(frameScorer)
      gameScorer.calculateFirstBowlScore(game, frameScorer)
      frameScorer.updateFrameScoreFirstBowl(game, gameScorer)
      frameScorer.updateSecondBowlScore(5)
      gameScorer.calculateSecondBowlScore(game, frameScorer)
      game.updateStrikeAndSpareVariables(frameScorer)
      frameScorer.updateFrameScoreSecondBowl(game, gameScorer)

      frameScorer.updateFirstBowlScore(7)
      game.updateStrike(frameScorer)
      gameScorer.calculateFirstBowlScore(game, frameScorer)
      frameScorer.updateFrameScoreFirstBowl(game, gameScorer)

      expect(frameScorer.frameTotals).toEqual([9,26])
    });

    it("the next two bowls after a strike's scores are added before \
      being pushed into the frame", function() {
        frameScorer.updateFirstBowlScore(10)
        game.updateStrike(frameScorer)
        gameScorer.calculateFirstBowlScore(game, frameScorer)
        frameScorer.updateFrameScoreFirstBowl(game, gameScorer)
        frameScorer.updateSecondBowlScore(0)
        gameScorer.calculateSecondBowlScore(game, frameScorer)
        game.updateStrikeAndSpareVariables(frameScorer)
        frameScorer.updateFrameScoreSecondBowl(game, gameScorer)

        frameScorer.updateFirstBowlScore(10)
        game.updateStrike(frameScorer)
        gameScorer.calculateFirstBowlScore(game, frameScorer)
        frameScorer.updateFrameScoreFirstBowl(game, gameScorer)
        frameScorer.updateSecondBowlScore(0)
        gameScorer.calculateSecondBowlScore(game, frameScorer)
        game.updateStrikeAndSpareVariables(frameScorer)
        frameScorer.updateFrameScoreSecondBowl(game, gameScorer)

        frameScorer.updateFirstBowlScore(7)
        game.updateStrike(frameScorer)
        gameScorer.calculateFirstBowlScore(game, frameScorer)
        frameScorer.updateFrameScoreFirstBowl(game, gameScorer)
        frameScorer.updateSecondBowlScore(2)
        gameScorer.calculateSecondBowlScore(game, frameScorer)
        game.updateStrikeAndSpareVariables(frameScorer)
        frameScorer.updateFrameScoreSecondBowl(game, gameScorer)

        expect(frameScorer.frameTotals).toEqual([27,46,55])
      });
  });
});
