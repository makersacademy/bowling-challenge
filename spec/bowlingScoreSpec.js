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

    it('handles game with gratuitous strikes/spares and spare in frame 10', () => {
        let game = [
            [10, 0],
            [3, 7],
            [4, 4],
            [7, 2],
            [5, 2],
            [10, 0],
            [10, 0],
            [2, 2],
            [4, 5],
            [7, 3, 9]
        ]
        expect(bowlingScore(game)).toEqual(125)
    })
})