describe ('Game', function(){
  beforeEach(function(){
    game = new Game;
  });

  it('game score starts at 0 by default', function(){
    expect(game.totalScore).toEqual(0)
  })
})
