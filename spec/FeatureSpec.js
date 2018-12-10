'use strict';

describe('feature test', function() {

  var gameScorer;
  var frameScorer;
  var game;

  beforeEach(function() {
    gameScorer = new GameScorer();
    frameScorer = new FrameScorer();
    game = new Game();
    });


  describe("scorecard features", function() {
    it("as a user i want to be able to calculate  \
    the score of my first bowl", function() {
      frameScorer.updateFirstBowlScore(5);
      expect(frameScorer.firstBowlScore).toEqual(5);
    });
  });

  it("should be able to calculate the score of users second bowl", function() {
    frameScorer.updateSecondBowlScore(5);
    expect(frameScorer.secondBowlScore).toEqual(5);
  });

  it("should be able to calculate the score of both bowls", function() {
    frameScorer.updateFirstBowlScore(5)
    frameScorer.updateSecondBowlScore(5)
    gameScorer.calculateFirstBowlScore(game, frameScorer)
    gameScorer.calculateSecondBowlScore(game, frameScorer)
    expect(gameScorer.total).toEqual(10);
  });
});
