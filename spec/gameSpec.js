describe("Game", function() {
  var game;

  beforeEach(function() {
    game = new Game();
  });

  it("can bowl a strike", function() {
    game.bowl(10)
    frame = game.currentFrame()
    expect(frame.isStrike).toEqual(true)
  });

  it("can bowl a spare", function() {
    game.bowl(4)
    game.bowl(6)
    frame = game.currentFrame()
    expect(frame.isSpare).toEqual(true)
  });

  it("can score a simple frame (no bonuses)", function() {
    game.bowl(1)
    game.bowl(5)
    frame = game.currentFrame()
    expect(frame.score).toEqual(6)
  })

  it("can keep track of total game score", function() {
    game.bowl(1)
    game.bowl(5)
    expect(game.totalScore()).toEqual(6)
  })

  it("can score a spare on first roll of next frame", function() {
    game.bowl(1)
    game.bowl(9)
    game.bowl(1)
    expect(game.frames[0].score).toEqual(11)
  })

  it("can score a spare when followed by strike", function() {
    game.bowl(1);
    game.bowl(9);
    game.bowl(10);
    expect(game.frames[0].score).toEqual(20);
  });

  it("can score a strike when followed by two regular rolls", function() {
    game.bowl(10);
    game.bowl(1);
    game.bowl(5);
    // game.calculateTotalScore();
    expect(game.frames[0].score).toEqual(16);
    expect(game.totalScore()).toEqual(22);
  });

  it("can score a strike when followed by another strike and another roll", function () {
    game.bowl(10);
    game.bowl(10);
    game.bowl(5);
    expect(game.frames[0].score).toEqual(25);
  });

  it("can score a strike when followed by two strikes", function() {
    game.bowl(10);
    game.bowl(10);
    game.bowl(10);
    expect(game.frames[0].score).toEqual(30);
  })

  it("can score a strike when followed by a spare", function() {
    game.bowl(10);
    game.bowl(2);
    game.bowl(8);
    // game.calculateTotalScore();
    expect(game.frames[0].score).toEqual(20);
  });

  it("can score a gutter game", function() {
    var i = 1;
    while (i < 21) {
      game.bowl(0);
      i ++;
    };
    expect(game.totalScore()).toEqual(0);
  });

  it("can score a perfect game", function() {
    var i = 1;
    while (i < 13) {
      game.bowl(10);
      i ++;
    };
    expect(game.totalScore()).toEqual(300);
  });

});
