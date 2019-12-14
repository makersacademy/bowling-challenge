describe("Game", function() {
  var game = new Game();

  beforeEach(function() {
    game = new Game();
  });

  it("can calculate the score of a gutter game", function() {
    generateFrames([0, 0], [0, 0]);
    expect(game.score()).toEqual(0);
  })

  it("can calculate the score of a game without spares or strikes", function() {
    generateFrames([2, 5], [6, 1]);
    expect(game.score()).toEqual(70);
  })

  it("can calculate the score of a game with spares", function() {
    generateFrames([2, 8], [6, 1]);
    expect(game.score()).toEqual(119);
  })

  it("can calculate the score of a perfect game with 12 strikes", function() {
    generateFrames([10], [10, 10, 10]);
    expect(game.score()).toEqual(300);
  })

  it("can calculate the score of a game with spares and strikes", function() {
    game.roll([10]);
    game.roll([10]);
    game.roll([10]);
    game.roll([2, 8]);
    game.roll([2, 2]);
    game.roll([2, 5]);
    game.roll([4, 6]);
    game.roll([10]);
    game.roll([2, 7]);
    game.roll([2, 7]);
    expect(game.score()).toEqual(152);
  })

  // Helper function
  function generateFrames(frame, finalFrame) {
    for (var i = 0; i < 9; i++) game.roll(frame);
    game.roll(finalFrame);
  };
});
