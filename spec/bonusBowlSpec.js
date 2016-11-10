var BonusBowl = require('../lib/BonusBowl.js');

describe('BonusBowl', function () {
    var bonusBowl;

    beforeEach(function () {
        bonusBowl = new BonusBowl();
    });

    describe('initialization', function () {
        it('has a total score starting at zero', function () {
            expect(bonusBowl.firstBowl).toEqual(0);
            expect(bonusBowl.totalScore()).toEqual(0);
        });
    });

    describe('keeping score', function () {
        it('takes a given score for a bonus bowl', function () {
            bonusBowl.bowl(5);
            expect(bonusBowl.firstBowl).toEqual(5);
            expect(bonusBowl.totalScore()).toEqual(5);
        });
        it('cannot take more than one bowl score', function () {
            var bowlMoreThanOnce = function () {
                bonusBowl.bowl(5);
                bonusBowl.bowl(3);
            };
            expect(bowlMoreThanOnce).toThrowError("Bonus bowl already complete");
        });
    });

    describe('strike', function () {
        it('reports it is not a strike when first bowl score is not 10', function () {
            bonusBowl.bowl(0);
            expect(bonusBowl.isAStrike()).toBe(false);
        });
        it('reports it is a strike when first bowl score is 10', function () {
            bonusBowl.bowl(10);
            expect(bonusBowl.isAStrike()).toBe(true);
        });
    });

    describe('invalid scores', function () {
        var invalidScores = [11, -1, "10", 1.5, true, {}, [10], undefined]
        invalidScores.forEach(function (score) {
            it('only accepts integer scores between 0 and 10 inclusive', function () {
                var invalidScore = function () {
                    return bonusBowl.bowl(score);
                };
                expect(invalidScore).toThrowError("Score must be an integer 0-10");
            });
        });
    });

    describe('completion', function () {
        it('reports bonus bowl is not complete before bowling', function () {
            expect(bonusBowl.isComplete()).toBe(false);
        });
        it('reports bonus bowl is complete after bowling', function () {
            bonusBowl.bowl(5);
            expect(bonusBowl.isComplete()).toBe(true);
        });
    });
});