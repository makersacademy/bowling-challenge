describe("BowlingGame", function() {
  var game;

  beforeEach(function() {
    game = new BowlingGame();
  });

  it("can record a strike if 10 is rolled on first frame", function() {
    game.firstRoll(10);
    expect(game.lastFrame).toEqual('Strike');
  });

  it("can record a spare if 10 is rolled on roll one and two", function() {
    game.firstRoll(4);
    game.secondRoll(6);
    expect(game.lastFrame).toEqual('Spare');
  });

  it("should score current frame is two rolls add up to less than 10", function() {
    game.firstRoll(1);
    game.secondRoll(4);
    expect(game.lastFrameScore()).toEqual(5);
  });

});
