const BowlingGame = require('./game');

describe('calculates the score for single frame', () => {
    it('returns the correct score for one frame', () => {
        const game = new BowlingGame();
        game.roll(7);
        expect(game.rolls).toContain(7);
    })
})

describe('Gutter Game - all 10 frames as 0', () => {
    it('returns 0 for entire game', () => {
        const game = new BowlingGame();
        for (let i = 0; i<10; i++) {
        game.roll(0);
        }
        expect(game.calculateScore()).toBe(0);
    })
})