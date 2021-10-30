const Game = require('./game')

beforeEach(() => {
  game = new Game();

  multiRoll = (rolls, pins) => {
    for(let i = 0; i < rolls; i++){
      game.roll(pins);
    };
  };
})

describe('rolls and scores', () => {
  it('can handle a gutter game', () => {
    multiRoll(20, 0)
    expect(game.score).toEqual(0)
  });

  it("a full game of ones should return 20", () => {
    multiRoll(20, 1)
    expect(game.score).toEqual(20);
  });

  it("handles a spare frame", () => {
    game.roll(4);
    game.roll(6);
    game.roll(6);
    multiRoll(17, 0);
    expect(game.score).toEqual(22);
  });

  it("handles a strike", () => {
    game.roll(10);
    game.roll(4);
    game.roll(3);
    multiRoll(17, 0);
    expect(game.score).toEqual(24);
  })

  it("handles a perfect game", () => {
    multiRoll(12, 10)
    expect(game.score).toEqual(300)
  })
})