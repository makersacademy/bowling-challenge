describe("BowlingGame", function() {

  var game;

  beforeEach(function() {
    game = new BowlingGame();
  });

  describe("#frames", function() {
    it("starts on frame number 1", function() {
      expect(game._frameNumber).toEqual(1)
    });
    it("increments the frame number between rounds", function() {
      game.roundComplete();
      expect(game._frameNumber).toEqual(2)
    });
  });



});
