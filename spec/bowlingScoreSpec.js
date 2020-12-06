describe('BowlingScore', () => {
    const bowlingScore = require('../models/bowlingScore')
    let gutterball = [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]
    ]

    let noModifierGame = [
        [4, 4],
        [4, 4],
        [4, 4],
        [4, 4],
        [4, 4],
        [4, 4],
        [4, 4],
        [4, 4],
        [4, 4],
        [4, 4]
    ]

    it('returns zero when given a gutterball game', () => {
        expect(bowlingScore(gutterball)).toEqual(0)
    })

    it('correctly returns score with no modifiers', () => {
        expect(bowlingScore(noModifierGame)).toEqual(80)
    })

})