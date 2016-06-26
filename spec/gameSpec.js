describe('Game', function(){
  var game;

  beforeEach(function(){
    game = new Game();
  });

  it('is a gutter a game', function(){
    for(var i = 0; i < 20; i++ ){
      game.roll(0);
    }
    expect(game.score()).toBe(0);
  });

});
