describe("Game", function() {
  var player;

  beforeEach(function() {
    game = new Game();
  });

  it("Starts with a blank score", function() {
    expect(game._score).toEqual(0);
  });

  it("Starts on frame 1", function() {
    expect(game._frame).toEqual(1);
  });

  it("Add's the score to the total score", function() {
    game.inputScore(4);
    game.inputScore(3);
    expect(game._score).toEqual(7);
  });

  it("Advances the frame after two normal bowls", function() {
    game.inputScore(4);
    game.inputScore(3);
    expect(game._frame).toEqual(2);
  });

  it("Recognises when a strike has been bowled", function() {
    game.inputScore(10);
    expect(game._strikeBowlsToCount).toEqual(2);
  });

  it("Advances frame number after a strike", function() {
    game.inputScore(10);
    expect(game._frame).toEqual(2);
  });

  it("Adds the next two bowls after a strike as a bonus", function() {
    game.inputScore(10);
    game.inputScore(5);
    game.inputScore(5);
    expect(game._score).toEqual(30);
  });

  it("Takes into account subsequent strikes", function() {
    game.multipleRolls(10, 2);
    game.inputScore(4);
    game.inputScore(2);
    expect(game._score).toEqual(46);
  });

  it("Adds a spare bonus after a spare", function() {
    game.inputScore(5);
    game.inputScore(5);
    game.inputScore(3);
    expect(game._score).toEqual(16);
  });

  it("Returns gutter game on a final score of 0", function() {
    game.multipleRolls(0, 20);
    expect(game._gutterGame).toEqual(true);
  });
});
