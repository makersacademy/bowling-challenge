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
    expect(game.totalScore).toEqual(2);
  })
})
