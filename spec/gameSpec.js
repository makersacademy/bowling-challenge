describe('Game', function (){
  var game;

  beforeEach(function(){
    game = new Game;
  });

  it('initiated on the first frame', function(){
    expect(game.frame).toBe(1)
  });

  it('initiated with a score of 0', function(){
    expect(game.score).toBe(0)
  });
});
