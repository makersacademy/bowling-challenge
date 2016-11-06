var Game = require('../lib/Game.js');

describe('Game', function () {
    var game;
    beforeEach(function () {
        game = new Game();
    });
    describe('frames', function () {
        it('contains 10 frames', function () {
            expect(game.frames.length).toEqual(10);
        });
    });

    describe('scoring', function () {
        var testCases = [
            {
                bowls: [],
                expectedScore: 0
            },
            {
                bowls: [5],
                expectedScore: 5
            },
            {
                bowls: [5, 2],
                expectedScore: 7
            },
            {
                bowls: [5, 2, 6],
                expectedScore: 13
            },
            {
                bowls: [5, 5, 6],
                expectedScore: 22
            },
            {
                bowls: [10, 6, 2],
                expectedScore: 26
            },
            {
                bowls: [10, 10, 10],
                expectedScore: 60
            },
            {
                bowls: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                expectedScore: 0
            },
            {
                bowls: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 5],
                expectedScore: 10
            },
            {
                bowls: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10],
                expectedScore: 10
            },
            {
                bowls: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10],
                expectedScore: 30
            },
            {
                bowls: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 5, 0],
                expectedScore: 10
            },
            {
                bowls: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 5, 1],
                expectedScore: 11
            },
            {
                bowls: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 5, 10],
                expectedScore: 20
            },
            {
                bowls: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 0, 0],
                expectedScore: 10
            },
            {
                bowls: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 1, 1],
                expectedScore: 12
            },
            {
                bowls: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 4, 6],
                expectedScore: 20
            },
            {
                bowls: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 10],
                expectedScore: 30
            },
            {
                bowls: [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
                expectedScore: 300
            }
        ];
        testCases.forEach(function (testCase) {
            it('keeps the correct score for bowls ' + testCase.bowls.toString(), function () {
                testCase.bowls.forEach(function (score) {
                    game.bowl(score);
                });
                expect(game.score()).toEqual(testCase.expectedScore);
            });
        });
    });

    describe('game over', function () {
        it('cannot bowl after game has ended', function () {
            var bowlAfterGameOver = function () {
                for (var i = 0; i < 22; i++) {
                    game.bowl(0);
                };
            }
            expect(bowlAfterGameOver).toThrowError("Game is over");
        });
    });
});