const BowlingGame = require('./BowlingInJs');

let game;

beforeEach(() => {
    game = new BowlingGame();
});

it('Should return 0 for a game of all 0s', () => {
    rollMany(0,20);
    expect(game.score).toEqual(0);
});

it('Should return a score of 20 for a game of all ones', () => {
    rollMany(1,20);
    expect(game.score).toEqual(20);
});

it('Can score a game with a spare', () => {
    game.roll(5);
    game.roll(5);
    game.roll(5);
    rollMany(0,17);
    expect(game.score).toEqual(20);
});

it('Should be able to properly score a strike', () => {
    game.roll(10);
    game.roll(2);
    game.roll(2);
    rollMany(0,17);
    expect(game.score).toEqual(18);
});

it('Should return a erfect game', () => {
    rollMany(10,12);
    expect(game.score).toEqual(300);
})


function rollMany(pins, rolls) {
    for (let i = 0; i < rolls; i++) {
        game.roll(pins);
    };
};
