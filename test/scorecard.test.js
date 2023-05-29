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

    it('calculates score : one strike, two frames', () => {
        const score = new Scorecard ();
        score.addFrame(10,0);
        score.addFrame(6,1);
        expect(score.calculateScore()).toBe(24);
    });

    it('calculates score : two strike, three frames', () => {
        const score = new Scorecard ();
        score.addFrame(10,0);
        score.addFrame(10,0);
        score.addFrame(6,1);
        expect(score.calculateScore()).toBe(50);
    });

    it('calculates score : all frames', () => {
        const score = new Scorecard ();
        score.addFrame(10,0);
        score.addFrame(10,0);
        score.addFrame(6,1);
        score.addFrame(9,1);
        score.addFrame(9,0);
        score.addFrame(7,2);
        score.addFrame(3,5);
        score.addFrame(10,0);
        score.addFrame(9,1);
        score.addFrame10(9,1,10);

        expect(score.calculateScore()).toBe(154);
    });

    it('calculates score : all frames, perfect score', () => {
        const score = new Scorecard ();
        score.addFrame(10,0);
        score.addFrame(10,0);
        score.addFrame(10,0);
        score.addFrame(10,0);
        score.addFrame(10,0);
        score.addFrame(10,0);
        score.addFrame(10,0);
        score.addFrame(10,0);
        score.addFrame(10,0);
        score.addFrame10(10,10,10);
        expect(score.calculateScore()).toBe(300);
    });

});