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

        describe('each Frame', function() {
          it('for the first roll, user can enter number of pins knocked down', function() {
              game.rollone(1);
              expect(game.currentFrameRollOne).toEqual(1);
          })

          it('for roll one, user cannot enter number > 10', function() {
              var toomuchpins;
              toomuchpins = game.NUMBER_OF_PINS + 1;
              expect(function() {
                  game.rollone(toomuchpins);
              }).toThrowError('number of pins cannot exceed 10');
          })

          it('for roll two, user can enter number of pins knocked', function() {
              game.rolltwo(1);
              expect(game.currentFrameRollTwo).toEqual(1);
          })

          it('for roll two, user cannot enter number > 10', function() {
              var toomuchpins;
              toomuchpins = game.NUMBER_OF_PINS + 1;
              expect(function() {
                  game.rolltwo(toomuchpins);
              }).toThrowError('number of pins cannot exceed 10');
          })

          it('number of pins in roll one + number of pins in roll cannot exceed 10', function() {
              game.rollone(1);
              expect(function() {
                  game.rolltwo(game.NUMBER_OF_PINS);
              }).toThrowError('number of pins in frame cannot exceed 10');
          })

        });
    });
});
