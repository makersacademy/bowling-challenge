describe ('Checking the score', function () {

  it('allows the score to be checked after one ball', function() {
    game.bowlA(4);
    expect(game.checkScore()).toEqual(4);
  });

});
