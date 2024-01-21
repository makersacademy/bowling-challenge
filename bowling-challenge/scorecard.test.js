const Scorecard = require("./scorecard")
describe('Scorecard', () => {

    it('returns an empty array when no rolls have been made', () => {
        const scorecard = new Scorecard();
        expect(scorecard.getRecord).toEqual([]);
    })

    it('records the score when one frame is rolled', () => {
        const scorecard = new Scorecard();
        scorecard.frame(4, 2);

        expect(scorecard.getRecord).toEqual([[4, 2]]);
    })

    it('records the score when all 10 frames are played', () => {
        const scorecard = new Scorecard();
        scorecard.frame(1, 1);
        scorecard.frame(2, 2);
        scorecard.frame(3, 3);
        scorecard.frame(4, 4);
        scorecard.frame(5, 5);
        scorecard.frame(6, 6);
        scorecard.frame(7, 7);
        scorecard.frame(8, 8);
        scorecard.frame(9, 9);
        scorecard.frame(0, 0);

        expect(scorecard.getRecord).toEqual([
            [1, 1],
            [2, 2],
            [3, 3],
            [4, 4],
            [5, 5],
            [6, 6],
            [7, 7],
            [8, 8],
            [9, 9],
            [0, 0]
        ]);
    });

    test('When a game is complete the total is tallied', () => {
        const scorecard = new Scorecard();
        for (let i = 0; i < 10; i++) {
            scorecard.frame(1, 1);
        }

        expect(scorecard.calculateScore()).toBe(20);
    })

    test('Gutter game', () => {
        const scorecard = new Scorecard();
        for (let i = 0; i < 10; i++) {
            scorecard.frame(0, 0);
        }

        expect(scorecard.calculateScore()).toBe(0);
    })

    test('When a strike is rolled the second roll is skipped', () => {
        const scorecard = new Scorecard();
        scorecard.frame('X');
        expect(scorecard.getRecord).toEqual([['X']]);
    })

    test('When a frame rolled after a strike the record is updated', () => {
        const scorecard = new Scorecard();
        scorecard.frame('X');
        scorecard.frame(2, 2);
        expect(scorecard.getRecord).toEqual([['X'], [2, 2]]);
    })

    test('When a game is complete and contains a strike the total includes the strike', () => {
        const scorecard = new Scorecard();
        for (let i = 0; i < 9; i++) {
            scorecard.frame(1, 1);
        };
        scorecard.frame('X', 0);
        expect(scorecard.calculateScore()).toBe(28);
    })

    test('When a game is complete and contains a spare the total is includes the spare', () => {
        const scorecard = new Scorecard();
        for (let i = 0; i < 9; i++) {
            scorecard.frame(1, 1);
        };
        scorecard.frame(2, '/');
        expect(scorecard.calculateScore()).toBe(28);
    })


    test('When on the tenth frame, an adddtional roll is possible (spare)', () => {
        const scorecard = new Scorecard();
        for (let i = 0; i < 9; i++) {
            scorecard.frame(1, 1);
        };
        scorecard.frame(3, '/', 5);
        expect(scorecard.calculateScore()).toBe(33);
    })

    test('When on the tenth frame, an adddtional roll is possible (strike)', () => {
        const scorecard = new Scorecard();
        for (let i = 0; i < 9; i++) {
            scorecard.frame(1, 1);
        };
        scorecard.frame('X', 3, 5);
        expect(scorecard.calculateScore()).toBe(36);
    })

    test('When a strike is made the bonus is add to the next roll', () => {
        const scorecard = new Scorecard();
        scorecard.frame('X');
        scorecard.frame(2, 3);
        expect(scorecard.calculateScore()).toBe(20);
    })

    test('When a spare is made the bonus is add to the next roll', () => {
        const scorecard = new Scorecard();
        scorecard.frame(3, '/');
        scorecard.frame(2, 3);
        expect(scorecard.calculateScore()).toBe(17);
    })

    test('When the score is calculated multiple times the correct score is returned', () => {
        const scorecard = new Scorecard();
        for (let i = 0; i < 3; i++) {
            scorecard.frame(1, 1);
        };
        expect(scorecard.calculateScore()).toBe(6)
        for (let i = 0; i < 3; i++) {
            scorecard.frame(1, 2);
        };
        expect(scorecard.calculateScore()).toBe(15)
        for (let i = 0; i < 3; i++) {
            scorecard.frame(2, 2);
        };
        scorecard.frame(3, 3);
        expect(scorecard.calculateScore()).toBe(33);
    })

    test('A complete game with strikes and spares', () => {
        const scorecard = new Scorecard();
        scorecard.frame(1, 1);
        scorecard.frame(2, '/');
        scorecard.frame(3, 3);
        scorecard.frame(4, 4);
        scorecard.frame(5, 4);
        scorecard.frame('X');
        scorecard.frame(7, 2);
        scorecard.frame(8, 1);
        scorecard.frame(9, '/');
        scorecard.frame(0, 0);
        expect(scorecard.calculateScore()).toBe(85);
    })

    test('A complete game with strikes in a row', () => {
        const scorecard = new Scorecard();
        scorecard.frame(1, 1);
        scorecard.frame(2, '/');
        scorecard.frame(3, 3);
        scorecard.frame(4, 4);
        scorecard.frame('X');
        scorecard.frame('X');
        scorecard.frame(7, 2);
        scorecard.frame(8, 1);
        scorecard.frame(9, '/');
        scorecard.frame(0, 0);
        expect(scorecard.calculateScore()).toBe(103);
    })

    test('Perfect game', () => {
        const scorecard = new Scorecard();
        for (let i = 0; i < 9; i++) {
            scorecard.frame('X');
        }
        scorecard.frame('X', 'X', 'X');
        expect(scorecard.calculateScore()).toBe(300);
    })

    test('for multiple spares (case 1)', () => {
        const scorecard = new Scorecard();
        for (let i = 0; i < 9; i++) {
            scorecard.frame(1, '/');
        }
        scorecard.frame(1, '/', 'X');
        expect(scorecard.calculateScore()).toBe(119);
    })

    test('for multiple spares (case 2)', () => {
        const scorecard = new Scorecard();
        for (let i = 0; i < 9; i++) {
            scorecard.frame(1, '/');
        }
        scorecard.frame('X', 3, '/');
        expect(scorecard.calculateScore()).toBe(128);
    })

    test('for multiple spares (case 3)', () => {
        const scorecard = new Scorecard();
        for (let i = 0; i < 9; i++) {
            scorecard.frame(1, '/');
            console.log(scorecard.calculateScore());
        }
        scorecard.frame('X', 'X', 4);
        expect(scorecard.calculateScore()).toBe(132);
    })

    test('for multiple strikes (case 1)', () => {
        const scorecard = new Scorecard();
        for (let i = 0; i < 9; i++) {
            scorecard.frame('X');
            console.log(scorecard.calculateScore());
        }
        scorecard.frame('X', 'X', 4);
        expect(scorecard.calculateScore()).toBe(294);
    })

    test('for multiple strikes (case 2)', () => {
        const scorecard = new Scorecard();
        for (let i = 0; i < 9; i++) {
            scorecard.frame('X');
            console.log(scorecard.calculateScore());
        }
        scorecard.frame('X', 4, '/');
        expect(scorecard.calculateScore()).toBe(284);
    })

    test('for multiple strikes (case 3)', () => {
        const scorecard = new Scorecard();
        for (let i = 0; i < 9; i++) {
            scorecard.frame('X');
            console.log(scorecard.calculateScore());
        }
        scorecard.frame(4, '/', 'X')
        expect(scorecard.calculateScore()).toBe(274);
    })

    test('for multiple strikes (case 4)', () => {
        const scorecard = new Scorecard();
        for (let i = 0; i < 9; i++) {
            scorecard.frame('X');
            console.log(scorecard.calculateScore());
        }
        scorecard.frame('X', 3, 3);
        expect(scorecard.calculateScore()).toBe(279);
    })

})