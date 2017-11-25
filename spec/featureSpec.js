'use strict';

describe('Feature Tests', function() {
    var game;

    var rollsA = [0, 5, 6, 2, 8, 0, 9, 0, 8, 0, 3, 3, 9, 0, 1, 6, 5, 1, 8, 0];
    var rollsB = [7, 2, 3, 3, 5, 5, 6, 0, 6, 1, 4, 5, 5, 3, 1, 6, 9, 1, 8, 0];
    var rollsC = [10, 5, 1, 9, 1, 7, 3, 10, 10, 9, 1, 10, 10, 10, 10, 9];
    var rollsD = [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10];
    var rollsE = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    
    var resultA = 74;
    var resultB = 94;
    var resultC = 217;
    var resultD = 300;
    var resultE = 0;

    beforeEach(function () {
        game = new Game();
    });

    describe('Correctly computes totals', function() {
        it('returns correct score of 74 for Rolls A: [' + rollsA + ']', function() {
            game.compute(rollsA);
            expect(game.total).toBe(resultA);
        });

        it('returns correct score of 94 for Rolls B: [' + rollsB + ']', function() {
            game.compute(rollsB);
            expect(game.total).toBe(resultB);
        });

        it('returns correct score of 217 for Rolls C: [' + rollsC + ']', function() {
            game.compute(rollsC);
            expect(game.total).toBe(resultC);
        });

        it('returns correct score of 300 for Rolls D: [' + rollsD + ']', function() {
            game.compute(rollsD);
            expect(game.total).toBe(resultD);
        });

        it('returns correct score of 0 for Rolls E: [' + rollsE + ']', function() {
            game.compute(rollsE);
            expect(game.total).toBe(resultE);
        });
    });

    describe('Recognizes invalid inputs', function() {
        it('Returns invalid input for adultered Rolls A', function() {
            rollsA[6] = 11;
            expect(game.compute(rollsA)).toBe('Invalid input');
        });

        it('Returns invalid input for adultered Rolls B', function() {
            rollsB[0] = 9;
            expect(game.compute(rollsA)).toBe('Invalid input');
        });

        it('Returns invalid input for adultered Rolls C', function() {
            rollsC.pop();
            expect(game.compute(rollsC)).toBe('Invalid input');
        });

        it('Returns invalid input for adultered Rolls D', function() {
            rollsD.push(10);
            expect(game.compute(rollsD)).toBe('Invalid input');
        });

        it('Returns invalid input for adultered Rolls E', function() {
            rollsE[5] = 'k';
            expect(game.compute(rollsE)).toBe('Invalid input');
        });

        it('Returns invalid input for empty array', function() {
            expect(game.compute([])).toBe('Invalid input');
        });

        it('Returns invalid input for wrong type of input', function() {
            expect(game.compute('72335560614553169180')).toBe('Invalid input');
        });
    });
});

