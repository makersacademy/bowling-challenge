describe('BowlingScore', () => {
    const bowlingScore = require('../models/bowlingScore')
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

    it('returns zero when given a gutterball game', () => {
        expect(bowlingScore(gutterball)).toEqual(0)
    })

})