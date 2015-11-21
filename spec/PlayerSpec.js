describe ('Bowling',function(){
  var player;
  beforeEach(function(){
    player = new Player();
    game = game;
  });

  it('starts the game',function(){
    expect(player.startGame()).toEqual(game)
  })
});
