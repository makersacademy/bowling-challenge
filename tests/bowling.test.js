const Bowling = require("../bowling");

describe("New bowling class", () => {
  it("returns 0 if all 20 rolls are 0", () => {
    const bowlingGame = new Bowling([
      [0],
      [0],
      [0],
      [0],
      [0],
      [0],
      [0],
      [0],
      [0],
      [0, 0],
    ]);
    expect(bowlingGame.get_scores()).toEqual([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
  });

  it("retruns 30 for every frame if a perfect game is rolled", () => {
    const bowlingGame = new Bowling([
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
    ]);
    expect(bowlingGame.get_scores()).toEqual([
      30, 60, 90, 120, 150, 180, 210, 240, 270, 300,
    ]);
  });

  it("it adds bonus of next two rolls if strike is scored onto the current frame", () => {
    const bowlingGame = new Bowling([
      [10],
      [8, 1],
      [0],
      [0],
      [0],
      [0],
      [0],
      [0],
      [0],
      [0, 0, 0],
    ]);
    expect(bowlingGame.get_scores()).toEqual([
      19, 28, 28, 28, 28, 28, 28, 28, 28, 28,
    ]);
  });

  it("it adds bonus of next two rolls if strike is scored onto the current frame", () => {
    const bowlingGame = new Bowling([
      [10],
      [10],
      [10],
      [0],
      [0],
      [0],
      [0],
      [0],
      [0],
      [0, 0, 0],
    ]);
    expect(bowlingGame.get_scores()).toEqual([
      30, 50, 60, 60, 60, 60, 60, 60, 60, 60,
    ]);
  });

  it("it adds a bonus of next roll onto current fram if a spare is rolled", () => {
    const bowlingGame = new Bowling([
      [8, 2],
      [3, 0],
      [0],
      [0],
      [0],
      [0],
      [0],
      [0],
      [0],
      [0, 0, 0],
    ]);
    expect(bowlingGame.get_scores()).toEqual([
      13, 16, 16, 16, 16, 16, 16, 16, 16, 16,
    ]);
  });

  it("it adds a bonus of next roll onto current fram if a spare is rolled", () => {
    const bowlingGame = new Bowling([
      [8, 2],
      [3, 7],
      [3, 1],
      [0],
      [0],
      [0],
      [0],
      [0],
      [0],
      [0, 0, 0],
    ]);
    expect(bowlingGame.get_scores()).toEqual([
      13, 26, 30, 30, 30, 30, 30, 30, 30, 30,
    ]);
  });

  it("calculates bowling score for all frames", () => {
    const bowlingGame = new Bowling([
      [1, 4],
      [4, 5],
      [6, 4],
      [5, 5],
      [10],
      [0, 1],
      [7, 3],
      [6, 4],
      [10],
      [2, 8, 6],
    ]);
    expect(bowlingGame.get_scores()).toEqual([
      5, 14, 29, 49, 60, 61, 77, 97, 117, 133,
    ]);
  });
});
