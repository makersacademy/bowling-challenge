"use-strict";

describe("Game", () => {
  const gameRoll = (rollsArray) => {
    rollsArray.forEach((roll) => {
      game.roll(roll);
    });
  };

  let game;

  beforeEach(() => {
    game = new Game();
  });

  describe("score", () => {
    it("returns 0 after 20 consecutive rolls of hitting 0 pins", () => {
      gameRoll([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
      expect(game.score()).toBe(0);
    });

    it("returns 60 after 20 consecutive rolls of hitting 3 pins", () => {
      gameRoll([3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3]);
      expect(game.score()).toBe(60);
    });

    it("adds bonus points after getting a spare", () => {
      gameRoll([8, 2, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
      expect(game.score()).toBe(22);
    });

    it("adds bonus points after getting a strike", () => {
      gameRoll([10, 7, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
      expect(game.score()).toBe(28);
    });

    it("returns 100 after 10 consecutive spares each with 0 on the first roll", () => {
      gameRoll([
        0,
        10,
        0,
        10,
        0,
        10,
        0,
        10,
        0,
        10,
        0,
        10,
        0,
        10,
        0,
        10,
        0,
        10,
        0,
        10,
        0,
      ]);
      expect(game.score()).toBe(100);
    });

    it("returns 133 after the following rolls: [1,4,4,5,6,4,5,5,10,0,1,7,3,6,4,10,2,8,6]", () => {
      gameRoll([1, 4, 4, 5, 6, 4, 5, 5, 10, 0, 1, 7, 3, 6, 4, 10, 2, 8, 6]);
      expect(game.score()).toBe(133);
    });

    it("returns 300 after a perfect game", () => {
      gameRoll([10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10]);
      expect(game.score()).toBe(300);
    });
  });
});
