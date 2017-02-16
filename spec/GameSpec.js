'use strict';

describe('Game', function () {

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

  describe('#getScore', function () {
    it('returns current score of the game', function () {
      frame.rollOneFrame(3,2);
      game.addNewFrame(frame);
      expect(game.getScore(1)).toEqual(5);
    });
  });

  describe('#addNewFrame', function () {
    it('adds a frame', function () {
      frame.rollOneFrame(3,2);
      game.addNewFrame(frame);
      expect(game._frames[0].getFrame()).toEqual([3,2]);
    });

    describe('If you roll a strike', function () {
      it('score is calculated properly', function () {
        frameStrike.rollOneFrame(10,0);
        game.addNewFrame(frameStrike);
        frame.rollOneFrame(3,2);
        game.addNewFrame(frame);
        expect(game.getScore(2)).toEqual(20);
      });
    });

    describe('If you roll a spare', function () {
      it('score is calculated properly', function () {
        frameStrike.rollOneFrame(3,7);
        game.addNewFrame(frameStrike);
        frame.rollOneFrame(3,2);
        game.addNewFrame(frame);
        expect(game.getScore(2)).toEqual(15);
      });
    });
  });


  describe('#finalFrame', function () {
    it('calculates perfect game ok', function () {
      frame.rollOneFrame(10,0);
      for (var i = 0; i < 9; i++) {
        game.addNewFrame(frame);
      };
      game.finalFrame(frame, 10, 10)
      expect(game.whichGame()).toEqual('Perfect Game');
    });
  });

  describe('#whichGame', function () {
    it('announces perfect game', function () {
      frame.rollOneFrame(10,0);
      for (var i = 0; i < 9; i++) {
        game.addNewFrame(frame);
      };
      game.finalFrame(frame, 10, 10)
      expect(game.whichGame()).toEqual('Perfect Game');
    });
    it('announces ordinary game', function () {
      frame.rollOneFrame(3,0);
      for (var i = 0; i < 9; i++) {
        game.addNewFrame(frame);
      };
      game.finalFrame(frame, 0, 0)
      expect(game.whichGame()).toEqual('Ordinary Game');
    });
    it('announces gutter game', function () {
      frame.rollOneFrame(0,0);
      for (var i = 0; i < 9; i++) {
        game.addNewFrame(frame);
      };
      game.finalFrame(frame, 0, 0)
      expect(game.whichGame()).toEqual('Gutter Game');
    });
  });
});
