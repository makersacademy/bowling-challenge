const { BowlingGame, Game } = require("./player");

describe("BowlingGame", () => {
  let game;

  beforeEach(() => {
    game = new BowlingGame("Alice");
  });

  test("should initialize a game with a name and 0 score", () => {
    expect(game.name).toBe("Alice");
    expect(game.total).toBe(0);
    expect(game.currentRound).toBe(1);
    expect(game.rounds).toHaveLength(21);
  });

  test("should add a score to the current round", () => {
    game.addScore(5);
    expect(game.rounds[1]).toBe(5);
    expect(game.currentRound).toBe(2);
  });

  test("should throw an error if trying to add score after all rounds have been played", () => {
    for (let i = 0; i < 20; i++) {
      game.addScore(5);
    }
    expect(() => game.addScore(5)).toThrow("All rounds have been played.");
  });

  test("should throw an error if adding an invalid score", () => {
    expect(() => game.addScore(-1)).toThrow("Invalid score entered.");
    expect(() => game.addScore(11)).toThrow("Invalid score entered.");
  });

  test("should throw an error if the total score for one round exceeds 10", () => {
    game.addScore(5);
    expect(() => game.addScore(6)).toThrow(
      "Score entry error. Total score for one round cannot exceed 10."
    );
  });

  test("should calculate the total score correctly for a game without any strikes or spares", () => {
    for (let i = 0; i < 20; i++) {
      game.addScore(3);
    }
    expect(game.calculateTotalScore()).toBe(60);
  });
});

describe("Game", () => {
  let bowlingGame1, bowlingGame2, bowlingGame3, bowlingGame4;
  let game;

  beforeEach(() => {
    bowlingGame1 = new BowlingGame("Alice");
    bowlingGame2 = new BowlingGame("Bob");
    bowlingGame3 = new BowlingGame("Charlie");
    bowlingGame4 = new BowlingGame("David");

    game = new Game();
    game.addBowler("Alice");
    game.addBowler("Bob");
    game.addBowler("Charlie");
    game.addBowler("David");
  });

  test("should add bowlers to the game", () => {
    expect(game.bowlers).toHaveLength(4);
    expect(game.bowlers[0]).toBeInstanceOf(BowlingGame);
    expect(game.bowlers[0].name).toBe("Alice");
  });
});
