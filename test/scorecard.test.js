//scorecard.test.js

const Scorecard = require('./scorecard');

describe('Scorecard', () => {
    //declare the variable scorecard that we'll use in the tests
    let scorecard;

    beforeEach(() => {
        //before each test, create a new scorecard
        scorecard = new Scorecard();
    });
    //test the addFrame method
    test('starts with a score of 0', () => {
        expect(scorecard.calculateScore()).toBe(0);
    });
    //test the calculateScore method
    test('adds a frame to the scorecard', () => {
        scorecard.addFrame(2, 5);
        expect(scorecard.calculateScore()).toBe(7);
    });
    //test the bonus for strikes and spares
    test('calculates the score for multiple frame', () => {
        scorecard.addFrame(2, 5);
        scorecard.addFrame(3, 5);
        expect(scorecard.calculateScore()).toBe(15);
    });
    //later adds test for the perfect game, 10th frame etc.,
});

module.exports = Scorecard;