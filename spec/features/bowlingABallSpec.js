describe ('Bowling a ball', function () {

  var game;

  it('allows a ball to be bowled', function() {
    game = new Game();
    game.bowlA(5);
    expect(game.getBallCount()).toEqual(1);
  });

});
