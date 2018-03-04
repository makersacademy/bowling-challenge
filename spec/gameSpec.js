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

  describe(':bonus', function () {
    it('one spare', function() {
      game.roll(9,1)
      game.roll(5,3)
      expect(game.calculateScore()).toEqual(23)
      console.log(game)
    });
  
    // it('returns correct score for triple strike', function() {
    //   for (var i = 1; i <= 3; i ++) {
    //     game.roll(10);
    //   }
    //   expect(game.calculateScore()).toEqual(30)
    // });
  });
});