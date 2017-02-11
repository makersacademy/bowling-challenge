describe("Game", function(){
  var game;
  var player;

  beforeEach(function(){
    game = new Game();
    player = new Player(game);
  });

  it("should track the framescore", function(){
    spyOn(player, 'pinsKnocked').and.returnValue(3);
    player.throwBall();
    player.throwBall();
    expect(game._frameScore).toEqual(6);
  })

})
