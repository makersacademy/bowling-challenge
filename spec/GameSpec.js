describe("Game", function() {

  var game;

  beforeEach(function() {
    game = new Game();
  });

  it('starts with an empty frames array by default', function() {
    expect(game.showFrames()).toEqual([]);
  });

  it('returns 0 for a gutter game', function() {
    var i;
    for (i = 0; i < 20; i++) {
        game.roll(0);
    }
    console.log(game.showFrames());
    expect(game.score()).toEqual(0);
  });

  it('returns the score for a game without any spares or strikes', function() {
    var i;
    for (i = 0; i < 20; i++) {
        game.roll(1);
    }
    console.log(game.showFrames());
    expect(game.score()).toEqual(20);
  });

});
