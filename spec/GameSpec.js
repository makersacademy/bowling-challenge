describe("Game", function() {

  var game;

  beforeEach(function() {
    game = new Game();
  });

  it("can start a new round", function() {
    game.start
    expect(game.pins).toEqual(10)
  });
});
