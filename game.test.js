const Game = require("./game");

describe("game", () => {
  beforeEach(() => {
    game = new Game();
  });

  it("should return 0 when player never hits a pin", () => {
    rollMultiple(0, 20);

    expect(game.calculateScore()).toBe(0);
  });

  it("should return 20 when player always rolls 1", () => {
    rollMultiple(1, 20);

    expect(game.calculateScore()).toBe(20);
  });

  it("should return 12 when player always rolls a spare and a 1", () => {
    game.roll(6);
    game.roll(4);
    game.roll(1);
    rollMultiple(0, 17);

    expect(game.calculateScore()).toBe(12);
  });

  it("should return 14 when player always rolls a strike and two 1s", () => {
    game.roll(10);
    game.roll(1);
    game.roll(1);
    rollMultiple(0, 16);

    expect(game.calculateScore()).toBe(14);
  });

  it("should correctly calculate a game with at least one spare and strike", () => {
    rolls = [8, 2, 3, 4, 5, 2, 10, 10, 6, 3, 2, 6, 7, 3, 2, 7, 5, 4];

    rollExactly(rolls);

    expect(game.calculateScore()).toBe(119);
  });

  // it("should return 300 when a strike is rolled every time", () => {
  //   rollMultiple(10, 20);

  //   expect(game.calculateScore()).toBe(300);
  // });
});

function rollMultiple(value, times) {
  for (let i = 0; i < times; i++) {
    game.roll(value);
  }
}

function rollExactly(array) {
  array.forEach((roll) => game.roll(roll));
}
