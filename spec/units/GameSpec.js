'use strict';

describe('Game', function () {
  var game, frame;

  beforeEach(function () {
    game = new Game();
    frame = game.currentFrame;
  });

  describe('play', function () {
    it('calls processroll on currentFrame', function () {
      spyOn(frame, 'processRoll');
      game.play();
      expect(frame.processRoll).toHaveBeenCalled();
    });
    it('calls nextFrame', function () {
      spyOn(game, 'nextFrame');
      game.play();
      expect(game.nextFrame).toHaveBeenCalled();
    });
  });

  describe('getCurrentFrame', function () {
    it('returns a frame object', function () {
      expect(frame instanceof Frame).toBeTruthy();
    });
  });

  describe('startNewFrame', function () {
    it('updates currentFrame with new Frame instance', function () {
      game.startNewFrame();
      var newFrame = game.getCurrentFrame();
      expect(frame).not.toBe(newFrame);
    });
  });

  describe('nextFrame', function () {
    beforeEach(function () {
      spyOn(game, 'isFrameFinished');
      spyOn(game, 'startNewFrame');
    });
    it('calls startNewFrame if isFrameFinished returns true', function () {
      game.isFrameFinished.and.returnValue(true);
      game.nextFrame();
      expect(game.isFrameFinished).toHaveBeenCalled();
      expect(game.startNewFrame).toHaveBeenCalled();
    });
    it('does not call startNewFrame if isFrameFinished returns false', function () {
      game.isFrameFinished.and.returnValue(false);
      game.nextFrame();
      expect(game.isFrameFinished).toHaveBeenCalled();
      expect(game.startNewFrame).not.toHaveBeenCalled();
    });
  });

  describe('isFrameFinished', function () {
    it('calls getIsFinished on currentFrame', function () {
      spyOn(frame, 'getIsFinished');
      game.isFrameFinished();
      expect(frame.getIsFinished).toHaveBeenCalled();
    });
  });

  describe('getScoreCard', function () {
    it('returns a frame object', function () {
      var card = game.getScoreCard();
      expect(card instanceof ScoreCard).toBeTruthy();
    });
  });
});
