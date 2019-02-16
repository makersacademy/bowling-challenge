describe("Game", function() {

  var game;

  beforeEach(function() {
    game = new Game();
  });

  it("should start with total points 0", function() {
    expect(game.showTotalPoints()).toEqual(0);
  });

});
