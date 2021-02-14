"use-strict";

describe("Game", () => {
  let game;

  beforeEach(() => {
    game = new Game();
  });

  describe("score", () => {
    it("returns 0 after 20 consecutive rolls of hitting 0 pins", () => {
      game.roll(0);
      game.roll(0);
      game.roll(0);
      game.roll(0);
      game.roll(0);
      game.roll(0);
      game.roll(0);
      game.roll(0);
      game.roll(0);
      game.roll(0);
      game.roll(0);
      game.roll(0);
      game.roll(0);
      game.roll(0);
      game.roll(0);
      game.roll(0);
      game.roll(0);
      game.roll(0);
      game.roll(0);
      game.roll(0);
      expect(game.score()).toBe(0);
    });

    it("returns 60 after 20 consecutive rolls of hitting 3 pins", () => {
      game.roll(3);
      game.roll(3);
      game.roll(3);
      game.roll(3);
      game.roll(3);
      game.roll(3);
      game.roll(3);
      game.roll(3);
      game.roll(3);
      game.roll(3);
      game.roll(3);
      game.roll(3);
      game.roll(3);
      game.roll(3);
      game.roll(3);
      game.roll(3);
      game.roll(3);
      game.roll(3);
      game.roll(3);
      game.roll(3);
      expect(game.score()).toBe(60);
    });

    it("adds bonus points after getting a spare", () => {
      game.roll(8);
      game.roll(2);
      game.roll(6);
      game.roll(0);
      game.roll(0);
      game.roll(0);
      game.roll(0);
      game.roll(0);
      game.roll(0);
      game.roll(0);
      game.roll(0);
      game.roll(0);
      game.roll(0);
      game.roll(0);
      game.roll(0);
      game.roll(0);
      game.roll(0);
      game.roll(0);
      game.roll(0);
      game.roll(0);
      expect(game.score()).toBe(22);
    });

    it("adds bonus points after getting a strike", () => {
      game.roll(10);
      game.roll(7);
      game.roll(2);
      game.roll(0);
      game.roll(0);
      game.roll(0);
      game.roll(0);
      game.roll(0);
      game.roll(0);
      game.roll(0);
      game.roll(0);
      game.roll(0);
      game.roll(0);
      game.roll(0);
      game.roll(0);
      game.roll(0);
      game.roll(0);
      game.roll(0);
      game.roll(0);
      expect(game.score()).toBe(28);
    });

    it("returns 100 after 10 consecutive spares each with 0 on the first roll", () => {
      game.roll(0);
      game.roll(10);
      game.roll(0);
      game.roll(10);
      game.roll(0);
      game.roll(10);
      game.roll(0);
      game.roll(10);
      game.roll(0);
      game.roll(10);
      game.roll(0);
      game.roll(10);
      game.roll(0);
      game.roll(10);
      game.roll(0);
      game.roll(10);
      game.roll(0);
      game.roll(10);
      game.roll(0);
      game.roll(10);
      game.roll(0);
      expect(game.score()).toBe(100);
    });

    it("returns 133 after the following rolls: [1,4,4,5,6,4,5,5,10,0,1,7,3,6,4,10,2,8,6]", () => {
      game.roll(1);
      game.roll(4);
      game.roll(4);
      game.roll(5);
      game.roll(6);
      game.roll(4);
      game.roll(5);
      game.roll(5);
      game.roll(10);
      game.roll(0);
      game.roll(1);
      game.roll(7);
      game.roll(3);
      game.roll(6);
      game.roll(4);
      game.roll(10);
      game.roll(2);
      game.roll(8);
      game.roll(6);
      expect(game.score()).toBe(133);
    });

    it("returns 300 after a perfect game", () => {
      game.roll(10);
      game.roll(10);
      game.roll(10);
      game.roll(10);
      game.roll(10);
      game.roll(10);
      game.roll(10);
      game.roll(10);
      game.roll(10);
      game.roll(10);
      game.roll(10);
      game.roll(10);
      expect(game.score()).toBe(300);
    });
  });
});
