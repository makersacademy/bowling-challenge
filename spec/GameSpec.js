'use strict'

describe('Game', function() {

  var game;

  beforeEach(function() {
    game = new Game();
  });

  describe('when a game starts:', function() {

    it('the scorecard is empty', function() {
      expect(game._scorecard).toEqual([]);
    });

    it('the frame is empty', function() {
      expect(game._frame).toEqual([]);
    });

    it('the partial scores are empty', function() {
      expect(game._partialScores).toEqual([]);
    });

  });

  describe('when rolling:', function() {

    it('the roll score is added to the frame', function() {
      game.roll(3)
      expect(game._frame).toEqual([3]);
    });

    it('raises an error if someone tries to knock down more than 10 pins', function() {
      expect(function() {game.roll(11);}).toThrow(new Error('There are only 10 pins'));
    });

    it('adds a maximum of 2 rolls to a frame', function() {
      game.roll(1)
      game.roll(2)
      game.roll(3)
      expect(game._frame).toEqual([1,2]);
    });

  });

  describe('when rolling for the second time:', function() {

    it('raises an error if someone tries to knock down more pins than available', function() {
      game.roll(2)
      expect(function() {game.roll2(9);}).toThrow(new Error('There are not that many pins'));
    });

  });

  describe('within a frame', function() {

    it('keeps track of the score', function() {
      game.roll(1)
      game.roll(2)
      expect(game.frameScore()).toEqual(3);
    });

  });

  describe('within a game', function() {

    it('adds a full frame to the scorecard', function() {
      game.roll(1)
      game.roll(2)
      game.archiveFrame()
      game.roll(3)
      game.roll(4)
      game.archiveFrame()
      expect(game._scorecard).toEqual([ [1, 2], [3, 4] ] );
    });

    it('resets a frame to empty once the turn is finished', function() {
      game.roll(1)
      game.roll(2)
      game.archiveFrame()
      expect(game._frame).toEqual([]);
    });

    it('adds a maximum of 10 frames to a game', function() {
      for (var i=0; i<20; i++) {
        game.roll(1)
        game.roll(2)
        game.archiveFrame()
      }
      expect(game._scorecard.length).toEqual(10);
    });

    it('keeps track of the score', function() {
      for (var i=0; i<20; i++) {
        game.roll(1)
        game.roll(2)
        game.archiveFrame()
        game.frameScore()
      }
      expect(game.totalScore()).toEqual(30);
    });

    describe('#.round:', function() {

      it('adds a full frame to the scorecard', function() {
        game.round(1,2)
        game.round(3,4)
        expect(game._scorecard).toEqual([ [1, 2], [3, 4] ] );
      });

      it('resets a frame to empty once the turn is finished', function() {
        game.round(1,2)
        expect(game._frame).toEqual([]);
      });

      it('adds a maximum of 10 frames to a game', function() {
        for (var i=0; i<20; i++) {
          game.round(1,2)
        }
        expect(game._scorecard.length).toEqual(10);
      });

      it('keeps track of the score', function() {
        for (var i=0; i<20; i++) {
          game.round(1,2)
        }
        expect(game.totalScore()).toEqual(30);
      });

    });

  });

});
