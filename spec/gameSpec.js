describe("Game", () => {
  let game;

  beforeEach(() => {
    game = new Game();
  });

  describe(".takeTurn", () => {
    it("adds two rolls to first frame at the start of a game", () => {
      game.takeTurn(5);
      game.takeTurn(4);
      expect(game.frames[0].scoreRolls()).toEqual(9);
    });
    it("adds to the next after 2 rolls ", () => {
      game.takeTurn(5);
      game.takeTurn(4);
      game.takeTurn(4);
      expect(game.frames[1].scoreRolls()).toEqual(4);
    });
    it("adds to the next frame after a strike", () => {
      game.takeTurn(10);
      game.takeTurn(5);
      expect(game.frames[1].scoreRolls()).toEqual(5);
    });
  });

  describe(".getCurrentScore", () => {
    it("returns the score for all frames up to current", () => {
      game.takeTurn(4);
      game.takeTurn(4);
      game.takeTurn(4);
      game.takeTurn(4);
      game.takeTurn(4);
      expect(game.getCurrentScore()).toEqual(20);
    });
  });

  describe(".nextFrame", () => {
    it("adds 1 to the currentFrame", () => {
      game.nextTurn();
      expect(game.currentFrameIndex).toEqual(1);
    });
  });

  describe(".getBonus", () => {
    it("adds the next 2 rolls to the frame when its a strike", () => {
      game.takeTurn(10);
      game.takeTurn(1);
      game.takeTurn(1);
      game.getBonus(2, 0);
      expect(game.frames[0].total).toEqual(12);
    });
  });
});
