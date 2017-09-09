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

  it("rolls 3 every turn", function(){
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
  });

  it("rolls a strike", function(){
    game.roll(10);
    game.roll(3);
    game.roll(3);
    for (var i = 0; i < 16; i++) {
      game.roll(1);
    };
    expect(game.score()).toEqual(38);
  });

  it("rolls a perfect score", function(){
    for (var i = 0; i < 12; i++) {
      game.roll(10);
    };
    expect(game.score()).toEqual(300);
  });

  it("rolls 1 strike and 2 standard turns in the 10th frame", function(){
    for (var i = 0; i < 18; i++) {
      game.roll(1);
    };
    game.roll(10);
    game.roll(1);
    game.roll(1);
    expect(game.score()).toEqual(30);
  });

  it("rolls 1 strike and 1 spare in the 10th frame", function(){
    for (var i = 0; i < 18; i++) {
      game.roll(1);
    };
    game.roll(10);
    game.roll(5);
    game.roll(5);
    expect(game.score()).toEqual(38);
  });

  it("rolls 1 spare and 1 standard turn in the 10th frame", function(){
    for (var i = 0; i < 18; i++) {
      game.roll(1);
    };
    game.roll(5);
    game.roll(5);
    game.roll(1);
    expect(game.score()).toEqual(29);
  });

  it("rolls 2 strikes and a standard turn in the 10th frame", function(){
    for (var i = 0; i < 18; i++) {
      game.roll(1);
    };
    game.roll(10);
    game.roll(10);
    game.roll(1);
    expect(game.score()).toEqual(39);
  });

  it("rolls 3 strikes in the 10th frame", function(){
    for (var i = 0; i < 18; i++) {
      game.roll(1);
    };
    game.roll(10);
    game.roll(10);
    game.roll(10);
    expect(game.score()).toEqual(48);
  });

});