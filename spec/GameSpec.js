describe("Game", function() {
  var game;

  beforeEach(function() {
    game = new Game();
  });

  it("should start a new game", function(){
    expect(game.score()).toEqual(0);
  });

  it("should return the number of the pins that have been knocked down", function(){
    game.roll(5);
    game.roll(2);
    expect(game.score()).toEqual(7);
  })

  it("scores a gutter game", function(){
    for (var i = 0; i < 20; i++) {
      game.roll(0);
    }
    expect(game.score()).toEqual(0);
  })
  
});