describe ('Bowling a ball', function () {

  it('allows a ball to be bowled', function() {
    game.bowlA(5);
    expect(game.getBallCount()).toEqual(1);
  });

});
