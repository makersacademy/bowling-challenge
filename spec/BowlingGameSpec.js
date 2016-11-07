"use strict";

describe('BowlingGame', function() {

    var game;

    beforeEach(function() {
        game = new BowlingGame();
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
        describe('#frameNumber', function() {
            it('user can check current frame number', function() {
                expect(game.frameNumber).toEqual(1)
            });

            it('frameNumber is incremented on completing a frame', function() {
                game.rollOne(1);
                game.rollTwo(1);
                expect(game.frameNumber).toEqual(2);
            });
        });

        it('Roll two must be recorded before next roll one', function() {
            game.rollOne(1);
            expect(function() {
                game.rollOne(1);
            }).toThrowError('enter roll 2 to complete current roll');
        });

        it('User can check the rolls for a given frame number ', function() {
            game.rollOne(1);
            game.rollTwo(1);
            expect(game.checkFrame(1)).toEqual([1, 1])
        });

        describe('For a second frame, user can enter: ', function() {
            beforeEach(function() {
                game.rollOne(1);
                game.rollTwo(1);
            });

            it('roll 1', function() {
                game.rollOne(1);
                expect(game.recordRollOne).toEqual([1, 1]);
            });

            it('roll 2', function() {
                game.rollOne(1);
                game.rollTwo(1);
                expect(game.recordRollTwo).toEqual([1, 1]);
            });

        });

        it('Game ends at 10 frames', function() {
            for (var i = 0; i < 10; i++) {
                game.rollOne(1);
                game.rollTwo(1);
            }
            expect(function() {
                game.rollOne(1)
            }).toThrowError('game is over');
        });

    });

    describe('Scoring', function() {

        it('has a default score of zero', function() {
            expect(game.score()).toEqual(0);
        });

        it('Gutter game', function() {
            for (var i = 0; i < 10; i++) {
                game.rollOne(0);
                game.rollTwo(0);
            }

            expect(game.runningTotal).toEqual(0);
        });

    });
});
