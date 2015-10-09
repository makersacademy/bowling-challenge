describe("Game", function() {
  var game;

  beforeEach(function() {
    game = new Game();
  });

  function rollMany (n, pins) {
    for (var i = 0; i < n; i++) {
      game.roll(pins)
    }
  }

  it("starts each game with ten frames", function() {
    expect(game.scoreBoard.length).toEqual(10);
  });

  it("registers rolls for a frame", function() {
    rollMany(1, 5);
    rollMany(1, 2);
    expect(game.scoreBoard[0].rolls[0]).toEqual(5);
    expect(game.scoreBoard[0].rolls[1]).toEqual(2);
  });

  it("moves to roll number 2 when first roll has occurred", function() {
    rollMany(1,5);
    expect(game.rollNum).toEqual(2);
  });

  it("moves to roll number 1 when second roll has occurred", function() {
    rollMany(1,5);
    rollMany(1,5);
    expect(game.rollNum).toEqual(1);
  });

  it("goes to the next frame when player rolls a strike", function() {
    rollMany(1, 5);
    rollMany(1, 2);
    rollMany(1, 10);
    expect(game.frameNum).toEqual(2);
    expect(game.rollNum).toEqual(1);
  });

  it("can roll a gutter game", function() {
    rollMany(20, 0);
    expect(game.score()).toEqual(0);
  });

  it("can calculate the score for a game of ones", function() {
    rollMany(20,1);
    expect(game.score()).toEqual(20);
  });

  it("can calculate the score for a game with some strikes", function() {
    rollMany(1,10);
    rollMany(1,1);
    rollMany(1,3);
    rollMany(1,10);
    rollMany(14,2);
    expect(game.score()).toEqual(60);
  });

  it("can calculate the current total in the middle of a game", function() {
    rollMany(1,10);
    rollMany(1,2);
    rollMany(1,8);
    rollMany(1,3);
    rollMany(1,4);
    expect(game.score()).toEqual(40);
  });

  it("can calculate a game with some spares", function() {
    rollMany(1,1);
    rollMany(1,8);
    rollMany(1,9);
    rollMany(1,1);
    rollMany(16,2);
    expect(game.score()).toEqual(53);
  });

});
