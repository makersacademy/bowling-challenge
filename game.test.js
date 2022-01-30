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

describe('Multiple Frame Scores', () => {
    it('returns the correct score across frames', () => {
        const game = new BowlingGame();
        game.roll(6);
        game.roll(7);
        expect(game.calculateScore()).toBe(13);
    })

    it('returns the correct score across frames', () => {
        const game = new BowlingGame();
        game.roll(1);
        game.roll(9);
        game.roll(7);
        game.roll(2);
        expect(game.calculateScore()).toBe(19);
    })
})

