describe('BowlingScore', () => {
    const bowlingScore = require('../models/bowlingScore')
    
    it('returns zero when given a gutterball game', () => {
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

        expect(bowlingScore(gutterball)).toEqual(0)
    })

    it('correctly returns score with no modifiers', () => {
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

        expect(bowlingScore(noModifierGame)).toEqual(80)
    })

    it('handles basic spare logic', () => {
        let oneSpareGame = [
            [7, 3],
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
        expect(bowlingScore(oneSpareGame)).toEqual(86)
    })

    it('handles basic strike logic', () => {
        let oneStrikeGame = [
            [10, 0],
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
        expect(bowlingScore(oneStrikeGame)).toEqual(90)
    })

    it('handles perfect game', () => {
        let perfectGame = [
            [10, 0],
            [10, 0],
            [10, 0],
            [10, 0],
            [10, 0],
            [10, 0],
            [10, 0],
            [10, 0],
            [10, 0],
            [10, 10, 10]
        ]
        expect(bowlingScore(perfectGame)).toEqual(300)
    })
})