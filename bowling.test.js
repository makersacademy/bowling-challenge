const BowlingScore = require('./bowling');

describe(BowlingScore, () => {
  it("returns 0 if Gutter Game", () => {
    const game = new BowlingScore(
      [[0,0], [0,0], [0,0], [0,0], [0,0], [0,0], [0,0], [0,0], [0,0], [0,0]]
    );
    expect(game.result()).toEqual(0);
  });

  it("returns correct score for a game with no spares or strikes", () => {
    const game = new BowlingScore(
      [[1,1], [1,1], [1,1], [1,1], [1,1], [1,1], [1,1], [1,1], [1,1], [1,1]]
    );
    expect(game.result()).toEqual(20);
  });

  it("returns correct score for game with one spare", () => {
    const game = new BowlingScore(
      [[1,1], [1,1], [1,1], [1,1], [5,5], [1,1], [1,1], [1,1], [1,1], [1,1]]
    );
    expect(game.result()).toEqual(29);
  });

  it("returns correct score for game with two spares" , () => {
    const game = new BowlingScore(
      [[1,1], [1,1], [1,1], [1,1], [5,5], [1,1], [1,1], [1,1], [3,7], [1,1]]
    );
    expect(game.result()).toEqual(38);
  });

  it("returns correct score for game with one strike, no spares" , () => {
    const game = new BowlingScore(
      [[1,1], [1,1], [1,1], [1,1], [1,1], [1,1], [1,1], [1,1], [10], [1,1]]
    );
    expect(game.result()).toEqual(30);
  });

  it("returns correct score for game with two strike, no spares", () => {
    const game = new BowlingScore(
      [[1,1], [1,1], [1,1], [1,1], [10], [1,1], [1,1], [1,1], [10], [1,1]]
    );
    expect(game.result()).toEqual(40);
  });

  it("returns correct score for game with two spares in a row, no strikes", () => {
    const game = new BowlingScore(
      [[5,5], [5,5], [1,1], [1,1], [1,1], [1,1], [1,1], [1,1], [1,1], [1,1]]
    );
    expect(game.result()).toEqual(42);
  });

  it("returns correct score for game with two strikes in a row, no spares", () => {
    const game = new BowlingScore(
      [[10], [10], [1,1], [1,1], [1,1], [1,1], [1,1], [1,1], [1,1], [1,1]]
    );
    expect(game.result()).toEqual(49);
  });

  it("returns correct result for a realistic game with a mixture of strikes, spares and neither", () => {
    const game = new BowlingScore(
      [[4,3], [5,5], [6,4], [10], [5,2], [10], [3,7], [4,6], [10], [4,2]]
    );
    expect(game.result()).toEqual(143);
  });

  it("returns correct result for a realistic game with a spare in the 10th frame", () => {
    const game = new BowlingScore(
      [[4,3], [5,5], [6,4], [10], [5,2], [10], [3,7], [4,6], [10], [4,6,3]]
    );
    expect(game.result()).toEqual(154);
  });

  it("returns correct result for a realistic game with a strike on the first roll of the 10th frame", () => {
    const game = new BowlingScore(
      [[4,3], [5,5], [6,4], [10], [5,2], [10], [3,7], [4,6], [10], [10,6,3]]
    );
    expect(game.result()).toEqual(166);
  });

  it("returns correct result for a realistic game with two strikes in the 10th frame", () => {
    const game = new BowlingScore(
      [[4,3], [5,5], [6,4], [10], [5,2], [10], [3,7], [4,6], [10], [10,10,3]]
    );
    expect(game.result()).toEqual(174);
  });

  it("returns a correct result for a realistic game with 0s and 3rd roll in 10th frame", () => {
    const game = new BowlingScore(
      [[4,3], [5,5], [6,0], [10], [5,2], [10], [3,0], [4,6], [10], [9,1,3]]
    );
    expect(game.result()).toEqual(122);
  });

  it("returns a perfect score for a perfect game", () => {
    const game = new BowlingScore(
      [[10], [10], [10], [10], [10], [10], [10], [10], [10], [10, 10, 10]]
    );
    expect(game.result()).toEqual(300);
  });

  it("returns a score for an incomplete game without a bonus scoring roll at the end", () => {
    const game = new BowlingScore(
      [[4,3], [5,5], [6,0], [10], [5,2]]
    )
    expect(game.result()).toEqual(53);
  });

  it("returns a score for an incomplete game with a strike at the end", () => {
    const game = new BowlingScore(
      [[4,3], [5,5], [6,0], [10], [5,2], [10]]
    )
    expect(game.result()).toEqual(63);
  });
});