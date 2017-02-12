'use strict';

describe('Feature tests.', function () {

  var game;
  var frame;
  var frameStrike;
  var frameSpare;

  beforeEach(function () {
    game = new Game();
    frame = new Frame();
    frameStrike = new Frame();
    frameSpare = new Frame();
  });


  describe('Calculating bonuses:', function () {

    // Strikes

    // The player has a strike if he knocks down all 10 pins with the first roll in a frame. The frame ends immediately (since there are no pins left for a second roll). The bonus for that frame is the number of pins knocked down by the next two rolls. That would be the next frame, unless the player rolls another strike.

    describe('If you roll a strike', function () {
      it('next time you add double points to your score', function () {
        frameStrike.rollOneFrame(10,0);
        game.addNewFrame(frameStrike);
        frame.rollOneFrame(3,2);
        game.addNewFrame(frame);
        expect(game.getScore()).toEqual(20);
      });
    });

    // Spares

    // The player has a spare if the knocks down all 10 pins with the two rolls of a frame. The bonus for that frame is the number of pins knocked down by the next roll (first roll of next frame).

    describe('If you roll a spare', function () {
      it('next time you add double points of first roll to your score', function () {
        frameStrike.rollOneFrame(3,7);
        game.addNewFrame(frameStrike);
        frame.rollOneFrame(3,2);
        game.addNewFrame(frame);
        expect(game.getScore()).toEqual(18);
      });
    });

    // 10th frame

    // If the player rolls a strike or spare in the 10th frame they can roll the additional balls for the bonus. But they can never roll more than 3 balls in the 10th frame. The additional rolls only count for the bonus not for the regular frame count.

    describe('10th frame', function () {
      it('If the player rolls a strike or spare in the 10th frame they can roll the additional balls for the bonus.', function () {
        frame.rollOneFrame(10,0);
        for (var i = 0; i < 9; i++) {
          game.addNewFrame(frame);
        };
        game.finalFrame(frame, 10, 10)
        expect(game.whichGame()).toEqual('Perfect Game');
      });
    });

    // Gutter Game

    // A Gutter Game is when the player never hits a pin (20 zero scores).

    describe('If you play a gutter game', function () {
      it('announces gutter game', function () {
        frame.rollOneFrame(0,0);
        for (var i = 0; i < 9; i++) {
          game.addNewFrame(frame);
        };
        game.finalFrame(frame, 0, 0)
        expect(game.whichGame()).toEqual('Gutter Game');
      });
    });

    // Perfect Game

    // A Perfect Game is when the player rolls 12 strikes (10 regular strikes and 2 strikes for the bonus in the 10th frame). The Perfect Game scores 300 points.

    describe('If you play a perfect game', function () {
      it('announces perfect game', function () {
        frame.rollOneFrame(10,0);
        for (var i = 0; i < 9; i++) {
          game.addNewFrame(frame);
        };
        game.finalFrame(frame, 10, 10)
        expect(game.whichGame()).toEqual('Perfect Game');
      });
    });
  });

});
