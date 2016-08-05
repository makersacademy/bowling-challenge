describe("Player", function() {
  var player;

  beforeEach(function() {
    game = new Game();
  });

  it("Should start with a blank score", function() {
    expect(game._score).toEqual(0);
  });
});
