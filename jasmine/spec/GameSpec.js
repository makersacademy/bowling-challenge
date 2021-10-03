describe("Scorecard", function () {
  beforeEach(function () {
    game = new Game();
  });

  it("can total points from one ordinary frame", function () {
    expect(
      game.score([
        [1, 0]
      ])
    ).toBe(1);
  });
});