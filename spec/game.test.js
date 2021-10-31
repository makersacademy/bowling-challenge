const { describe } = require("jest-circus");
const Game = require("../src/game");

beforeEach(() => {
  game = new Game();
});

describe("Game", () => {
  test("has an empty array of frames", () => {
    expect(game.frames).toEqual([]);
  });

  test("adds a frame to the array", () => {
    frame = { first_roll: null, second_roll: null, score: 0 };
    game._newFrame(frame);
    expect(game.frames.length).toEqual(1);
  });
});

describe("Strikes", () => {
  test("strike returns true", () => {
    frame = { first_roll: 10, second_roll: 'x', score: 10 };
    expect(game._isStrike(frame)).toEqual(true);
  });

  test("spare is not a strike", () => {
    frame = { first_roll: 4, second_roll: 6, score: 10 };
    expect(game._isStrike(frame)).not.toEqual(true);
  });
});

describe("Spares", () => {
  test("spare returns true", () => {
    frame = { first_roll: 4, second_roll: 6, score: 10 };
    expect(game._isSpare(frame)).toEqual(true);
  });
});

describe("if first_roll exceeds 10", () => {
  test("this an error", () => {
    expect(() => {
      game.roll(11, 0);
    }).toThrow("There are only 10 pins!");
  });
});

describe("combined exceeds 10", () => {
  test("throws an error", () => {
    expect(() => {
      game.roll(6, 5);
    }).toThrow("There are only 10 pins!");
  });
});

describe("input is not a number", () => {
  test("throws an error", () => {
    expect(() => {
      game.roll("a", 4);
    }).toThrow("Please enter a number!");
  });
});

describe("input is a negative number", () => {
  test("throws an error", () => {
    expect(() => {
      game.roll(-1, -4);
    }).toThrow("You cannot throw a negative roll!");
  });
});

describe("test cases", () => {

  beforeEach(() => {
    game = new Game();

    multiRoll = (num, one, two) => {
      for (let i = 0; i < num; i++) {
        game.roll(one, two);
      }
    };
  });

  
  it('returns 0 for a gutter game', () => {
    multiRoll(9, 0, 0)
    game.finalRoll(0, 0);
    expect(game.fetchScore()).toEqual(0);
  });

   it("returns 10 for a game of ones", () => {
     multiRoll(9, 1, 0);
     game.finalRoll(1, 0);
     expect(game.fetchScore()).toEqual(10);
   });

   it("returns 150 for a game of fives", () => {
     multiRoll(9, 5, 5);
     game.finalRoll(5, 5);
     game.bonusRoll(5)
     expect(game.fetchScore()).toEqual(150);
   });

  it('returns 300 for a perfect game', () => {
    multiRoll(9, 10, 'x')
    game.finalRoll(10, 10);
    game.bonusRoll(10);
    expect(game.fetchScore()).toEqual(300)
  })
})