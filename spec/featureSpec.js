'use strict'

describe('Feature', function() {
    var score;

    var rollsA = [0, 5, 6, 2, 8, 0, 9, 0, 8, 0, 3, 3, 9, 0, 1, 6, 5, 1, 8, 0];
    var rollsB = [7, 2, 3, 3, 5, 5, 6, 0, 6, 1, 4, 5, 5, 3, 1, 6, 9, 1, 8, 0];
    var rollsC = [10, 5, 1, 9, 1, 7, 3, 10, 10, 9, 1, 10, 10, 10, 10, 9];
    var rollsD = [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10];
    var rollsE = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    
    var resultA = 74;
    var resultB = 94;
    var resultC = 217;
    var resultD = 300;
    var resultE = 0;

    describe('Feature Tests', function() {
        it('returns correct score of 74 for [' + rollsA + ']', function() {
            score = new Score();
            score.plays(rollsA);
            expect(last(score._frames).accumulatedScore).toBe(resultA);
        });

        it('returns correct score of 94 for [' + rollsB + ']', function() {
            score = new Score();
            score.plays(rollsB);
            expect(last(score._frames).accumulatedScore).toBe(resultB);
        });

        it('returns correct score of 217 for [' + rollsC + ']', function() {
            score = new Score();
            score.plays(rollsC);
            expect(last(score._frames).accumulatedScore).toBe(resultC);
        });

        it('returns correct score of 300 for [' + rollsD + ']', function() {
            score = new Score();
            score.plays(rollsD);
            expect(last(score._frames).accumulatedScore).toBe(resultD);
        });

        it('returns correct score of 0 for [' + rollsE + ']', function() {
            score = new Score();
            score.plays(rollsE);
            expect(last(score._frames).accumulatedScore).toBe(resultE);
        });
    });
});

