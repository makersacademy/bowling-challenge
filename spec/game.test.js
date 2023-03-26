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

    it ('Returns score board after ten rolls.', () => {
        game1 = new Game();
        for (let i = 0; i < 10; i++) {
            game1.roll(10);
          }
          game1.roll(10);
          game1.roll(10);
        expect(game1.score()).toEqual (300);
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