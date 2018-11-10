describe("Bowling", function() {
  var game;

  beforeEach(function () {
    game = new Game()
  })

  it('can track rolls', function () {
    game.roll(1)
    expect(game.rolls).toEqual([1]);
  })
})
