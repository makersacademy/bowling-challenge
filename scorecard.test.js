const Scorecard = require('./scorecard');

describe ('Scorecard', () => {
    it('Scorecard initializes with an empty array that holds the frames', () =>{
        scorecard = new Scorecard;
        expect(scorecard.scorecard).toEqual([]);
    })
})