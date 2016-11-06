var Game = require('../lib/Game.js');

describe('Game', function () {
    var game;
    beforeEach(function () {
        game = new Game();
        game.start();
    });
    describe('frames', function () {
        it('contains 10 frames', function () {
            expect(game.frames.length).toEqual(10);
        });
    });

    // describe('start', function() {
    //     it('increases frame count by 1', function() {
    //         expect(game.frames.length).toEqual(1);            
    //     });
    // });

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
                bowls: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                expectedScore: 0
            },
            {
                bowls: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,5],
                expectedScore: 10
            },
            {
                bowls: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,10],
                expectedScore: 10
            },
            {
                bowls: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,10,10],
                expectedScore: 30
            },
            {
                bowls: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,5,1],
                expectedScore: 11
            }
        ];
        testCases.forEach(function (testCase) {
            it('keeps the correct score for bowls', function () {
                testCase.bowls.forEach(function (score) {
                    game.bowl(score);
                });
                expect(game.score()).toEqual(testCase.expectedScore);
            });
        });
    });
});