describe("Game", function() {
  var game;

  beforeEach(function() {
    game = new Game();
  });

  it("has an empty array of rolls at the beginning", function() {
    expect(game.rolls).toEqual([]);
  });

  it("has empty array of frames at the beginning", function() {
    expect(game.frames).toEqual([]]);
  });

});
