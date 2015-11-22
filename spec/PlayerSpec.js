describe ('Bowling',function(){
  var player;
  beforeEach(function(){
    player = new Player();
    game = game;
    score = 0;
  });

  it('starts the game',function(){
    expect(player.startGame()).toEqual(game)
  })

  it("the player can see the score",function(){
    expect(player.score()).toEqual(0)
  })
});
