'use strict';

describe('Feature tests.', function () {

  var game;
  var frame1;

  var totalFramesNumber;

  beforeEach(function () {
    game = new Game();
    totalFramesNumber = game.TOTAL_NUMBER_OF_FRAMES;
  });

  describe('Basic functionality:', function () {

    // A bowling game consists of 10 frames in which the player tries to knock down the 10 pins.

    it('game has only 10 frames', function () {
      for (var i = 0; i < 10; i++) {
        game.rollNextFrame();
      };
      expect(game.rollNextFrame()).toEqual('You can roll only 10 frames in one game!');
    });
    it('in each frame player can knock from 0 to 10 pins', function () {
      spyOn(Math,'random').and.returnValue(0.5);
      game.rollNextFrame();
      frame1 = game.getFrameNumber(1);
      expect(frame1[0]).toEqual(5);
    });
    it('in each frame player can knock no more than 10 pins', function () {
      spyOn(Math,'random').and.returnValue(0.6);
      game.rollNextFrame();
      frame1 = game.getFrameNumber(1);
      expect(frame1).toEqual([6,4]);
    });

    // In every frame the player can roll one or two times.

    it('player can roll two times in every frame', function () {
      spyOn(Math,'random').and.returnValue(0.5);
      game.rollNextFrame();
      frame1 = game.getFrameNumber(1);
      expect(frame1).toEqual([5,5]);
    });

    // The score of a frame is the number of knocked down pins.

    it('game has a score, and every roll it increases for the number of knocked pins', function () {
      spyOn(Math,'random').and.returnValue(0.5);
      game.rollNextFrame();
      expect(game.getScore()).toEqual(10);
    });

  });

  describe('Calculating bonuses:', function () {

    // Strikes

    // The player has a strike if he knocks down all 10 pins with the first roll in a frame. The frame ends immediately (since there are no pins left for a second roll). The bonus for that frame is the number of pins knocked down by the next two rolls. That would be the next frame, unless the player rolls another strike.

    describe('If you roll a strike', function () {
      it('the frame ends immediately', function () {
        spyOn(Math,'random').and.returnValue(1);
        game.rollNextFrame();
        frame1 = game.getFrameNumber(1);
        expect(frame1).toEqual([10,0]);
      });
      it('next time you add double points to your score', function () {
        spyOn(Math,'random').and.returnValue(1);
        game.rollNextFrame();
        game.rollNextFrame();
        expect(game.getScore()).toEqual(30);
      });
    });

    // Spares

    // The player has a spare if the knocks down all 10 pins with the two rolls of a frame. The bonus for that frame is the number of pins knocked down by the next roll (first roll of next frame).

    describe('If you roll a spare', function () {
      it('next time you add double points of first roll to your score', function () {
        spyOn(Math,'random').and.returnValue(0.5);
        game.rollNextFrame();
        game.rollNextFrame();
        expect(game.getScore()).toEqual(25);
      });
    });

    // 10th frame

    // If the player rolls a strike or spare in the 10th frame they can roll the additional balls for the bonus. But they can never roll more than 3 balls in the 10th frame. The additional rolls only count for the bonus not for the regular frame count.

    // Gutter Game

    // A Gutter Game is when the player never hits a pin (20 zero scores).

    describe('If you play a gutter game', function () {
      it('announces gutter game', function () {
        spyOn(Math,'random').and.returnValue(0);
        for (var i = 0; i < 10; i++) {
          game.rollNextFrame();
        };
        expect(game.whichGame()).toEqual('Gutter Game');
      });
      it('then score is 0', function () {
        spyOn(Math,'random').and.returnValue(0);
        for (var i = 0; i < 10; i++) {
          game.rollNextFrame();
        };
        expect(game.getScore()).toEqual(0);
      });
    });

    // Perfect Game

    // A Perfect Game is when the player rolls 12 strikes (10 regular strikes and 2 strikes for the bonus in the 10th frame). The Perfect Game scores 300 points.

    describe('If you play a perfect game', function () {
      it('announces perfect game', function () {
        spyOn(Math,'random').and.returnValue(1);
        for (var i = 0; i < 10; i++) {
          game.rollNextFrame();
        };
        expect(game.whichGame()).toEqual('Perfect Game');
      });
      it('then score is 300', function () {
        spyOn(Math,'random').and.returnValue(1);
        for (var i = 0; i < 10; i++) {
          game.rollNextFrame();
        };
        expect(game.getScore()).toEqual(190);
      });
    });
  });

});
