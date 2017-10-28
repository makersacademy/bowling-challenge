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

  it("update _rollCount by the amount of times roll was called AND NO strikes!", function() {
    game.roll(5);
    game.roll(2);
    expect(game.rollCount()).toEqual(2);
  });

  it("reset _rollCount to 0 when hit strike", function() {
    game.roll(5);
    game.roll(2);
    game.roll(10);
    expect(game.rollCount()).toEqual(0);
  });

  it("record when the roll hits STRIKE! at a specific frame number", function() {
    game.roll(10);
    expect(game.isStrike(1)).toEqual(true);
  });

  it("record when the roll does not hit STRIKE! at a specific frame number ", function() {
    game.roll(9);
    expect(game.isStrike(1)).toEqual(false);
  });

  it("update _frameCount when player rolls 2 times without hitting strikes/spares", function() {
    game.roll(5);
    game.roll(3);
    expect(game.frameCount()).toEqual(2);
  });

  it("update _frameCount when player hits strike ", function() {
    game.roll(10);
    game.roll(10);
    expect(game.frameCount()).toEqual(3)
  });

  it("update _frameCount when player wins a spare after two rolls ", function() {
    game.roll(1);
    game.roll(9);
    expect(game.frameCount()).toEqual(2)
  });

  it("record spare when player wins a spare at a specific Frame number", function() {
    game.roll(1);
    game.roll(9);
    expect(game.isSpare(1)).toEqual(true);
  });

  it("shows the correct running score when no Strike or no Spare", function(){
    game.roll(5);
    game.roll(3);
    game.roll(6);
    game.roll(3);
    expect(game.getScore()).toEqual(17);
  });

  it("shows the correct score when the previous shot was a strike", function(){
    game.roll(10);
    game.roll(3);
    game.roll(6);
    expect(game.getScore()).toEqual(28);
  });

  it("shows the correct score when both previous shots were strikes", function(){
    game.roll(10);
    game.roll(10);
    game.roll(5);
    game.roll(3);
    expect(game.getScore()).toEqual(46)
  });

  it("shows the correct score when THREE previous shots were strikes", function(){
    game.roll(10);
    game.roll(10);
    game.roll(10);
    game.roll(5);
    game.roll(3);
    expect(game.getScore()).toEqual(66)
  });

  it("shows the correct score when previous roll grants a spare ", function(){
    game.roll(6);
    game.roll(4);
    game.roll(3);
    game.roll(4);
    expect(game.getScore()).toEqual(20)
  });

});
