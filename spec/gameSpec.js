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
});
