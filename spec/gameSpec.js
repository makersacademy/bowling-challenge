describe("game",function(){

  var game

  beforeEach(function(){
    game = new Game();
  });

  it ("Should start with a game score of 0", function() {
    expect(game.currentScore()).toEqual(0)
  });
});