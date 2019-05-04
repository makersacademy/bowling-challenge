describe('Bowling Game', function() {

  it('can roll gutter game', function () {
    var game = new Game();
    for (var i = 0; i < 20; i++) {
      game.bowl();
    }
    expect(game.score()).toBe(0);
  });
});
