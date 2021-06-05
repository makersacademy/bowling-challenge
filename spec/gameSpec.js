describe("Game", () => {
  let game;
  let frame;

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
  });

  describe(".nextFrame", () => {
    it("adds 1 to the currentFrame", () => {
      game.nextTurn();
      expect(game.currentFrameIndex).toEqual(1);
    });
  });
});
