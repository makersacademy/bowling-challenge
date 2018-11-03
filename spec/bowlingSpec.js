describe("BowlingGame", function() {
  var game;

  beforeEach(function() {
    game = new BowlingGame();
  });

  it("can record a strike if 10 pins are knocked down on first roll", function() {
    game.firstRoll(10);
    expect(game.lastFrame().isStrike).toEqual(true);
  });

  it("can record a spare if 10 pins are knocked down after second roll", function() {
    game.firstRoll(4);
    game.secondRoll(6);
    expect(game.lastFrame().isSpare).toEqual(true);
  });

  it("should score current frame if two rolls add up to less than 10", function() {
    game.firstRoll(1);
    game.secondRoll(4);
    expect(game.lastFrame().score).toEqual(5);
  });

  // it("should score a spare on first roll of next frame", function() {
  //   game.firstRoll(1);
  //   game.secondRoll(9);
  //   game.firstRoll(3);
  //   expect(game.totalScore).toEqual(13);
  // });

  // it("should score a spare on first roll of next frame", function() {
  //   game.firstRoll(1);
  //   game.secondRoll(9);
  //   game.firstRoll(10);
  //   expect(game.frameScores[0]).toEqual(20);
  // });
  //
  it("should keep tally of total game score", function() {
    game.firstRoll(1);
    game.secondRoll(4);
    expect(game.totalScore).toEqual(5);
  });

});
