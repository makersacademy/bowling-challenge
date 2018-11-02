describe("BowlingGame", function() {
  var game;

  beforeEach(function() {
    game = new BowlingGame();
  });

  it("can record a strike if 10 pins are knocked down on first roll", function() {
    game.firstRoll(10);
    expect(game.lastFrame).toEqual('Strike');
  });

  it("can record a spare if 10 pins are knocked down after second roll", function() {
    game.firstRoll(4);
    game.secondRoll(6);
    expect(game.lastFrame).toEqual('Spare');
  });

  it("should score current frame if two rolls add up to less than 10", function() {
    game.firstRoll(1);
    game.secondRoll(4);
    expect(game.lastFrameScore()).toEqual(5);
  });

  it("should score a spare on first roll of next frame", function() {
    game.firstRoll(1);
    game.secondRoll(9);
    game.firstRoll(3);
    expect(game.frameScores[0]).toEqual(13);
  });

  it("should return running score at any moment", function() {
    game.firstRoll(1);
    game.secondRoll(9);
    expect(game.totalScore).toEqual(0);
    game.firstRoll(3);
    expect(game.totalScore).toEqual(13);
  });

});
