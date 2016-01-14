describe ('FEATURE TEST: Bowling a ball', function () {
  var game;
  beforeEach(function() {
    game = new Game();
  });

  it('allows a ball to be bowled', function() {
    game.bowlA(5);
    expect(game.getBallCount()).toEqual(1);
  });

  it('allows multiple balls to be bowled', function() {
    var n;
    for (n = 0; n < 5; n++) {
      game.bowlA(5);
    }
    expect(game.getBallCount()).toEqual(5);
  });

  it('prevents more than 10 pins knocked down per frame', function() {
    game.bowlA(9);
    expect(function() {
      game.bowlA(3);
    }).toThrowError('Nope. Ten pins max per frame')
  });

});
