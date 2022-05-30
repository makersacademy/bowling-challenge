const Game = require('./game')

describe('Game', () => {
    it('adds frame_score to the tally if frame_score less than 10', () => {
        let game = new Game();
        game.roll(8)
        game.roll(1)
        expect(game.all_rolls).toEqual([[8, 1]])
    })

    it('it adds a strike to the all_rolls array in its own index', () => {
        let game = new Game();
        game.roll(10)
        game.roll(8)
        game.roll(1)
        expect(game.all_rolls).toEqual([[10], [8, 1]])
    })

    it('adds to the score if a frame is not a strike or a spare', () => {
        let game = new Game();
        game.roll(9)
        game.roll(0)
        expect(game.all_rolls).toEqual([[9, 0]])
        expect(game.score).toEqual(9)
    })

    it('registers the game as complete if ten frames have been bowled', () => {
        let game = new Game(); 
        for (let i = 0; i < 10; i++) {
            game.roll(10)
            }
            expect(game.all_rolls.length).toEqual(10)
            expect(game.game_over()).toEqual(true)
    })

    it('returns a score if game is complete', () => {
        let game = new Game(); 
        for (let i = 0; i < 10; i++) {
            game.roll(10)
            }
        expect(game.score).toEqual(300)
    })
})

