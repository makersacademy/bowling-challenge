const { TestScheduler } = require("jest")

const Game = require('../lib/game');

describe('Game class', () => {
    var game = new Game();
    test('it starts at frame 1 with 10 pins', () => {
        expect(game.pins).toEqual(10);
        expect(game.frame).toEqual(1);
    })
})

describe('Roll', () => {
    var game = new Game();
    test('it returns a number between 0 and 10 pins', () => {
        expect(game.roll()).toBeGreaterThanOrEqual(0);
        expect(game.roll()).toBeLessThanOrEqual(10);
    })
})