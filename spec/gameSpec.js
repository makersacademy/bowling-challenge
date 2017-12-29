describe("game", function() {
  describe("adding frames to game", function() {
    it("should display the list of games", function() {
      game = new Game();
      game.newFrame(2,3);
      expect(game.framesList).toEqual([[2,3]]);
    });
  });
});
