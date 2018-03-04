'use strict';

describe('Game', function() {
  var game;
  var regularFrame;
  var spareFrame;
  var strikeFrame;

  beforeEach(function() {
    regularFrame = new Frame(3, 3);
    spareFrame = new Frame(5, 5);
    strikeFrame = new Frame(10);
    game = new Game();
  });

  describe(':frameList', function() {
    it('returns an array of frames', function() {
      expect(game.frameList).toEqual([]);
    });
  });

  describe(':roll', function() {
    it('creates frame & pushes into array', function() {
      game.roll(2,3);
      expect(game.frameList[0].frameScore).toEqual(5);
    });
  });

  describe(':calculateScore', function() {
    it('adds total frameScores', function() {
      game.roll(2, 3);
      game.roll(2, 3);
      expect(game.calculateScore()).toEqual(10);
    });
    

  });

  // describe('calculate total score', function() {
  //   it('returns an integer with correct score', function() {
  //     expect
  //   });
  // });
});