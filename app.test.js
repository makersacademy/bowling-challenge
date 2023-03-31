const Frame = require('./frame.js');
const Game = require('./game.js');

describe('game', () => {
    let game;
    beforeEach(() => {
        game = new Game();
    });

    it ('adds a frame to the game', () => {
        game.add(1);
        expect(game.frames).toEqual([1]);
    });
    xit ('adds a score to the game', () => {
        game.scores(1, 2);
        expect(game.scores).toEqual([{frame: 1, score1: 1, score2: 2}]);
    });

    it ('adds a frame to the game', () => {
        game.add(2);
        expect(game.frames).toEqual([2]);
    });
});

// Path: frame.js

