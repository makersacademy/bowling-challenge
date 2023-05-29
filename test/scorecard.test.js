const Scorecard = require('../lib/scorecard');

describe('Scorecard', () => {
    it('adds the first score 2 and 5', () => {
        const score = new Scorecard ();
        score.addFrame(2,5);

        expect(score.calculateScore()).toBe(7);
    });

    it('adds the second score 3 and 5', () => {
        const score = new Scorecard ();
        score.addFrame(2,5);
        score.addFrame(3,5);
        expect(score.calculateScore()).toBe(15);
    });

    it('calculates score : one spare, two frames', () => {
        const score = new Scorecard ();
        score.addFrame(9,1);
        score.addFrame(6,2);
        expect(score.calculateScore()).toBe(24);
    });
});