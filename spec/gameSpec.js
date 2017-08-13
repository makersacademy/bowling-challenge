'use strict';

describe('Game', function() {
  var game;
  var player;

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
      var frame;

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
        var frame2;

        beforeEach(function () {
          frame2 = game.getCurrentFrame();
          game.receiveRoll(0);
          game.receiveRoll(7);
        });

        it('updates the frame\'s score', function() {
          expect(frame2.getScore()).toEqual(16);
        });

        it('updates the games\'s score', function() {
          expect(game.getScore()).toEqual(16);
        });
      });

      describe('second frame in the consecutive pair is a spare', function () {
        var frame2;

        beforeEach(function () {
          frame2 = game.getCurrentFrame();
          game.receiveRoll(2);
          game.receiveRoll(8);
        });

        it('does not update the frame\'s score', function() {
          expect(frame2.getScore()).toEqual(0);
        });

        it('does not update the games\'s score', function() {
          expect(game.getScore()).toEqual(9);
        });
      });

      describe('second frame in the consecutive pair is a strike', function () {
        var frame2;

        beforeEach(function () {
          frame2 = game.getCurrentFrame();
          game.receiveRoll(10);
        });

        it('does not update the frame\'s score', function() {
          expect(frame2.getScore()).toEqual(0);
        });

        it('does not update the games\'s score', function() {
          expect(game.getScore()).toEqual(9);
        });
      });
    });

    describe('first frame in a consecutive pair is a spare', function() {
      var frame;

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

      describe('there is no previous frame', function() {
        it('does not update the frame\'s score', function() {
          expect(frame.getScore()).toEqual(0);
        });

        it('does not update the game\'s score', function() {
          expect(game.getScore()).toEqual(0);
        });
      });

      describe('second frame in the consecutive pair is an open frame', function () {
        var frame2;

        beforeEach(function () {
          frame2 = game.getCurrentFrame();
          game.receiveRoll(7);
          game.receiveRoll(1);
        });

        it('updates the first frame\'s score', function() {
          expect(frame.getScore()).toEqual(17);
        });

        it('updates the second frame\'s score', function() {
          expect(frame2.getScore()).toEqual(25);
        });

        it('updates the games\'s score', function() {
          expect(game.getScore()).toEqual(25);
        });
      });

      describe('second frame in the consecutive pair is a spare', function() {
        var frame2;

        beforeEach(function () {
          frame2 = game.getCurrentFrame();
          game.receiveRoll(2);
          game.receiveRoll(8);
        });

        it('updates the first frame\'s score', function() {
          expect(frame.getScore()).toEqual(12);
        });

        it('does not update the second frame\'s score', function() {
          expect(frame2.getScore()).toEqual(0);
        });

        it('updates the games\'s score', function() {
          expect(game.getScore()).toEqual(12);
        });
      });

      describe('second frame in the consecutive pair is a strike', function() {
        var frame2;

        beforeEach(function () {
          frame2 = game.getCurrentFrame();
          game.receiveRoll(10);
        });

        it('updates the first frame\'s score', function() {
          expect(frame.getScore()).toEqual(20);
        });

        it('does not update the second frame\'s score', function() {
          expect(frame2.getScore()).toEqual(0);
        });

        it('updates the games\'s score', function() {
          expect(game.getScore()).toEqual(20);
        });
      });
    });

    describe('first frame in a consecutive pair is a strike', function() {
      var frame;
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

      describe('there is no previous frame', function() {
        it('does not update the frame\'s score', function() {
          expect(frame.getScore()).toEqual(0);
        });

        it('does not update the game\'s score', function() {
          expect(game.getScore()).toEqual(0);
        });
      });

      describe('second frame in the consecutive pair is an open frame', function () {
        var frame2;

        beforeEach(function () {
          frame2 = game.getCurrentFrame();
          game.receiveRoll(5);
          game.receiveRoll(3);
        });

        it('updates the first frame\'s score', function() {
          expect(frame.getScore()).toEqual(18);
        });

        it('updates the second frame\'s score', function() {
          expect(frame2.getScore()).toEqual(26);
        });

        it('updates the games\'s score', function() {
          expect(game.getScore()).toEqual(26);
        });
      });

      describe('second frame in the consecutive pair is a spare', function() {
        var frame2;

        beforeEach(function () {
          frame2 = game.getCurrentFrame();
          game.receiveRoll(7);
          game.receiveRoll(3);
        });

        it('updates the first frame\'s score', function() {
          expect(frame.getScore()).toEqual(20);
        });

        it('does not update the second frame\'s score', function() {
          expect(frame2.getScore()).toEqual(0);
        });

        it('updates the games\'s score', function() {
          expect(game.getScore()).toEqual(20);
        });
      });

      describe('second frame in the consecutive pair is a strike', function() {
        var frame2;

        beforeEach(function () {
          frame2 = game.getCurrentFrame();
          game.receiveRoll(10);
        });

        it('does not update the first frame\'s score', function() {
          expect(frame.getScore()).toEqual(0);
        });

        it('does not update the second frame\'s score', function() {
          expect(frame2.getScore()).toEqual(0);
        });

        it('does not update the games\'s score', function() {
          expect(game.getScore()).toEqual(0);
        });
      });
    });
  });
});
