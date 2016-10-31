"use strict";

describe( 'BowlingGame', function() {

    var game;

    beforeEach( function() {
        game = new BowlingGame();
    });

    describe( 'Game', function() {
        it( 'has a default score of zero', function() {
            expect(game.score()).toEqual(0);
        });
    });

    describe('Roll One', function() {
      it('number of pins knocked down is recorded', function() {
          game.rollOne(1);
          expect(game.currentFrameRollOne).toEqual(1);
      });

      it('for roll one, user cannot enter number > 10', function() {
          var toomuchpins;
          toomuchpins = game.NUMBER_OF_PINS + 1;
          expect(function() {
              game.rollOne(toomuchpins);
          }).toThrowError('number of pins cannot exceed 10');
      });

      // it('Strike auto-completes turn', function() {
      //       game.rollOne(1);
      //       expect(game.frameNumber()).toEqual(2);
      // });
    });

    describe('Roll Two', function() {
      it('user cannot enter number > 10', function() {
          var toomuchpins;
          toomuchpins = game.NUMBER_OF_PINS + 1;
          expect(function() {
              game.rollTwo(toomuchpins);
          }).toThrowError('number of pins cannot exceed 10');
      });

      it('running total is updated', function() {
          game.rollOne(1);
          game.rollTwo(1);
          expect(game.score()).toEqual(2);
      });

      it('frame end, turn auto-completes', function() {
          game.rollOne(1);
          game.rollTwo(1);
          expect(game.frameNumber()).toEqual(2);
      });

      it('# of pins in roll one + # of pins in roll <= 10', function() {
          game.rollOne(1);
          expect(function() {
              game.rollTwo(game.NUMBER_OF_PINS);
          }).toThrowError('number of pins in frame cannot exceed 10');
      });
    });
});
