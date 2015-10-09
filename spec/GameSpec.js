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

  it("can calculate the roll total of each frame", function() {
    rollMany(2, 5);
    rollMany(2, 2);
    expect(game.rollsScore(0)).toEqual(10);
    expect(game.rollsScore(1)).toEqual(4);
  });

  it("can roll a gutter game", function() {
    rollMany(20, 0);
    expect(game.score()).toEqual(0);
  });

  it("can calculate the score for a game of ones", function() {
    rollMany(20,1);
    expect(game.score()).toEqual(20);
  });

  it("can determine if each frame game has a strike", function() {
    rollMany(1, 10);
    rollMany(2,4);
    expect(game.isStrike(0)).toEqual(true);
  });

  it("can determine if each frame game does not have a strike", function() {
    rollMany(2,5);
    rollMany(2,4);
    expect(game.isStrike(0)).toEqual(false);
  });

  it("can calculate the correct strike bonus", function() {
    rollMany(1, 10);
    rollMany(2,4);
    expect(game.strikeBonus(0)).toEqual(8);
  });

  it("can determine if each frame game has a spare", function() {
    rollMany(2,5);
    rollMany(2,4);
    expect(game.isSpare(0)).toEqual(true);
  });

  it("can determine if each frame game does not have a spare", function() {
    rollMany(2,3);
    rollMany(2,4);
    expect(game.isSpare(0)).toEqual(false);
  });

  it("can calculate the correct spare bonus", function() {
    rollMany(2,5);
    rollMany(2,4);
    expect(game.spareBonus(0)).toEqual(4);
  });

  it("can calculate the frame score", function() {
    rollMany(2,5);
    rollMany(2,4);
    expect(game.frameScore(0)).toEqual(14);
  });

  it("can calculate the score for a game with some strikes", function() {
    rollMany(1,10);
    rollMany(1,1);
    rollMany(1,3);
    rollMany(1,10);
    rollMany(14,2);
    expect(game.score()).toEqual(60);
  });

  it("can calculate a game with some spares", function() {
    rollMany(1,1);
    rollMany(1,8);
    rollMany(1,9);
    rollMany(1,1);
    rollMany(16,2);
    expect(game.score()).toEqual(53);
  });

  it("registers three rolls in the last frame if there's a strike", function() {
    rollMany(18,2);
    rollMany(1,10);
    rollMany(1,3);
    rollMany(1,4);
    expect(game.scoreBoard[9].rolls).toEqual([10,3,4]);
  });

  it("registers three rolls in the last frame if there's a spare", function() {
    rollMany(18,2);
    rollMany(1,3);
    rollMany(1,7);
    rollMany(1,4);
    expect(game.scoreBoard[9].rolls).toEqual([3,7,4]);
    expect(game.frameScore(9)).toEqual(14);
  });

  it("can roll a game of spares", function() {
    rollMany(21,5);
    expect(game.score()).toEqual(150);
  });

  it("can play a perfect game", function() {
    rollMany(12,10);
    expect(game.score()).toEqual(300);
  });

});
