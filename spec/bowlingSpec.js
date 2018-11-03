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

  it("can score current frame if two rolls add up to less than 10", function() {
    game.firstRoll(1);
    game.secondRoll(4);
    expect(game.lastFrame().score).toEqual(5);
  });

  it("can score a spare on first roll of next frame", function() {
    game.firstRoll(1);
    game.secondRoll(9);
    game.firstRoll(3);
    expect(game.totalScore).toEqual(13);
  });

  it("can score a spare when followed by strike", function() {
    game.firstRoll(1);
    game.secondRoll(9);
    game.firstRoll(10);
    expect(game.totalScore).toEqual(20);
  });

  it("can score a strike when followed by two regular rolls", function() {
    game.firstRoll(10);
    game.firstRoll(1);
    game.secondRoll(5);
    expect(game.totalScore).toEqual(22);
  });

  it("can score a strike when followed by another strike and another roll", function () {
    game.firstRoll(10);
    game.firstRoll(10);
    game.firstRoll(5);
    expect(game.totalScore).toEqual(25);
  });

  it("can score a strike when followed by two strikes", function() {
    game.firstRoll(10);
    game.firstRoll(10);
    game.firstRoll(10);
    expect(game.totalScore).toEqual(30);
  })

  it("can score a strike when followed by a spare", function() {
    game.firstRoll(10);
    game.firstRoll(2);
    game.secondRoll(8);
    expect(game.totalScore).toEqual(20);
  });

  it("should keep tally of total game score", function() {
    game.firstRoll(1);
    game.secondRoll(4);
    expect(game.totalScore).toEqual(5);
  });

  it("can score a gutter game", function() {
    var i = 1;
    while (i < 13) {
      game.firstRoll(0);
      game.secondRoll(0);
      i ++;
    };
    expect(game.totalScore).toEqual(0);
  });

  it("can score a perfect game", function() {
    var i = 1;
    while (i < 13) {
      game.firstRoll(10);
      i ++;
    };
    expect(game.totalScore).toEqual(300);
  });

});
