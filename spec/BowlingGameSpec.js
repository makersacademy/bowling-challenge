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
          expect(game.recordRollOne).toEqual([1]);
      });

      it('for roll one, user cannot enter number > 10', function() {
          var toomuchpins = game.NUMBER_OF_PINS + 1;
          expect(function() {
              game.rollOne(toomuchpins);
          }).toThrowError('number of pins cannot exceed 10');
      });
    });

    describe('Roll Two', function() {
      it('number of pins knocked down is recorded', function() {
          game.rollOne(1);
          game.rollTwo(2);
          expect(game.recordRollTwo).toEqual([2]);
      });

      it('cannot be entered without a rollOne', function() {
          expect(function() {
            game.rollTwo(1);
          }).toThrowError('enter roll one before roll two');
      });

      it('user cannot enter number > 10', function() {
          game.rollOne(1);
          var toomuchpins;
          toomuchpins = game.NUMBER_OF_PINS + 1;
          expect(function() {
              game.rollTwo(toomuchpins);
          }).toThrowError('number of pins cannot exceed 10');
      });

      it('# of pins in roll one + # of pins in roll two <= 10', function() {
          game.rollOne(1);
          expect(function() {
              game.rollTwo(game.NUMBER_OF_PINS);
          }).toThrowError('number of pins in frame cannot exceed 10');
      });
    });

    describe('Multi-Frame', function() {
      it('user can check current frame number', function() {
          expect(game.frameNumber).toEqual(1)
      });

      it('Frame roll two must be recorded before recording next roll one', function() {
          game.rollOne(1);
          expect(function() {
            game.rollOne(1);
          }).toThrowError('enter roll 2 to complete current roll');
      });

      it('the frame number is incremented after completing a frame', function() {
          game.rollOne(1);
          game.rollTwo(1);
          expect(game.frameNumber).toEqual(2);
      });
    });
});
