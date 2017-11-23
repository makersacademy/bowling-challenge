'use strict'

describe('Score', function() {
    var score;
    var a = [0, 5, 6, 2, 8, 0, 9, 0, 8, 0, 3, 3, 9, 0, 1, 6, 5, 1, 8, 0];
    var b = [7, 2, 3, 3, 5, 5, 6, 0, 6, 1, 4, 5, 5, 3, 1, 6, 9, 1, 8, 0];
    var c = [10, 5, 1, 9, 1, 7, 3, 10, 10, 9, 1, 10, 10, 10, 10, 9];
    var d = [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10];
    var e = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    var resultA = 74;
    var resultB = 94;
    var resultC = 217;
    var resultD = 300;
    var resultE = 0;

    describe('Feature Tests', function() {
        it('returns correct score for a', function() {
            score = new Score(a);
            score._plays(score._rolls)
            console.log(score.total())
            expect(score.total()).toBe(resultA);
        });

        it('returns correct score for b', function() {
            score = new Score(b);
            score._plays(score._rolls)
            console.log(score.total())
            expect(score.total()).toBe(resultB);
        });

        it('returns correct score for c', function() {
            score = new Score(c);
            score._plays(score._rolls)
            console.log(score.total())
            expect(score.total()).toBe(resultC);
        });

        it('returns correct score for d', function() {
            score = new Score(d);
            score._plays(score._rolls)
            console.log(score.total())
            expect(score.total()).toBe(resultD);
        });

        it('returns correct score for e', function() {
            score = new Score(e);
            score._plays(score._rolls)
            console.log(score.total())
            expect(score.total()).toBe(resultE);
        });

    });
});

