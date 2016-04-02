describe('Game', function () {
  'use strict';
  var game;

  beforeEach(function () {
    game = new Game;
  });

  describe('at beginning', function () {

    it('will start with a score of 0', function () {
      expect(game.score).toBe(0)
    });

    it('rollInFrame is at 1', function () {
      expect(game.rollInFrame).toBe(1)
    });

    it('strike is at false', function () {
      expect(game.isStrike).toBe(false)
    });

  });


  describe('when the first ball rolled is not a spare or strike', function () {

    it('will add the number of pins knocked down to the frame score', function () {
      game.rollBall(9)
      expect(game.frameScore).toBe(9)
    });

    it('will change the rollInFrame from 1 to 2', function () {
      game.rollBall(9)
      expect(game.rollInFrame).toBe(2)
    });
  });

  describe('when the second ball rolled is not a spare of strike', function () {

    it('will change the rollInFrame from 2 to 1', function() {
      game.rollBall(9)
      game.rollBall(0)
      expect(game.rollInFrame).toBe(1)
    });


    it ('will add the framescore to frames', function () {
      game.rollBall(2)
      game.rollBall(3)
      expect(game.frames.size).toBe(1)
    });

    it ('will reset framescore to zero', function () {
      game.rollBall(2)
      game.rollBall(3)
      expect(game.frameScore).toBe(0)
    });
  });
  describe ('when a strike is rolled', function () {

    beforeEach( function () {
      game.rollBall(10)
    });

    it('isStrike is true', function () {
      expect(game.isStrike).toBe(true)
    });

    it('frame is updated', function () {
      expect(game.frame).toBe(2)
    });

    it('and next frame is not a strike/spare, will add 10 + framescore + framescore', function () {
      game.rollBall(3)
      game.rollBall(4)
      expect(game.score).toBe(24)
    });
  });
});
