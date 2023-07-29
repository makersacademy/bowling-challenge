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
    });

});
