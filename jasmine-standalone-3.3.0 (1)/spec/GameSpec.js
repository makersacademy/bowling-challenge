describe('Game', function(){
  it('starts with zero score', function(){
    var game = new Game;
    expect(game.score).toEqual(0);
  })

  it('can roll a gutter roll', function(){
    var game = new Game;
    game.roll(0);
    expect(game.score).toEqual(0);
  });
});
