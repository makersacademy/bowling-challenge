describe("BowlingGame", function() {

  beforeEach(function(){
    game = new BowlingGame();
  });

  it("can roll a gutter game", function() {
    for (var i = 0; i < 21; i++) {
      game.roll(0);
    }
    expect(game.score()).toEqual (0);
  })

  it("can roll all ones", function() {
    for (var i = 0; i < 20; i++) {
      game.roll(1);
    }
    expect(game.score()).toEqual (20);
  })

  it("can roll a spare", function() {
    game.roll(5);
    game.roll(5);
    game.roll(3);
    for (var i = 0; i < 17; i++) {
      game.roll(0);
    }
    expect(game.score()).toEqual (16);
  })

});
