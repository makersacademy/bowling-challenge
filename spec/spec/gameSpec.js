'use strict';

describe('Game', function() {
  var game;

  beforeEach(function() {
    game = new Game();
  });

  describe('when initializing', function() {
    it('frame score equals zero', function() {
      expect(game.totalScore()).toEqual(0);
    });
  });

  describe('for each frame', function() {
    it('the player has two rolls', function() {
      expect(game.newFrame(2, 4)).toEqual(6);
    });

    it('the frame score is added to the total score', function() {
      game.newFrame(2, 4)
      expect(game.totalScore()).toEqual(6)
    });

    it('there is a position', function() {
      game.newFrame(2, 4)
      expect(game.currentPosition()).toEqual(1)
    });
  });

  describe('bonus points are', function() {
    it('added to previous frame score if the previous frame was a strike', function() {
      game.newFrame(10, 0)
      game.newFrame(2, 4)
      expect(game.addBonus()).toEqual(16)
    });

    it('added to total score', function() {
      game.newFrame(10, 0)
      game.newFrame(2, 4)
      game.addBonus()
      expect(game.totalScore()).toEqual(22)
    });

    it('added to previous frame score if the previous frame was a spare', function() {
      game.newFrame(5, 5)
      game.newFrame(2, 4)
      expect(game.addBonus()).toEqual(12)
    });
  });

});
