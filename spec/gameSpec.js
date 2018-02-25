'use strict';

describe('Game:', function() {
  var game;
  var regularFrame;
  var spareFrame;

  beforeEach(function() {
    regularFrame = new Frame(3, 3);
    spareFrame = new Frame(5, 5);
    game = new Game();
  });

  describe('frame list', function() {
    it('returns an array of frames', function() {
      expect(game.frameList).toEqual([]);
    });
  });

  // describe('calculate total score', function() {
  //   it('returns an integer with correct score', function() {
  //     expect
  //   });
  // });
});