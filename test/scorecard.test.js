const Scorecard = require('../src/scorecard');
let TestData = require('./TestData');

describe("Scorecard", () => {

    describe("addFrame Method:", () => {
        test('a single frame can be added to scorecard', () => {
            const scorecard = TestData.EMPTY_SCORECARD
            scorecard.addFrame([1, 3])

            expect(scorecard).toEqual({"frames": [[1, 3]]});
        });

        test('multiple frames can be added to scorecard', () => {
            const scorecard = new Scorecard(([[1,3]]))
            scorecard.addFrame([5, 5])

            expect(scorecard).toEqual({"frames": [[1, 3], [5, 5]]});
        });

        test('only ten frames can be added to a scorecard', () => {
            try {
                TestData.GUTTER_GAME.addFrame([0, 0]);
            } catch (error) {
                expect(error).toBeInstanceOf(Error);
                expect(error.message).toBe('You can only have ten frames on a scorecard');
            }
        });

        test('declines invalid frames', () => {
            try {
                TestData.EMPTY_SCORECARD.addFrame([10, 10]);
            } catch (error) {
                expect(error).toBeInstanceOf(Error);
                expect(error.message).toBe('Frame Invalid');
            }
        });
    });


    describe("total Method:", () => {
        test('calculate a gutter game', () => {
            const scorecard = TestData.GUTTER_GAME

            expect(scorecard.total()).toEqual(0);
        });

        test('calculate the score of a frame', () => {
            const scorecard = new Scorecard(([[1,3]]))

            expect(scorecard.total()).toEqual(4);
        });

        test('calculate the score with multiple frames and no bonus', () => {
            const scorecard = TestData.PARTIAL_GAME

            expect(scorecard.total()).toEqual(15);
        });

        test('calculate the score with a spare', () => {
            const scorecard = TestData.SPARE

            expect(scorecard.total()).toEqual(15);
        });

        test('calculate the score with a strike', () => {
            const scorecard = TestData.STRIKE

            expect(scorecard.total()).toEqual(25);
        });

        test('calculate the score with spares and strikes', () => {
            const scorecard = new Scorecard([[3,4],[5,5],[3,0],[10,0],[5,5],[1,2],[0,0],[5,0],[10,0],[5,0]])
            // 7 + 13 + 3 + 20 + 11 + 3 + 0 + 5 + 15 + 5 = 82

            expect(scorecard.total()).toEqual(82);
        });

        // double logic is incorrect
        test('calculates a game with doubles', () => {
            const scorecard = new Scorecard([[1,3],[10,0],[10,0],[3,6]])
            // 4 + 23 + 19 + 9 = 61

            expect(scorecard.total()).toEqual(55)
        });

        test('calculates a game with a turkey', () => {
            const scorecard = new Scorecard([[1,3],[10,0],[10,0],[10,0],[3,5]])
            // 4 + 30 + 28 + 18 + 8 = 88

            expect(scorecard.total()).toEqual(83)
        });

        test('calculates a game with a double and turkey', () => {
            const scorecard = new Scorecard([[1,3],[10,0],[10,0],[4,3],[10,0],[10,0],[10,0],[3,2],[10,0],[3,2]])

            expect(scorecard.total()).toEqual(145)
        });

        test('calculates a game with a double in second last frame', () => {
            const scorecard = new Scorecard([[1,3],[10,0],[10,0],[4,3],[10,0],[10,0],[10,0],[3,2],[10,0],[10,4,3]])
            // 4 + 24 + 17 + 7 + 30 + 23 + 15 + 5 + 24 + 17 = 166

            expect(scorecard.total()).toEqual(166)
        });

        test('calculates the perfect game', () => {
            const scorecard = new Scorecard([[10,0],[10,0],[10,0],[10,0],[10,0],[10,0],[10,0],[10,0],[10,0],[10,10,10]])
            // 4 + 27 + 17 + 7 + 25 + 15 + 5

            expect(scorecard.total()).toEqual(300)
        });

        // test comment
    });

});
