describe('Game', function(){
  var game, frame;

  beforeEach(function(){
    game = new Game();
  })

  it('Updates score', function(){
    game.nextFrame();
    expect(game.score)
  })

})
