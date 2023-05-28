const Scorecard = require('../lib/scorecard');

describe('Scorecard', () => {
    it('adds the scores when no bonus points', () => {
        let scorecard = new Scorecard()

        expect(scorecard.calculateScore()).toEqual(0)
        scorecard.addFrame(2, 5)
        scorecard.addFrame(3, 5)
        expect(scorecard.calculateScore()).toEqual(15)
        
    })

    it('adds next two rolls to first frame when strike', () => {
        let scorecard = new Scorecard()

        expect(scorecard.calculateScore()).toEqual(0)
        scorecard.addFrame(10, 0)
        scorecard.addFrame(2, 2)
        expect(scorecard.calculateScore()).toEqual(85)
        
    })
})

