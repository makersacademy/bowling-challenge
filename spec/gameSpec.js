describe("game", function() {
  var game;

  beforeEach(function() {
    game = new Game();
  });

  it("shows us the score of the game", function() {
    expect(game.viewScore()).toEqual(0);
  });

  it("shows us the score of a gutter game", function() {
    game.gutterGame()
    expect(game.viewScore()).toEqual(0);
  });

  it("shows us the score of a perfect game", function(){
    game.perfectGame()
      expect(game.viewScore()).toEqual(300);
  });

  it("rolls a frame and adds the frame score to the game score ", function(){
    game.playFrameRoll(3,5)
      expect(game.viewScore()).toEqual(8);
  });

  it("strikes a frame and adds the frame score to the game score ", function(){
    game.playFrameStrike()
      expect(game.viewScore()).toEqual(10);
  });
});
