describe('Game', function (){
  var game;

  beforeEach(function(){
    game = new Game;
  });

  it('initiated on the first frame', function(){
    expect(game.frame).toBe(1)
  });
});
