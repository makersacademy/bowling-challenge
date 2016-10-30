describe("Game", function() {
  var game;

  beforeEach(function(){
    game = new Game();
  });

  it("should create a new frame", function () {
    game.addScore(5);
    expect(game.frames.length).not.toBe(0);
  });

  it("should add the user's score to the frame", function () {
    game.addScore(5);
    expect(game.frames[0][0]).toBe(5);
  });

});
