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
      var frame = { processRoll: function () {} };
      spyOn(game, 'getCurrentFrame').and.returnValue(frame);
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

  describe('getTotalScore', function () {
    it('calculates and return total score', function () {
      var card = { getCard: function () { return [[1, 2], [5, 2]]; } };
      spyOn(game, 'getScoreCard').and.returnValue(card);
      expect(game.getTotalScore()).toEqual(10);
    });
  });

  describe('getScoreCard', function () {
    it('returns a ScoreCard object', function () {
      var card = game.getScoreCard();
      expect(card instanceof ScoreCard).toBeTruthy();
    });
  });

  describe('flatten', function () {
    it('returns a flattened array', function () {
      var array = [[1, 2], [5, 2]];
      expect(flatten(array)).toEqual([1, 2, 5, 2]);
    });
    it('returns a flattened array', function () {
      var array = [[0]];
      expect(flatten(array)).toEqual([0]);
    });
    it('returns a flattened array', function () {
      var array = [[0, 0]];
      expect(flatten(array)).toEqual([0, 0]);
    });
    it('throws TypeError if not passed an array', function () {
      expect(function () { flatten(1); }).toThrow(new TypeError('Passed: 1'));
    });
    it('returns a empty flat array if passed [[]]', function () {
      var array = [[]];
      expect(flatten(array)).toEqual([]);
    });
  });

  describe('sumArray', function () {
    it('returns sum of a flat array', function () {
      var array = [1, 2, 5, 2];
      expect(sumArray(array)).toEqual(10);
    });
    it('can take array with 0', function () {
      expect(sumArray([0])).toEqual(0);
    });
    it('throws TypeError if not passed an array', function () {
      expect(function () { sumArray(1); }).toThrow(new TypeError('Passed: 1'));
    });
    it('returns 0 if array is empty', function () {
      var array = [];
      expect(sumArray(array)).toEqual(0);
    });
  });

  describe('checkGameEnd', function () {
    it('returns true if 10 full frames played and last was not strike', function () {
      var array = {getCard: function () { return [[], [], [], [], [], [], [], [], [], [1, 1]]; }};
      spyOn(game, 'getScoreCard').and.returnValue(array);
      expect(game.checkGameEnd()).toEqual(true);
    });
    it('returns false if 10 full frames played and last was a strike', function () {
      var array = {getCard: function () { return [[], [], [], [], [], [], [], [], [], [10, 0]]; }};
      spyOn(game, 'getScoreCard').and.returnValue(array);
      expect(game.checkGameEnd()).toEqual(false);
    });
    it('returns false if 11 full frames played and last was a strike', function () {
      var array = {getCard: function () { return [[], [], [], [], [], [], [], [], [], [10, 0, 10, 0], [10, 0, 10, 0]]; }};
      spyOn(game, 'getScoreCard').and.returnValue(array);
      expect(game.checkGameEnd()).toEqual(false);
    });
    it('returns true if 13 full frames played and last was a strike', function () {
      var array = {getCard: function () { return [[], [], [], [], [], [], [], [], [], [], [], [10, 0, 10, 0], [10, 0]]; }};
      spyOn(game, 'getScoreCard').and.returnValue(array);
      expect(game.checkGameEnd()).toEqual(true);
    });
  });
});
