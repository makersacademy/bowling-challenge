describe("game", function() {
  var game;

  beforeEach(function() {
    game = new Game();
  });

  it("shows us the score of the game", function(){
    expect(game.viewScore()).toEqual(0);
  });

  it("shows us the score of a gutter game", function(){
    game.gutterGame()
    expect(game.viewScore()).toEqual(0);
  });

  it("shows us the score of a perfect game", function(){
    game.perfectGame()
      expect(game.viewScore()).toEqual(300);
  });

  it("user rolls a frame and adds the frame score to the game score ", function(){
    game.playFrameRoll(3,5)
      expect(game.viewScore()).toEqual(8);
  });

  it("error is user tries to roll more than ten frames", function(){
    expect(function() {
      for (i = 0; i < 10; i++){
      game.playFrameRoll(3,5);
    };
      game.playFrameRoll(3,5);
    }).toThrowError("Cannot exceed 10 frames");
  });

  it("user strikes a frame and adds the frame score to the game score ", function(){
    game.playFrameStrike();
      expect(game.viewScore()).toEqual(10);
  });

  it("error is user tries to strike more than ten frames", function(){
    expect(function() {
      for (i = 0; i < 10; i++){
      game.playFrameStrike();
    };
      game.playFrameStrike();
    }).toThrowError("Cannot exceed 10 frames");
  });
});
