describe('Game', function(){
  it("allows the player to enter a score for a frame", function(){
    game = new Game();
    expect(game.recordBall(3)).toEqual(3);
  });
});
