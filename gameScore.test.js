const bowlingGame = require('./gameScore');

const finalScore = new bowlingGame.FinalScore();

describe('Frame', () => {
    let frame;
    beforeEach(() => {
      frame = new bowlingGame.Frame();
    });

    it('returns pins scored after two rolls', () => {
        frame.addRoll(5);
        frame.addRoll(5);
        expect(frame.score()).toEqual ([5, 5]);
    });
});

describe('Game', () => {
    let game;
    beforeEach(() => {
      game = new bowlingGame.Game();
    });

    it('returns pins scored after two rolls', () => {
        game.roll(5);
        game.roll(5);
        expect(game.getScore()).toEqual ([[5, 5]]);
    });

    it('returns two arrays because of a strike', () => {
        game.roll(10);
        game.roll(10);
        expect(game.getScore()).toEqual ([[ 10 ], [ 10 ]]);
    });
});





