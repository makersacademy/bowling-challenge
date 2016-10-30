describe("Bowling game", function() {

  var game;

  beforeEach(function() {
    game = new BowlingGame();
  });

  it('should be able to score a game where no pins are hit', function () {
    rollMany(0, 20)
    expect(game.score()).toEqual(0);
  });

  it('should be able to score when player only hits single pins', function () {
    rollMany(1, 20)
    expect(game.score()).toEqual(20);
  });

  it('should be able to score a spare', function () {
    game.roll(6)
    game.roll(4)
    game.roll(5)
    rollMany(0, 17)
    expect(game.score()).toEqual(20);
  });

  it('should be able to score a strike', function () {
    game.roll(10);
    game.roll(4);
    game.roll(5);
    rollMany(0, 16);
    expect(game.score()).toEqual(28);
  });

  var rollMany = function (pins, rolls) {
    for (var i = 0; i < rolls; i++) {
      game.roll(pins);
    }
  };

});
