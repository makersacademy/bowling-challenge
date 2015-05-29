describe("Bowling Score Card", function(){

  xit("should record a score of 300 for a perfect game", function() {
    game = new Game();
    for (i = 0; i < 12; i++) {
        game.roll(10);
    };
    expect(game.score).toEqual(300);
  });

  it("should record a score of zero for a gutter game", function() {
    game = new Game();
    for (i = 0; i < 20; i++) {
        game.roll(0);
    };
    expect(game.score).toEqual(0);
  });

it("limits the game to 20 rolls", function() {
    game = new Game();
    for (i = 0; i < 20; i++) {
        game.roll(4);
    };
    expect(function(){game.roll(4)}).toThrow();
  });

});

