const Game = require("./game");

const scorecard133 = { score: () => 133, board: () => [5] };
const game133 = new Game(scorecard133);

describe(".getScore", () => {
  it("returns the current score", () => {
    expect(game133.getScore()).toEqual(133);
  });
});

describe(".getBoard", () => {
  it("returns the current board", () => {
    expect(game133.getBoard()).toEqual([5]);
  });
});

describe(".currentBowl", () => {
  it("returns the score of the most recently rolled bowl", () => {
    let testgame = new Game();
    testgame.rollBowl(5);
    expect(testgame.currentBowl).toEqual(5);
  });
});

describe(".previousBowl", () => {
  it("returns the score of the previously rolled bowl", () => {
    let testgame = new Game();
    testgame.rollBowl(5);
    testgame.rollBowl(6);
    expect(testgame.currentBowl).toEqual(6);
    expect(testgame.previousBowl).toEqual(5);
  });
});

describe(".rollBowl", () => {
  const rollExpect = (roll, expectation) => {
    let testgame = new Game();
    testgame.rollBowl(roll);
    expect(testgame.bowlsLeft).toEqual(expectation);
  };

  const rollSimpleBowls = (game, num) => {
    for (let i = 0; i < num; i++) {
      expect(game.rollBowl(4)).toEqual("Successful roll! You hit 4 pins.");
    }
  };

  it("doesn't decrease the value of bowls if a number isn't passed", () => {
    rollExpect("", 20);
  });

  it("decreases the values of bowls by 1 if < 10", () => {
    rollExpect(5, 19);
  });

  it("decreases the values of bowls by 2 if 10", () => {
    rollExpect(10, 18);
  });

  it("doesn't decrease the value of bowls if > 10", () => {
    rollExpect(12, 20);
  });

  it("allows 20 bowls to be rolled if no spares or strikes are hit", () => {
    let testgame = new Game();
    rollSimpleBowls(testgame, 20);
    expect(testgame.rollBowl(4)).toEqual("You can't roll any more bowls.");
  });

  it("allows 21 bowls to be rolled if the 20th bowl is a spare", () => {
    let testgame = new Game();
    rollSimpleBowls(testgame, 19);
    expect(testgame.rollBowl(6)).toEqual("Successful roll! You hit 6 pins.");
    expect(testgame.rollBowl(4)).toEqual("Successful roll! You hit 4 pins.");
    expect(testgame.rollBowl(3)).toEqual("You can't roll any more bowls.");
  });

  it("allows 21 bowls to be rolled if the 19th bowl is a strike", () => {
    let testgame = new Game();
    rollSimpleBowls(testgame, 18);
    expect(testgame.rollBowl(10)).toEqual("Successful roll! You hit 10 pins.");
    expect(testgame.rollBowl(10)).toEqual("Successful roll! You hit 10 pins.");
    expect(testgame.rollBowl(10)).toEqual("Successful roll! You hit 10 pins.");
    expect(testgame.rollBowl(3)).toEqual("You can't roll any more bowls.");
  });
});
