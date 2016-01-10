describe("Feature tests", function() {
  var game;

  beforeEach(function() {
    game = new Game();
  });

  it("allows a user to start a new game", function() {
    expect(game).toBeDefined();
  });
});
