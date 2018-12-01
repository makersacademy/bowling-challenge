describe("Game", function() {

  var game;

  beforeEach(function() {
    game = new Game();
  });

  it('starts with an empty frames array by default', function() {
    expect(game.showFrames()).toEqual([]);
  });

});
