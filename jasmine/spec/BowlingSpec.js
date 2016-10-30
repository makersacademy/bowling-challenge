describe("Bowling game", function() {

var game;

  beforeEach(function() {
  game = new BowlingGame();
});

  it('should be able to start a new game', function() {
    var game = new BowlingGame();
  });

  it('should be able to score a frame where no pins are hit', function () {
    for (var i = 0; i < 2; i++) {
      game.roll(0)
    }
    expect(game.score()).toEqual(0);
  });

});
