describe('Bowling Game', function() {
  var game;
  beforeEach(function () {
    game = new Game();
  });
  
  it('calculates the score when pins are hit one at a time', function () {
    for (var i = 0; i < 20; i++) {
      game.bowl(1);
    }
    expect(game.calculateScore()).toBe(20);
  });
});
