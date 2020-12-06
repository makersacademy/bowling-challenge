describe("BowlingGame", function() {

  beforeEach(function(){
    game = new BowlingGame();
  });

  it("can roll a gutter game", function() {
    for (var i = 0; i < 20; i++) {
      game.roll(0);
    }
    expect(game.score()).toEqual (0);
  });

  it("can roll all ones", function() {
    for (var i = 0; i < 20; i++) {
      game.roll(1);
    }
    expect(game.score()).toEqual (20);
  });

  it("can roll a spare", function() {
    game.roll(5);
    game.roll(5);
    game.roll(3);
    for (var i = 0; i < 17; i++) {
      game.roll(0);
    }
    expect(game.score()).toEqual (16);
  });

  it("can roll a strike", function() {
    game.roll(10);
    game.roll(4);
    game.roll(3);
    for (var i = 0; i < 16; i++) {
      game.roll(0);
    }
    expect(game.score()).toEqual (24);
  });

  it("can roll a perfect game", function() {
    for (var i = 0; i < 12; i++) {
      game.roll(10);
    }
    expect(game.score()).toEqual (300);
  });

  it("can roll all spares", function() {
    for (var i = 0; i < 21; i++) {
      game.roll(5);
    }
    expect(game.score()).toEqual (150);
  });
});
