const Game = require("../src/game");

describe("Initializer", () => {
  let game;

  beforeEach(() => {
    game = new Game();
  });

  it("start at 10 pins", () => {
    expect(game.pins).toBe(10);
  });


});

describe("Pins", () => {
  let game;

  beforeEach(() => {
    game = new Game();
  });

  it("recorded score deducts number of pins", () => {
    game.record(3);
    expect(game.pins).toBe(7);
  });

  it("new frame resets pins", () => {
    game.record(4);
    game.record(6);
    expect(game.pins).toBe(10);
  });
});

describe("Frame", () => {
  let game;

  beforeEach(() => {
    game = new Game();
  });

  it("strike advances frame", () => {
    game.index = 4;
    game.record(10);
    expect(game.index).toBe(5);
  });

  it("frame advances after 2 balls", () => {
    game.index = 4;
    game.record(3);
    game.record(5);
    expect(game.index).toBe(5);
  });
});

describe("FrameScore", () => {
  let game;

  beforeEach(() => {
    game = new Game();
  });

  it("no spare / no strike score", () => {
    game.index = 3;
    game.record(4);
    game.record(3);

    game.index = 4;
    game.record(3);
    game.record(3);
    expect(game.score).toEqual([7,6]);
  });

  it('spare score', () => {
    game.index = 3;
    game.record(4);
    game.record(6);

    game.index = 4;
    game.record(3);
    game.record(3);
    expect(game.score).toEqual([13,3]);
  });
});
