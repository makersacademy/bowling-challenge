describe('bowling game', function() {

  it('can create game', function () {
    var game = new Bowling();
  });

  it('Gutter Game is when the player never hits a pin', function () {
    var game = new Bowling();
    for (var n=0; n<20; n++) {
      game.roll(0);
    }
    expect(game.score()).toEqual(0);
  });

});
