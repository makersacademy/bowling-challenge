const { TestScheduler } = require("jest");

const Game = require('../lib/game');

describe('Game class', () => {
    var game = new Game();
    test('it starts with 10 pins at first frame', () => {
        expect(game.pins).toEqual(10);
        expect(game.frames.length).toEqual(0);
    });
});

describe('roll()', () => {
    var game = new Game();
    const roll = game.roll();
    test('it returns a number between 0 and 10 pins', () => {
        expect(roll).toBeGreaterThanOrEqual(0);
        expect(roll).toBeLessThanOrEqual(10);
    });
    test('it adds the knocked down pins to the frame', () => {
        expect(game.frames[0]).toEqual([10 - roll]);
    });
});
