'use strict';

describe('Game', function () {

  var game;
  var frame1;
  var res;

  var totalFramesNumber;

  beforeEach(function () {
    game = new Game();
    totalFramesNumber = game.TOTAL_NUMBER_OF_FRAMES;
  });

  describe('::new', function () {
    it('has only 10 frames', function () {
      for (var i = 0; i < 10; i++) {
        game.rollNextFrame();
      };
      expect(game.rollNextFrame()).toEqual('You can roll only 10 frames in one game!');
    });
  });

  describe('#getScore', function () {
    it('returns current score of the game', function () {
      spyOn(Math,'random').and.returnValue(0.5);
      game.rollNextFrame();
      expect(game.getScore()).toEqual(10);
    });
  });

  describe('#rollNextFrame', function () {
    it('rolls a specific frame', function () {
      spyOn(Math,'random').and.returnValue(0.5);
      game.rollNextFrame();
      frame1 = game.getFrameNumber(1);
      expect(frame1[0]).toEqual(5);
    });
    it('player can roll two times in every frame', function () {
      spyOn(Math,'random').and.returnValue(0.5);
      game.rollNextFrame();
      expect(frame1).toEqual([5,5]);
    });
    it('in each frame player can knock no more than 10 pins', function () {
      spyOn(Math,'random').and.returnValue(0.6);
      game.rollNextFrame();
      frame1 = game.getFrameNumber(1);
      expect(frame1).toEqual([6,4]);
    });
  });
})
