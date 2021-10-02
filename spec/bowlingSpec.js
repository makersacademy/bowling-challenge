describe("Bowling Scorecard", () => {
  let game;
  let rollMany = function (pins, rolls) {
    for (let i = 0; i < rolls; i++) {
      game.roll(pins);
    }
  };

  beforeEach(() => {
    game = new Bowling();
  });

  it("can roll gutter ball", () => {
    rollMany(0, 20);
    expect(game.score()).toBe(0);
  });

  it("can roll all ones", () => {
    rollMany(1, 20);
    expect(game.score()).toBe(20);
  });
});
