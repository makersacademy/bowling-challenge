describe("Game", function() {
  var game;

  beforeEach(function() {
    game = new Game();
  });

  it("should start with zero points", function() {
    expect(game.score).toEqual(0);
  });

  it("should be able to increase the score when ball is rolled", function() {
    game.rollBall(4);
    expect(game.score).toEqual(4);
  });

  it("should change frame after two rolls", function() {
    game.rollBall(4);
    game.rollBall(4);
    expect(game.frameNumber).toEqual(2);
  });

  it("should be able to tell how many pins were hit on each ball", function() {
    game.rollBall(5);
    expect(game.scoreBoard[1][0]).toEqual(5);
  });

  it("frame changes after a strike", function() {
    game.rollBall(10);
    expect(game.frameNumber).toEqual(2);
  });

  it("doubles score on next throw after a strike", function() {
    game.rollBall(10);
    game.rollBall(5);
    expect(game.scoreBoard[2][0]).toEqual(10);
  });

  it("doubles score if multiple stikes in a row", function() {
    game.rollBall(10);
    game.rollBall(10);
    game.rollBall(5);
    expect(game.scoreBoard[3][0]).toEqual(10);
  });

  it("can double score on next roll if spare", function() {
    game.rollBall(6);
    game.rollBall(4);
    game.rollBall(4);
    expect(game.scoreBoard[2][0]).toEqual(8);
  });

  it("can double score if spare is hit twice", function() {
    game.rollBall(6);
    game.rollBall(4);
    game.rollBall(4);
    game.rollBall(6);
    game.rollBall(4);
    expect(game.scoreBoard[3][0]).toEqual(8);
  });

  it("can only roll one additional ball if strike on last frame", function() {
    game.rollBall(10);
    game.rollBall(10);
    game.rollBall(10);
    game.rollBall(10);
    game.rollBall(10);
    game.rollBall(10);
    game.rollBall(10);
    game.rollBall(10);
    game.rollBall(10);
    game.rollBall(10);
    game.rollBall(10);
    expect(game.scoreBoard[10][1]).toEqual(20);
  });

  it("can only roll one additional ball if spare on last frame", function() {
    game.rollBall(10);
    game.rollBall(10);
    game.rollBall(10);
    game.rollBall(10);
    game.rollBall(10);
    game.rollBall(10);
    game.rollBall(10);
    game.rollBall(10);
    game.rollBall(10);
    game.rollBall(5);
    game.rollBall(5);
    game.rollBall(5);
    expect(game.scoreBoard[10][2]).toEqual(5);
  });
});
