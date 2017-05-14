describe("A Bowling game", function() {

  var game = new Game()

  it("finds that a game exists", function() {
    expect(game).toEqual(new Game());
  });

  it("can count a gutter game", function() {
    for (var frame = 0; frame < 20; frame++){
    game.bowl(0);
    }
    expect(game.score()).toEqual(0);
  });

  it("can count score frame totals", function(){
    for (var frame = 0; frame <20; frame++){
      game.bowl(3);
    }
    expect(game.score()).toEqual(60);
  });

});
