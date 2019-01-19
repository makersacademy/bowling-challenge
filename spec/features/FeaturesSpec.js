describe("Game Logic", function() {
  var game;
  var frame;

  beforeEach(function() {
    game = new Game();
    frame = new Frame();
  });

  // Gutter game

  it("calculates a score of 0 if the player never hits any pins", function() {
    for (var i = 0; i < 9; i++) {
      frame.roll(0);
      frame.roll(0);
      game.addFrameScore(frame.calculateFrameScore());
    };
    expect(game.calculateOverallScore()).toEqual(0);
  });

});
