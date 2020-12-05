describe("BowlingGame", function() {

  it("can roll a gutter game", function() {
    game = new BowlingGame()
    for (var i = 0; i < 21; i++) {
      game.roll(0);
    }
    expect(game.score()).toEqual (0);
  })

  it("can roll all ones", function() {
    game = new BowlingGame()
    for (var i = 0; i < 20; i++) {
      game.roll(1);
    }
    expect(game.score()).toEqual (20);
  })

});
