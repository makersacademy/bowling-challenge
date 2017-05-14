describe('Bowling', function() {

  it('can roll a gutter ball', function() {
    var game = new Bowling();
    for (var i = 0; i < 20; i++) {
      game.roll(0);
    }
    expect(game.score()).toBe(0);
  });

});