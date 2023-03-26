const Game = require ('../../lib/game');

describe ('App.', () => {
    it ('Runs a perfect game.', () => {
        game1 = new Game();
        for (let i = 0; i < 10; i++) {
            game1.roll(10);
          }
          game1.roll(10);
          game1.roll(10);
        expect(game1.score()).toEqual (300);
    })

    it ('Runs a non-perfect game (scores 166).', () => {
        game1 = new Game();
        game1.roll(10); // frame 1
        game1.roll(8); 
        game1.roll(2); // frame 2
        game1.roll(10); // frame 3
        game1.roll(7);
        game1.roll(2); // frame 4
        game1.roll(10); // frame 5
        game1.roll(10); // frame 6
        game1.roll(10); // frame 7
        game1.roll(2);
        game1.roll(7); // frame 8
        game1.roll(10); // frame 9
        game1.roll(7);
        game1.roll(2); // frame 10
        expect(game1.score()).toEqual (166);
    })

});