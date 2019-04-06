describe('Game', function(){
  beforeEach(function(){
    game = new Game();
  });

  it("allows the player to enter a score for a frame", function(){
    game.recordBall(3);
    expect(game.gameTotal).toEqual(3);
  });

  it("allows the player to enter two scores for a frame", function(){
    game.recordBall(3);
    game.recordBall(4);
    expect(game.gameTotal).toEqual(7);
  })

  it('returns an incomplete game at the start', function(){
    expect(game.isComplete()).toBe(false);
  });

  it("can see that the game is complete after 20 rolls of zero", function(){
    for(i=0; i<20; i++){
      game.recordBall(0);
    }
    expect(game.isComplete()).toBe(true);
  });
});
