'use strict';

describe('Game', function() {
  var game;
  var player;
  var frame;

  beforeEach(function() {
    game = new Game('Nutbrown');
    player = game.getPlayer();
  });

  describe('constructor', function() {
    it('has ten frames', function() {
      expect(game.getFrames().length).toEqual(10);
    });

    it('the current frame number is 0', function() {
      expect(game.getCurrentFrameNumber()).toEqual(0);
    });

    it('has the player', function() {
      expect(player.getName()).toEqual('Nutbrown');
    });

    it('has a score of 0', function() {
      expect(game.getScore()).toEqual(0);
    });
  });

  describe('receive roll', function() {
    describe('first frame in a consecutive pair is an open frame', function() {
      beforeEach(function() {
        frame = game.getCurrentFrame();
        game.receiveRoll(6);
        game.receiveRoll(3);
      });

      it('updates the frame\'s first roll', function() {
        expect(frame.getFirstRoll()).toEqual(6);
      });

      it('updates the frame\'s second roll', function() {
        expect(frame.getSecondRoll()).toEqual(3);
      });

      it('updates the current frame number', function() {
        expect(game.getCurrentFrameNumber()).toEqual(1);
      });

      describe('there is no previous frame', function() {
        it('updates the frame\'s score', function() {
          expect(frame.getScore()).toEqual(9);
        });

        it('updates the game\'s score', function() {
          expect(game.getScore()).toEqual(9);
        });
      });

      describe('second frame in the consecutive pair is an open frame', function () {
        beforeEach(function () {
          frame = game.getCurrentFrame();
          game.receiveRoll(0);
          game.receiveRoll(7);
        });

        it('updates the frame\'s score', function() {
          expect(frame.getScore()).toEqual(16);
        });

        it('updates the games\'s score', function() {
          expect(game.getScore()).toEqual(16);
        });
      });

      describe('second frame in the consecutive pair is a spare', function () {
        beforeEach(function () {
          frame = game.getCurrentFrame();
          game.receiveRoll(2);
          game.receiveRoll(8);
        });

        it('does not update the frame\'s score as of now', function() {
          expect(frame.getScore()).toEqual(0);
        });

        it('does not update the games\'s score as of now', function() {
          expect(game.getScore()).toEqual(9);
        });
      });

      describe('second frame in the consecutive pair is a strike', function () {
        beforeEach(function () {
          frame = game.getCurrentFrame();
          game.receiveRoll(10);
        });

        it('does not update the frame\'s score as of now', function() {
          expect(frame.getScore()).toEqual(0);
        });

        it('does not update the games\'s score as of now', function() {
          expect(game.getScore()).toEqual(9);
        });
      });
    });

    describe('current frame is a spare', function() {
      beforeEach(function() {
        frame = game.getCurrentFrame();
        game.receiveRoll(6);
        game.receiveRoll(4);
      });

      it('updates the frame\'s first roll', function() {
        expect(frame.getFirstRoll()).toEqual(6);
      });

      it('updates the frame\'s second roll', function() {
        expect(frame.getSecondRoll()).toEqual(4);
      });

      it('updates the current frame number', function() {
        expect(game.getCurrentFrameNumber()).toEqual(1);
      });
    });

    describe('current frame is a strike', function() {
      beforeEach(function() {
        frame = game.getCurrentFrame();
        game.receiveRoll(10);
      });

      it('updates the frame\'s first roll', function() {
        expect(frame.getFirstRoll()).toEqual(10);
      });

      it('updates the current frame number', function() {
        expect(game.getCurrentFrameNumber()).toEqual(1);
      });
    });
  });
});
