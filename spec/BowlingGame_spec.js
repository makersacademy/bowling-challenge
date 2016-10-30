'use strict';

describe('BowlingGame', function () {

  var game
  var frame
  var frame1
  var frame2

  beforeEach(function () {
    game = new BowlingGame();
    frame = new Frame();
    frame.rollCounter = 2;
    frame.rollsTotal = 9;
  });

  describe('object is constructed with', function () {
    it('a score of zero', function () {
      expect(game.score).toEqual(0);
    });

    it('an empty array of frames', function () {
      expect(game.noOfFrames).toEqual([]);
    });
  });

  describe('increments', function () {
    it('the score on every frame', function () {
      game.addFrame(frame);
      expect(game.score).toEqual(9);
    });
    it('the no of Frames with a Frame object', function () {
      game.addFrame(frame);
      expect(game.noOfFrames.length).toEqual(1);
    });

  });

  it('only allows 10 frames', function () {
    for (var i = 1; i < 11; i ++) {
      game.addFrame(frame);
    }
    expect(game.addFrame(new Frame())).toEqual('Game is over');
  });

  describe('last frame was a', function () {
    it('spare', function () {
      frame1 = new Frame();
      frame1.roll1 = 6;
      frame1.roll2 = 4;
      frame1.rollsTotal = 10;
      game.addFrame(frame1);
      frame2 = new Frame();
      frame2.roll1 = 5;
      frame2.roll2 = 2;
      frame2.rollsTotal = 7;
      game.addFrame(frame2);
      expect(game.score).toEqual(22);
    });
  });

  describe('outcome is', function () {
    it('gutter game', function () {
      for (var i = 1; i < 11; i ++) {
        game.addFrame(new Frame());
      }
      expect(game.giveOutcome()).toEqual('Gutter game! Too bad, try again next time!');
    });
    it('a perfect game', function () {
      game.score = game.HIGHESTSCORE;
      expect(game.giveOutcome()).toEqual('Perfect game!');
    });
    it('regular score', function () {
      for (var i = 1; i < 11; i ++) {
        game.addFrame(frame);
      }
      expect(game.giveOutcome()).toEqual('Your score is 90');
    });
  });

});
