describe("Game", function() {
  var game;

  beforeEach(function() {
    game = new Game();
  });

  it("should be able to roll a gutter game", function() {
    rollMany(0, 20);
    expect(game.score()).toEqual(0);
  });

  it("should be able to roll all ones", function() {
    rollMany(1, 20);
    expect(game.score()).toEqual(20);
  });

  it("should be able to roll a spare", function() {
    game.roll(8);
    game.roll(2);
    rollMany(1, 18);
    expect(game.score()).toEqual(29);
  });

  it("should be able to roll a strike", function() {
    game.roll(10);
    rollMany(1, 18);
    expect(game.score()).toEqual(30);
  });

  it("should be able to roll a perfect game", function() {
    rollMany(10, 12);
    expect(game.score()).toEqual(300);
  });




  function rollMany(rollScore, numberOfRolls) {
    for(var i = 0; i < numberOfRolls; i++){
      game.roll(rollScore);
    }
  }

});
