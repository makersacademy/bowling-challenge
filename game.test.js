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

  describe("#decisionOnExtraRoll", () => {
    it("adds an extra roll if the final round is a spare", () => {
      game = new Game();
      for (let i = 0; i < 18; i++) {
        game.inputRoll(0);
      }
      game.inputRoll(8);
      game.inputRoll(2);
      game.inputRoll(3);
      expect(game.getFrames().length).toBe(10);
      expect(game.getFrames()[9].maxRolls).toBe(3);
    })
  })

  describe("#calculateSpareBonus", () => {
    it("can calculate a spare bonus (not last frame)", () => {
      game = new Game();
      game.inputRoll(9);
      game.inputRoll(1);
      game.inputRoll(3);
      game.inputRoll(4);
      game.calculateSpareBonus();
      expect(game.getFrames()[0].bonus).toBe(3);
    })
  })

  describe("#calculateStrikeBonus", () => {
    it("can calculate a strike bonus (not last round)", () => {
      game = new Game();
      game.inputRoll(10);
      game.inputRoll(1);
      game.inputRoll(3);
      game.calculateStrikeBonus();
      expect(game.getFrames()[0].bonus).toBe(4);
    })
  })

  describe("#calculateScore", () => {
    it("can play one vanilla frame and score correctly", () => {
      game = new Game();
      game.inputRoll(1);
      game.inputRoll(2);
      expect(game.totalScore()).toBe(3);
    })
    it("can play two vanilla frames and score correctly", () => {
      game = new Game();
      game.inputRoll(1);
      game.inputRoll(2);
      game.inputRoll(2);
      game.inputRoll(2);
      expect(game.totalScore()).toBe(7);
    })
    it("can play a spare followed by a vanilla frame and score correctly", () => {
      game = new Game();
      game.inputRoll(9);
      game.inputRoll(1);
      game.inputRoll(3);
      game.inputRoll(4);
      expect(game.totalScore()).toBe(20);
    })
    it("can play a strike followed by a vanilla frame and score correctly", () => {
      game = new Game();
      game.inputRoll(10);
      game.inputRoll(3);
      game.inputRoll(4);
      expect(game.totalScore()).toBe(24);
    })
    it("can play a strike followed by a strike followed by a vanilla frame and score correctly", () => {
      game = new Game();
      game.inputRoll(10);
      game.inputRoll(10);
      game.inputRoll(3);
      game.inputRoll(4);
      expect(game.totalScore()).toBe(47);
    })
    it("can play a spare followed by a strike followed by a spare followed by a vanilla frame and score correctly", () => {
      game = new Game();
      game.inputRoll(9);
      game.inputRoll(1);
      game.inputRoll(10);
      game.inputRoll(9);
      game.inputRoll(1);
      game.inputRoll(3);
      game.inputRoll(4);
      expect(game.totalScore()).toBe(60);
    })
    it("can play a full game with a vanilla last round and score correctly", () => {
      game = new Game();
      game.inputRoll(1);
      game.inputRoll(2);

      game.inputRoll(10);

      game.inputRoll(3);
      game.inputRoll(4);

      game.inputRoll(10);

      game.inputRoll(5);
      game.inputRoll(5);

      game.inputRoll(10);

      game.inputRoll(3);
      game.inputRoll(0);

      game.inputRoll(2);
      game.inputRoll(8);

      game.inputRoll(10);

      game.inputRoll(1);
      game.inputRoll(2);

      expect(game.totalScore()).toBe(119);
    })
    it("can score a game with a spare in the last round correctly", () => {
      game = new Game();
      game.inputRoll(1);
      game.inputRoll(2);

      game.inputRoll(10);

      game.inputRoll(3);
      game.inputRoll(4);

      game.inputRoll(10);

      game.inputRoll(5);
      game.inputRoll(5);

      game.inputRoll(10);

      game.inputRoll(3);
      game.inputRoll(0);

      game.inputRoll(2);
      game.inputRoll(8);

      game.inputRoll(10);

      game.inputRoll(8);
      game.inputRoll(2);
      game.inputRoll(8);

      expect(game.totalScore()).toBe(141);
    })
    it ("can play perfect game and score correctly", () => {
      game = new Game();
      for (let i = 0; i < 12; i++) {
        game.inputRoll(10);
      }
      expect(game.totalScore()).toBe(300);
    })
  })

})