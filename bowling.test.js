const Bowling = require("./bowling.js");

describe("Bowling", () => {
  beforeEach(() => {
    game = new Bowling();
  });
  const spare = {
    spare: () => {
      game.roll(4);
      game.roll(6);
      game.roll(7);
    },
  };
  const strike = {
    strike: () => {
      game.roll(10);
      game.roll(5);
      game.roll(3);
    },
  };
  it("should roll a gutter game", () => {
    for (let i = 0; i < 20; i++) {
      game.roll(0);
    }
    expect(game.score()).toBe(0);
  });

  it("should roll all ones", () => {
    for (let i = 0; i < 20; i++) {
      game.roll(1);
    }
    expect(game.score()).toBe(20);
  });

  it("should roll a spare", () => {
    spare.spare();
    for (let i = 0; i < 17; i++) {
      game.roll(0);
    }
    expect(game.score()).toBe(24);
  });

  it("should roll a strike", () => {
    strike.strike();
    for (let i = 0; i < 16; i++) {
      game.roll(0);
    }
    expect(game.score()).toBe(26);
  });

  it("should be able to play a perfect game", () => {
    for (let i = 0; i < 12; i++) {
      game.roll(10);
    }
    expect(game.score()).toBe(300);
  });

  it("should be able to play an all spares game", () => {
    for (let i = 0; i < 21; i++) {
      game.roll(5);
    }
    expect(game.score()).toBe(150);
  });
});
