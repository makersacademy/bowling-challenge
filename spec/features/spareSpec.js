describe("Scoring spares", function(){
  it("correctly allows a spare to be scored on one occasion", function(){
    game = new Game();
    for(i=0; i<10; i++){
      game.recordBall(3);
    }
    expect(game.calculateTotal()).toEqual(30);
    game.recordBall(3);
    game.recordBall(7);
    game.recordBall(7);
    expect(game.calculateTotal()).toEqual(54);
  });
});
