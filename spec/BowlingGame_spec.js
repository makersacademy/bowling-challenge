'use strict';

describe('BowlingGame', function () {

  var game
  var frame
  var strikeFrame
  var spareFrame


  beforeEach(function () {
    game = new BowlingGame();

    frame = new Frame();
    frame.rollCounter = 2;
    frame.roll1 = 7;
    frame.roll2 = 2;
    frame.rollsTotal = 9;

    strikeFrame = new Frame ();
    strikeFrame.roll1 = 10;
    strikeFrame.rollsTotal = 10;

    spareFrame = new Frame ();
    spareFrame.roll1 = 6;
    spareFrame.roll2 = 4;
    spareFrame.rollsTotal = 10;

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
    it('strike', function () {
      game.addFrame(strikeFrame);
      game.addFrame(frame);
      expect(game.score).toEqual(28);
    });

    it('spare', function () {
      game.addFrame(spareFrame);
      game.addFrame(frame);
      expect(game.score).toEqual(26);
    });
  });

  describe('last 2 frames were', function () {
    it('strikes', function () {
      game.addFrame(strikeFrame);
      game.addFrame(strikeFrame);
      game.addFrame(frame);
      expect(game.score).toEqual(55);
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
