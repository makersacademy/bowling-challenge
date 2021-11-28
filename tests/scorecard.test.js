const Scorecard = require('../services/scorecard');
const Frame = require('../services/frame');

describe ('scorecard class', () => {
    // it ('scores all 10 frames plus bonuses', () => {
    it ('accepts up to 2 balls per frame', () => {
        const scorecard = new Scorecard();
        scorecard.processFrame();
        const frame = new Frame();
        frame.roll1(0);
        frame.roll2(3);
        expect(scorecard.game_record).toEqual([0,3]);
        // expect(scorecard.frameCount).toBe(2);
    });
});
