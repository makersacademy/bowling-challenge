'use strict';

describe('Game', function() {
  var game;
  var frame;

  beforeEach(function() {
    game = new Game();
    frame = jasmine.createSpyObj('frame', ['method']);
  });

  describe('when beginning a new game', function() {
    it('contains an empty array to track the frames', function() {
      expect(game._frames).toEqual([]);
    });

    it('the score will start at zero', function() {
      expect(game._totalScore).toEqual(0);
    });
  });

  describe('when playing a game', function() {
    it('when roll is called it creates a new frame', function() {
      game.takeTurn();
      expect(game._frames.length).toEqual(1);
    });
  });

  describe('when calculating scores', function() {
    beforeEach(function() {
      for (var i = 0; i < 10; i++) {
        game.takeTurn(1, 1);
      }
    });

    it('can calculate the score for a frame', function() {
      game._frameScore();
      expect(game._pinsDown[0]).toEqual(2);
    });

    it('can calculate the total score', function() {
      game._frameScore();
      game._addTotalScore();
      expect(game._totalScore).toEqual(20);
    });
  });

  describe('when calculating bonus points', function() {
    it('can check whether each frame was a strike', function() {
      game.takeTurn(10, 0);
      game._checkForStrikes();
      expect(game._frames[0]._isStrike).toEqual(true);
    });

    it('can check whether each frame was a spare', function() {
      game.takeTurn(5, 5);
      game._checkForSpares();
      expect(game._frames[0]._isSpare).toEqual(true);
    });
  });

  describe('when a game is finished', function() {
    beforeEach(function() {
      for (var i = 0; i < 10; i++) {
        game.takeTurn(1, 1);
      }
    });

    it('you cannot continue to play when you have already rolled 10 frames', function() {
      game.takeTurn(1, 1);
      expect(game._frames.length).not.toEqual(11);
    });

    it('resets the frames', function() {
      game._endGame();
      expect(game._frames).toEqual([]);
    });

    it('resets the pins down per frame', function() {
      game._endGame();
      expect(game._pinsDown).toEqual([]);
    });

    it('resets the bonus points', function() {
      game._endGame();
      expect(game._bonusPoints).toEqual([]);
    });

    it('resets the total score back to zero', function() {
      game._endGame();
      expect(game._totalScore).toEqual(0);
    });
  });

});
