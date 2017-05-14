describe("A Bowling game", function() {

  var game = new Game();

  it("finds that a game exists", function() {
    expect(game).toEqual(new Game());
  });

  it("can count a gutter game", function() {
    for (var frame = 0; frame < 20; frame++){
    game.bowl(0);
    }
    expect(game.score()).toEqual(0);
  });

  it("can count score frame totals", function() {
    for (var frame = 0; frame <20; frame++){
      game.bowl(3);
    }
    expect(game.score()).toEqual(60);
  });

  it("raises an error if more than ten is bowled", function() {
    expect(function(){ game.bowl(11); }).toThrowError("You cannot bowl more than 10 in one ball");
  });

  // it("can check a frame score", function() {
  //   for (var frame = 0; frame <4; frame++){
  //     game.bowl(4);
  //   }
  //     game.bowl(5);
  //     game.bowl(2);
  //   expect(game.frame_score(3)).toEq(7);
  // });

});
