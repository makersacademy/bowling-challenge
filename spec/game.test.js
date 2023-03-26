const Game = require ('../lib/game');

describe ('Game.', () => {
    it ('Returns score board with zero points.', () => {
        game1 = new Game();
        expect(game1.score()).toEqual (NaN);
    })

    it ('Returns roll value.', () => {
        game1 = new Game();
        game1.roll(6);
        expect(game1.roll(6)).toEqual (6);
    })

    it ('Returns score board after two rolls.', () => {
        game1 = new Game();
        game1.roll(6);
        game1.roll(4);
        expect(game1.score()).toEqual (10);
    })

    it ('Fails when first roll is incorrect.', () => {
        game1 = new Game();
        expect(() => {game1.roll(12); }).toThrow ('Incorrect roll. Try again!');
    })

    it ('Fails when first roll is incorrect.', () => {
        game1 = new Game();
        expect(() => {game1.roll(-2); }).toThrow ('Incorrect roll. Try again!');
    })

});