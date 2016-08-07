describe("Bowling game",function() {
  var game;
  beforeEach(function() {
    game = new Game();
  });

  describe("Player",function() {
    it("can have the first roll",function() {
      expect(game.rollNumber).toEqual(1);
    });
  });
});
