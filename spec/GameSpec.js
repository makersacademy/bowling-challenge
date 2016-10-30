describe("Game", function() {
  var game;

  beforeEach(function(){
    game = new Game();
  });

  it("should create a new frame", function() {
    game.addScore(5);
    expect(game.frames.length).not.toBe(0);
  });

  it("should add the user's score to the frame", function() {
    game.addScore(5);
    expect(game.frames[0][0]).toBe(5);
  });

  it("should start a new frame after 2 throws", function() {
    game.frames[0].push(1,2);
    game.addScore(5);
    expect(game.frames.length).toBe(2);
  });

  it("should start a new frame after a strike", function() {
    game.addScore(10);
    game.addScore(1);
    expect(game.frames.length).toBe(2);
  });

  it("should add to the bonus count if the score was a strike", function() {
    game.addScore(10);
    expect(game.bonusCount).toBe(2);
  });

  it("should add to the bonus count if the score was a spare", function() {
    game.addScore(6);
    game.addScore(4);
    expect(game.bonusCount).toBe(1);
  });

  it("returns the total sum of all the scores", function() {
    game.frames[0].push(1,2);
    game.addScore(6);
    expect(game.total()).toEqual(9);
  });

});
