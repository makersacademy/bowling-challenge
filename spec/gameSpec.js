'use strict';

describe('Game Class', function() {

  describe('Init Unit Tests', function() {

    var game;

    beforeEach(function() {
      game = new Game();
      frames = new Frames();
    });

    describe('Score', function() {
      it('score starts at 0', function() {
        expect(game.getCurrentTotalScore()).toEqual(0);
      });
    });


  describe('Roll Unit Tests', function() {

    describe('.roll', function() {
      it('adjusts frames', function() {
        game.roll(5);
        expect(game.frames.getAllFrameScores()).toEqual([5]);
      });
    });
  });

  });

});
