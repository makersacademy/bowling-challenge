const { TestScheduler } = require("jest")

const Game = require('../lib/game');

describe('Game class', () => {
    var game = new Game();
    test('it starts at frame 1 with 10 pins', () => {
        expect(game.pins).toEqual(10);
        expect(game.frame).toEqual(1);
    });
});

describe('roll()', () => {
    var game = new Game();
    const roll = game.roll();
    test('it returns a number between 0 and 10 pins', () => {
        expect(roll).toBeGreaterThanOrEqual(0);
        expect(roll).toBeLessThanOrEqual(10);
    });
    test('it descreased the number of pins by the returned number', () => {
        expect(game.pins).toEqual(10 - roll);
    });
});
