describe("Game", function(){
  var game;

  beforeEach(function(){
    game = new Game;
  });
  it("has a starting score of 0", function(){
    expect(game.gameScore()).toEqual(0);
  });
});
