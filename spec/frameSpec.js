var Frame = require('../lib/Frame.js');

describe('Frame', function () {
    var frame;

    beforeEach(function () {
        frame = new Frame();
    });

    describe('initialization', function () {
        it('total frame score starts at zero', function () {
            expect(frame.totalScore()).toEqual(0);
        });
    });

    describe('keeping score', function () {
        it('takes a score for first bowl', function () {
            frame.bowl(5);
            expect(frame.totalScore()).toEqual(5);
        });
        it('takes a score for second bowl', function () {
            frame.bowl(5);
            frame.bowl(3);
            expect(frame.totalScore()).toEqual(8);
        });
        it('cannot take more than two bowl scores', function () {
            var bowlMoreThanTwice = function () {
                frame.bowl(5);
                frame.bowl(3);
                frame.bowl(4);
            };
            expect(bowlMoreThanTwice).toThrowError("Frame already complete")
        });
    });

    describe('invalid scores', function () {
        var invalidScores = [11, -1, "10", 1.5, true, {}, [10], undefined]
        invalidScores.forEach(function (score) {
            it('only accepts integer scores between 0 and 10 inclusive', function () {
                var invalidScore = function () {
                    return frame.bowl(score);
                };
                expect(invalidScore).toThrowError("Score must be an integer 0-10");
            });
        });
        it('cannot bowl score greater than 10 in a single frame', function () {
            var invalidSecondBowl = function () {
                frame.bowl(9);
                frame.bowl(2);
            };
            expect(invalidSecondBowl).toThrowError("Invalid score");
        });
    });

    describe('strikes and spares', function () {
        it('reports it is not a strike at start of game', function () {
            expect(frame.isAStrike()).toBe(false);
        });
        it('reports it is not a spare at start of game', function () {
            expect(frame.isASpare()).toBe(false);
        });
        it('reports it is a strike when first bowl scores 10', function () {
            frame.bowl(10);
            expect(frame.isAStrike()).toBe(true);
            expect(frame.isASpare()).toBe(false);
        });
        it('reports it is a spare when total score after two bowls is 10', function () {
            frame.bowl(5);
            frame.bowl(5);
            expect(frame.isASpare()).toBe(true);
        });
        it('reports it is a spare when first bowl scores 0 and second bowl scores 10', function () {
            frame.bowl(0);
            frame.bowl(10);
            expect(frame.isASpare()).toBe(true);
        });
        it('cannot bowl twice when first bowl is a strike', function () {
            var bowlAfterStrike = function () {
                frame.bowl(10);
                frame.bowl(0);
            };
            expect(bowlAfterStrike).toThrowError("Frame already complete");
        });
    });

    describe('completion', function () {
        var testCases = [
            {
                bowls: [],
                expectIsComplete: false
            },
            {
                bowls: [5],
                expectIsComplete: false
            },
            {
                bowls: [5, 4],
                expectIsComplete: true
            },
            {
                bowls: [10],
                expectIsComplete: true
            },
            {
                bowls: [0, 10],
                expectIsComplete: true
            },
            {
                bowls: [0, 0],
                expectIsComplete: true
            }
        ];

        testCases.forEach(function (testCase) {
            it('reports whether the frame is completed', function () {
                testCase.bowls.forEach(function (score) {
                    frame.bowl(score);
                });
                expect(frame.isComplete()).toBe(testCase.expectIsComplete);
            });
        });
    });
});