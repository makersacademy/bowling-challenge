describe("Game", function(){

  var game;

  beforeEach(function() {
    game = new Game();
  });

  it("Rolls the ball in the gutter", function(){
    for (var i = 0; i < 20; i++){
      game.roll(0)
    }
    expect(game.score()).toEqual(0)
  });

  it("Rolls only ones during the whole set of frames", function() {
    for (var i = 0; i < 20; i++){
      game.roll(1)
    }
    expect(game.score()).toEqual(20)
  });

  // it("plays and add points to score", function(){
  //   game.roll()
  //   game.addPoints()
  //   expect(game.score).toEqual(1)
  // });
});
