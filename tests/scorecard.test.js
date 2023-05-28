const Scorecard = require('../lib/scorecard');

describe('Scorecard', () => {
    it('adds the scores when no bonus points', () => {
        let scorecard = new Scorecard()

        expect(scorecard.calculateScore()).toEqual(0)
        scorecard.addFrame(2, 5)
        scorecard.addFrame(3, 5)
        expect(scorecard.calculateScore()).toEqual(15)
        
    })

    it('adds bonus points when strike', () => {
        let scorecard = new Scorecard()

        expect(scorecard.calculateScore()).toEqual(0)
        scorecard.addFrame(10, 0)
        scorecard.addFrame(2, 2)
        expect(scorecard.calculateScore()).toEqual(18)
        
    })

    it('adds bonus points when strike', () => {
        let scorecard = new Scorecard()

        expect(scorecard.calculateScore()).toEqual(0)
        scorecard.addFrame(10, 0)
        scorecard.addFrame(10, 0)
        scorecard.addFrame(2, 2)
        expect(scorecard.calculateScore()).toEqual(40)
        
    })

    it('adds bonus points when strike', () => {
        let scorecard = new Scorecard()

        expect(scorecard.calculateScore()).toEqual(0)
        scorecard.addFrame(2, 2)
        scorecard.addFrame(2, 2)
        scorecard.addFrame(2, 2)
        scorecard.addFrame(2, 2)
        scorecard.addFrame(2, 2)
        scorecard.addFrame(2, 2)
        scorecard.addFrame(2, 2)
        scorecard.addFrame(2, 2)
        scorecard.addFrame(2, 2)
        scorecard.addFrame(2, 2)
        expect(scorecard.calculateScore()).toEqual(40)
        
    })
    
    it('adds bonus points for spare', () => {
        let scorecard = new Scorecard()

        expect(scorecard.calculateScore()).toEqual(0)
        scorecard.addFrame(1, 9)
        scorecard.addFrame(1, 3)
        expect(scorecard.calculateScore()).toEqual(15)
        
    })

    xit('allows bonus points for srike on final frame', () => {
        let scorecard = new Scorecard()

        expect(scorecard.calculateScore()).toEqual(0)
        scorecard.addFrame(10, 0)
        scorecard.addFrame(10, 0)
        scorecard.addFrame(10, 0)
        scorecard.addFrame(10, 0)
        scorecard.addFrame(10, 0)
        scorecard.addFrame(10, 0)
        scorecard.addFrame(10, 0)
        scorecard.addFrame(10, 0)
        scorecard.addFrame(10, 0)
        // scorecard.addFrame(10, 0)
        scorecard.addFrame(5, 5)
        
        expect(scorecard.calculateScore()).toEqual(300)
        
    })

})

