describe("Game", function() {
  var game;

  beforeEach(function() {
    game = new Game();
  });

  it("should have a inital score of 0", function() {
    expect(game._score).toEqual(0);
  });
});
