describe("Bowling", function() {
  var game;

  beforeEach(function () {
    game = new Game()
  })

  it('can track rolls', function () {
    game.roll(1)
    expect(game.rolls).toEqual([1]);
  })

  it('can track the total score of the game', function() {
    game.roll(2);
    expect(game.totalScore()).toEqual(2);
  })

  it('can roll a gutter game', function() {
    rollMultiple(0, 20);
    expect(game.totalScore()).toEqual(0);
  })

  var rollMultiple = function(pins, rolls) {
    for (var i = 0; i < rolls; i++) {
      game.roll(pins);
    }
  }
})
