const Frame = require('./game.js')

describe('Game', () => {
    it ('#total', () => {
        const game = new Game();
        const mockFrame_1 = { getSum: () => 5};
        const mockFrame_2 = { getSum: () => 8};
        game.add(mockFrame_1);
        game.add(mockFrame_2);

    expect(game.forFrame(1)).toBe(5);
    expect(game.forFrame(2)).toBe(8);
    });
});