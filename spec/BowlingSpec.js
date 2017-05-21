(function() {
  'use strict';

  describe('Bowling', function() {

    var game;

    beforeEach(function() {
      game = new Bowling();
    });
    it('has 10 pins left at start', function() {
      expect(game.pinsLeft()).toBe(10);
    });
    it('can knock down a pin with a bowling ball', function() {
      game.throwBall(1);
      expect(game.pinsLeft()).toBe(9);
    });
    it('starts a new frame', function() {
      game.newFrame();
      expect(game.getFrames()).toContain(new Frame());
    });
    it('scores a frame when the ball is thrown', function() {
      game.throwBall(1);
      expect(game.getCurrentFrame().getFirstScore()).toBe(1);
    });
    it('scores a frame when two balls are thrown', function() {
      game.throwBall(1);
      game.throwBall(2);
      expect(game.getCurrentFrame().getSecondScore()).toBe(2);
    });
    it('starts a new frame when the current frame is over', function() {
      game.throwBall(1);
      game.throwBall(2);
      game.throwBall(3);
      expect(game.getFrames().length).toBe(2);
      expect(game.getCurrentFrame().getFirstScore()).toBe(3);
      expect(game.pinsLeft()).toBe(7);
    });
    it('resets the pins before starting a new frame', function() {
      game.throwBall(1);
      game.throwBall(2);
      expect(game.pinsLeft()).toBe(10);
    });
    it('maximum of 10 frames to a game', function() {
      var i;
      for (i=0;i<20;i++) {
        game.throwBall(0);
      }
      expect(function() {game.newFrame();}).toThrow(new Error('Game over bud, go home.'));
    });
    it('frame ends after strike', function() {
      game.throwBall(10);
      expect(game.getCurrentFrame().isOver()).toBe(true);
    });

    describe('Scoring', function() {
      it('can give a running total score from all frames played', function() {
        game.throwBall(1);
        game.throwBall(2);
        game.throwBall(3);
        game.throwBall(4);
        game.throwBall(5);
        expect(game.totalScore()).toBe(15);
      });
      it('adds the first score of the frame if the previous frame was a spare', function() {
        game.throwBall(5);
        game.throwBall(5);
        game.throwBall(3);
        expect(game.totalScore()).toBe(16);
      });
      it('adds the total score of the frame if the previous frame was a strike', function() {
        game.throwBall(10);
        game.throwBall(5);
        game.throwBall(3);
        expect(game.totalScore()).toBe(26);
      });
      it('correctly accumulates bonus points for multiple strikes', function() {
        game.throwBall(10);
        game.throwBall(10);
        game.throwBall(1);
        game.throwBall(2);
        expect(game.totalScore()).toBe(37);
      });
    });
    describe('Final Frame', function() {
      it('has an extra throw if spare', function() {
        var i;
        for (i=0;i<18;i++) {
          game.throwBall(0);
        }
        game.throwBall(5);
        game.throwBall(5);
        expect(function() {game.throwBall(5);}).not.toThrow(new Error('Game over bud, go home.'));
        expect(game.getCurrentFrame().getThirdScore()).toBe(5);
        expect(function() {game.throwBall(5);}).toThrow(new Error('Game over bud, go home.'));
      });
      it('has an extra two throws if strike', function() {
        var i;
        for (i=0;i<18;i++) {
          game.throwBall(0);
        }
        game.throwBall(10);
        game.throwBall(0);
        expect(function() {game.throwBall(5);}).not.toThrow(new Error('Game over bud, go home.'));
        expect(game.getCurrentFrame().getThirdScore()).toBe(5);
        expect(function() {game.throwBall(5);}).toThrow(new Error('Game over bud, go home.'));
      });
      it('scores the spare bonus', function() {
        var i;
        for (i=0;i<18;i++) {
          game.throwBall(0);
        }
        game.throwBall(9);
        expect(game.totalScore()).toBe(9);
        game.throwBall(1);
        expect(game.totalScore()).toBe(10);
        game.throwBall(5);
        expect(game.totalScore()).toBe(15);
      });
      it('scores the strike bonus', function() {
        var i;
        for (i=0;i<18;i++) {
          game.throwBall(0);
        }
        game.throwBall(10);
        expect(game.totalScore()).toBe(10);
        game.throwBall(1);
        expect(game.totalScore()).toBe(11);
        game.throwBall(5);
        expect(game.totalScore()).toBe(16);

      });
    });
  });
}());
