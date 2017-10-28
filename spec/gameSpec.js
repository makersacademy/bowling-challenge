describe("Game", function() {
  var game;

  beforeEach(function() {
    game = new Game();
  });

  it("start with a runningScore of 0", function() {
    expect(game.getScore()).toEqual(0);
  });

  it("start with a rollCount of 0", function() {
    expect(game.rollCount()).toEqual(0);
  });

  it("start with a Frame count of 1", function() {
    expect(game.frameCount()).toEqual(1);
  });

  it("update running score by the same amount pins going down", function() {
    game.roll(5)
    expect(game.getScore()).toEqual(5);
  });

  it("update _rollCount by the amount of times roll was called ", function() {
    game.roll(5);
    game.roll(2);
    expect(game.rollCount()).toEqual(2);
  });

  it("record when the roll hits STRIKE! ", function() {
    game.roll(10);
    expect(game.isStrike()).toEqual(true);
  });

  it("record when the roll does not hit STRIKE! ", function() {
    game.roll(9);
    expect(game.isStrike()).toEqual(false);
  });



  // it("update _frameCount when player rolls 2 times without hitting strikes/spares", function() {
  //   game.roll(5);
  //   game.roll(3);
  //   expect(game.frameCount()).toEqual(1)
  // });








});
