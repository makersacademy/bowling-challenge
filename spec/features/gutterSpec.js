describe("Gutter game", function(){
  it("Rolls a zero for every frame of the game", function(){
    game = new Game();
    for(i=0; i<20; i++){
      game.recordBall(0);
    }
    expect(game.gameTotal).toEqual(0);
    // expect(game.isComplete()).toEqual(true);
  });
});
