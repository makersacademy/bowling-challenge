const BowlingScoreSheet = require('../lib/bowlingScoreSheet');

describe('BowlingScoreSheet', () =>{
    it('initially returns an empty array of frames',()=>{
        scoreSheet = new BowlingScoreSheet();
        expect(scoreSheet.all()).toEqual([]);
    });
});