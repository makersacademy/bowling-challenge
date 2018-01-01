describe("Game", function(){

  var game;

  beforeEach(function() {
    game = new Game();
  });

  it("Rolls the ball in the gutter", function(){
    for (var i = 0; i < 20; i++){
      game.roll(0)
    }
    expect(game.score()).toEqual(0);
  });

  it("Rolls only ones during the whole set of frames", function() {
    for (var i = 0; i < 20; i++){
      game.roll(1)
    }
    expect(game.score()).toEqual(20);
  });

  it("Rolls a spare", function(){
    game.roll(5);
    game.roll(5);
    game.roll(3);

    for (var i = 0; i < 17; i++){
      game.roll(0)
    }
    expect(game.score()).toEqual(16);
  });

  it("Rolls a strike", function(){
    game.roll(10);
    game.roll(4);
    game.roll(4);

    for (var i = 0; i < 16; i++){
      game.roll(0)
    }
    expect(game.score()).toEqual(26);
  });

  it("Rolls only strikes during the whole set of frames", function() {
    for (var i = 0; i < 12; i++){
      game.roll(10)
    }
    expect(game.score()).toEqual(300);
  });
});
