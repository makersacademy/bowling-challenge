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

  it("if 10 frames have already been played", function() {
    expect(function() {
      // for (i = 0; i === 10; i++){
      //   game.playFrameRoll(3,5);
      //   console.log(game.scores)
      // };
      game.playFrameRoll(3,5);
      game.playFrameRoll(3,5);
      game.playFrameRoll(3,5);
      game.playFrameRoll(3,5);
      game.playFrameRoll(3,5);
      game.playFrameRoll(3,5);
      game.playFrameRoll(3,5);
      game.playFrameRoll(3,5);
      game.playFrameRoll(3,5);
      game.playFrameRoll(3,5);
      game.playFrameRoll(3,5);
      console.log(game.scores)
    }).toThrowError("Cannot exceed 10 frames");
  });


  it("strikes a frame and adds the frame score to the game score ", function(){
    game.playFrameStrike()
      expect(game.viewScore()).toEqual(10);
  });
});
