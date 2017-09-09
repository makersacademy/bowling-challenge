describe("Game", function() {

  var game;

  beforeEach(function() {
    game = new Game();
  });

  it("should return the number of the pins that have been knocked down", function(){
    game.roll(5);
    game.roll(2);
    for (var i = 0; i < 18; i++) {
      game.roll(0);
    };
    expect(game.score()).toEqual(7);
  });

  it("scores a gutter game", function(){
    for (var i = 0; i < 20; i++) {
      game.roll(0);
    };
    expect(game.score()).toEqual(0);
  });

  it("rolls 3 every turns", function(){
    for (var i = 0; i < 20; i++) {
      game.roll(3);
    };
    expect(game.score()).toEqual(60);
  });

  it("rolls a spare", function(){
    game.roll(3);
    game.roll(7);
    game.roll(2);
    for (var i = 0; i < 17; i++) {
      game.roll(1);
    };
    expect(game.score()).toEqual(31);
  })

});