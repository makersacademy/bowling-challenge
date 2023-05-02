const Game = require("../../lib/classes/game");
const Scorecard = require("../../lib/classes/scorecard.js");

describe("Game", () => {
  let game;

  beforeEach(() => {
    game = new Game();
  });

  test("initializes a new game", () => {
    expect(game.scorecard).toBeInstanceOf(Scorecard);
    expect(game.scorecard.frames.length).toBe(0);
    expect(game.currentFrame).toBe(0);
    expect(game.frameCount).toBe(0);
  });

  describe("roll", () => {
    test("adds a frame to the scorecard and increments the frame count", () => {
      game.roll(4, 3);
      expect(game.scorecard.frames).toHaveLength(1);
      expect(game.frameCount).toBe(1);
      expect(game.scorecard.frames[0]).toHaveProperty("firstRoll", 4);
      expect(game.scorecard.frames[0]).toHaveProperty("secondRoll", 3);
    });

    test("throws an error if the maximum number of frames has been reached", () => {
      for (let i = 0; i < 10; i++) {
        game.roll(3, 2);
      }

      expect(() => game.roll(1, 0)).toThrow(Error);
    });

    test("updates the current frame", () => {
      game.roll(3, 2);
      expect(game.currentFrame).toBe(1);

      game.roll(4, 1);
      expect(game.currentFrame).toBe(2);

      game.roll(10);
      expect(game.currentFrame).toBe(3);
    });
  });

  describe("startGame", () => {
    test("sets the current frame to the number of frames in the scorecard", () => {
      game.roll(3, 2);
      game.roll(4, 1);
      game.startGame();
      expect(game.currentFrame).toBe(game.scorecard.frames.length);
    });
  });

  describe("endGame", () => {
    test("prints the final score to the console", () => {
      const logSpy = jest.spyOn(console, "log").mockImplementation(() => {});
      const addFrameSpy = jest.spyOn(game.scorecard, "addFrame");

      for (let i = 0; i < 10; i++) {
        game.roll(10);
      }

      game.endGame();
      expect(logSpy).toHaveBeenCalledWith(`Final score: ${300}`);
      expect(addFrameSpy).toHaveBeenCalledTimes(10);

      logSpy.mockRestore();
      addFrameSpy.mockRestore();

      console.log(`Final score: ${game.scorecard.getScore()}`);
    });
  });
});
