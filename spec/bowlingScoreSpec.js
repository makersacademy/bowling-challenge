describe('BowlingScore', () => {
    const BowlingScore = require('../models/bowlingScore')

    let gutterball = [
        '00',
        '00',
        '00',
        '00',
        '00',
        '00',
        '00',
        '00',
        '00',
        '00'
    ]

    beforeEach(() => {
        let bowlingScore = new BowlingScore
    })

    it('returns zero when given a gutterball game', () => {
        expect(bowlingScore.calculate(gutterball)).toEqual(0)
    })

})