describe("Game", function() {
  var game;

  beforeEach(function() {
    game = new Game();
  });

  it("should be able to take a score", function() {
    pinsDown = 3;
    game.updateScore(pinsDown);
    expect(game.score).toEqual(3);
  });

  
});
