describe("Game Logic", function() {
  var game;
  var frame;

  beforeEach(function() {
    game = new Game();
    frame = new Frame();
  });

  // Gutter game

  it("calculates a score of 0 if the player never hits any pins", function() {

    for (var i = 0; i < 10; i++) {
      frame.roll(0);
      frame.roll(0);
    };

    game.addFrameScore(frame.calculateScore());
    expect(game.calculateOverallScore()).toEqual(0);
  });

  // Game with strikes and spares

  it("calculates a player's score when there are both strikes and spares", function() {
    for (var i = 0; i < 3; i++) {
      frame.roll(10);
    };

    for (var i = 3; i < 5; i++) {
      frame.roll(5);
      frame.roll(5)
    };

    for (var i = 5; i < 10; i++) {
      frame.roll(3);
      frame.roll(3);
    };

    game.addFrameScore(frame.calculateScore());
    expect(game.calculateOverallScore()).toEqual(133);

  });
});
