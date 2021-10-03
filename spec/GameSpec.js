describe("BowlingScorecard", function () {
  beforeEach(function () {
    game = new Game();
  });

  it("Sums 1 score", function () {
    expect(
      game.score([
        [1, 0],
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0],
      ])
    ).toBe(1);
  });

  it("Sums 2 scores", function () {
    expect(
      game.score([
        [1, 1],
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0],
      ])
    ).toBe(2);
    console.log(game);
  });

  it("Sums 3 scores from 2 frames", function () {
    expect(
      game.score([
        [1, 1],
        [1, 0],
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0],
      ])
    ).toBe(3);
  });

  it("Sums a full game with 10 frames", function () {
    expect(
      game.score([
        [1, 1],
        [1, 1],
        [1, 1],
        [1, 1],
        [1, 1],
        [1, 1],
        [1, 1],
        [1, 1],
        [1, 1],
        [1, 1],
      ])
    ).toBe(20);
  });

  it("sums a strike", function () {
    expect(
      game.score([
        [10],
        [1, 1],
        [1, 1],
        [1, 1],
        [1, 1],
        [1, 1],
        [1, 1],
        [1, 1],
        [1, 1],
        [1, 1],
      ])
    ).toBe(30);
  });

  it("2 consecutive strikes", function () {
    expect(
      game.score([
        [10],
        [10],
        [1, 1],
        [1, 1],
        [1, 1],
        [1, 1],
        [1, 1],
        [1, 1],
        [1, 1],
        [1, 1],
      ])
    ).toBe(49);
  });

  it("3 consecutive strikes", function () {
    expect(
      game.score([
        [10],
        [10],
        [10],
        [1, 1],
        [1, 1],
        [1, 1],
        [1, 1],
        [1, 1],
        [1, 1],
        [1, 1],
      ])
    ).toBe(77);
  });

  it("sums a spare", function () {
    expect(
      game.score([
        [1, 9],
        [1, 1],
        [1, 1],
        [1, 1],
        [1, 1],
        [1, 1],
        [1, 1],
        [1, 1],
        [1, 1],
        [1, 1],
      ])
    ).toBe(29);
  });

  it("handles 10th game", function () {
    expect(
      game.score([
        [1, 1],
        [1, 1],
        [1, 1],
        [1, 1],
        [1, 1],
        [1, 1],
        [1, 1],
        [1, 1],
        [10],
        [10, 10, 10],
      ])
    ).toBe(76);
  });

  it("handles 10th game", function () {
    expect(
      game.score([
        [10],
        [10],
        [10],
        [10],
        [10],
        [10],
        [10],
        [10],
        [10],
        [10, 10, 10],
      ])
    ).toBe(300);
  });

  it("handles 10th game", function () {
    expect(
      game.score([
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0],
      ])
    ).toBe(0);
  });

  it("edge", function () {
    expect(
      game.score([
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0],
        [10, 0, 0],
      ])
    ).toBe(10);
  });

  // To be refactored into input error messages
  // it("Sums 1 score", function () {
  //   expect(game.score([[1]])).toBe(1);
  // });

  // it("Sums 2 scores", function () {
  //   expect(game.score([[1, 1]])).toBe(2);
  // });

  // it("Sums 3 scores from 2 frames", function () {
  //   expect(game.score([[1, 1], [1]])).toBe(3);
  // });
});
