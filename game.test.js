const Game = require('./game')

describe("Game", () => {

  describe("#inputRoll", () => {
    it("user can input one roll", () => {
      game = new Game();
      game.inputRoll(1);
      expect(game.currentFrame.getRolls()[0]).toBe(1);
    })
    it("user can input another roll", () => {
      game = new Game();
      game.inputRoll(1);
      game.inputRoll(2);
      expect(game.getFrames()[0].getRolls()[1]).toBe(2);
    })
  })

  describe("#newFrame", () => {
    it("can start a new frame", () => {
      game = new Game();
      game.inputRoll(1);
      game.newFrame();
      expect(game.currentFrame.getRolls()).toEqual([]);
    })
  })

  describe("#nextFrame", () => {
    it("can log a frame and start the next", () => {
      game = new Game();
      game.inputRoll(1);
      game.inputRoll(2);
      expect(game.currentFrame.getRolls()).toEqual([]);
      expect(game.getFrames()[0].getRolls()).toEqual([1,2]);
    })
  })

  describe("#calculateScore", () => {
    it("can play one vanilla frame and score correctly", () => {

    })
  })
})