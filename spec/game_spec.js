describe("Game", function() {
  var game;

  beforeEach(function(){
    game = new Game;
  });

  it("returns an empty array of turns", function(){
    expect(game.turns).toEqual([]);
  });

});
