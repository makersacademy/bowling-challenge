const Game = require('./game')

describe('Game', () => {
    it('adds frame_score to the tally if frame_score less than 10', () => {
        let game = new Game();
        game.roll(8)
        game.roll(1)
        expect(game.all_rolls).toEqual([[8, 1]])
    })
})

