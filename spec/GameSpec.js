describe("Game", function() {
  var game;

  beforeEach(function() {
    game = new Game();
    game.setup();
  });

  it("scores a gutter game as 0", function() {
    for (var i = 0; i < 20; i++) {
      game.roll(0);
    }
    expect(game.calculateScore()).toEqual(0);
  });

  it("scores a game with only 1 in first frame as 1", function() {
    game.roll(1);
    for (var i = 0; i < 19; i++) {
      game.roll(0);
    }
    expect(game.calculateScore()).toEqual(1);
  });

  it("scores a game with 1-1 in each frame as 20", function() {
    for (var i = 0; i < 20; i++) {
      game.roll(1);
    }
    expect(game.calculateScore()).toEqual(20);
  });

  it("scores a game with a 1-9 spare in each frame as 110", function() {
    for (var i = 0; i < 10; i++) {
      game.roll(1);
      game.roll(9);
    }
    game.roll(1);
    expect(game.calculateScore()).toEqual(110);
  });

  it("scores a game with a 5-5 spare in each frame as 150", function() {
    for (var i = 0; i < 21; i++) {
      game.roll(5);
    }
    expect(game.calculateScore()).toEqual(150);
  });

  it("scores a perfect game as 300", function() {
    for (var i = 0; i < 10; i++) {
      game.roll(10);
    }
    game.roll(10);
    game.roll(10);
    expect(game.calculateScore()).toEqual(300);
  });
});
