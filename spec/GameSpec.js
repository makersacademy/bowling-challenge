describe("Game", function() {
  var game

  beforeEach(function() {
    game = new Game(Frame, LastFrame);
  });

  it("should have default value 10 frames", function() {
    expect(game.frames.length).toEqual(10);
  });

  it("should have initial score 0", function() {
    game.calculateScore()
    expect(game.gameScore).toEqual(0);
  });

  it("should start at frame 1", function() {
    expect(game.currentFrame).toEqual(0);
  });

  it("should be able receive a roll", function() {
    game.bowl(1);
    expect(game.frames[0].frameRolls[0]).toEqual(1);
  });

  it("should increment the current turn by one after each roll", function() {
    game.bowl(1);
    expect(game.currentRoll).toEqual(1);
  });

  it("should update record the score after each frame", function() {
    game.bowl(1);
    game.bowl(2);
    game.calculateScore()
    expect(game.gameScore).toEqual(3);
  });

  it("should increment the frame count after the frame is finished", function() {
    game.bowl(1);
    expect(game.currentFrame).toEqual(0);
    game.bowl(2);
    expect(game.currentFrame).toEqual(1);
  });

  it("should increment the frame after a strike", function() {
    game.bowl(10);
    expect(game.currentFrame).toEqual(1);
  });

  it("can check if previous frame is a spare", function() {
    game.bowl(6);
    game.bowl(4);
    expect(game._isPreviousFrameSpare()).toBe(true);
  });

  it("can check if previous frame is a strike", function() {
    game.bowl(10);
    expect(game._isPreviousFrameStrike()).toBe(true);
  });

  it("should add a bonus of next ball score to the current frame score if current round is a spare", function() {
    game.bowl(9);
    game.bowl(1);
    game.bowl(2);
    game.bowl(3);
    expect(game.frameScores[0]).toEqual(12)
  });

  it("should add a bonus of both next ball scores to the current frame score if current round is a strike", function() {
    game.bowl(10);
    game.bowl(1);
    game.bowl(2);
    expect(game.frameScores[0]).toEqual(13)
  });

  it("can check when the game is over with three rolls in final round", function() {
    for(i = 0; i < 12; i++) {
      game.bowl(10);
    };
    expect(game.isGameOver()).toBe(true);
  });

  it("can check when the game is over with two rolls in final round", function() {
    for(i = 0; i < 20; i++) {
      game.bowl(3);
    };
    expect(game.isGameOver()).toBe(true);
  });

  it("should be able to roll a perfect game", function() {
    for(i = 0; i < 12; i++) {
      game.bowl(10);
    };
    game.calculateScore()
    expect(game.gameScore).toEqual(300);
  });

  it("should correctly calculate the example game score", function() {
    game.bowl(1);
    game.bowl(4);
    game.bowl(4);
    game.bowl(5);
    game.bowl(6);
    game.bowl(4);
    game.bowl(5);
    game.bowl(5);
    game.bowl(10);
    game.bowl(0);
    game.bowl(1);
    game.bowl(7);
    game.bowl(3);
    game.bowl(6);
    game.bowl(4);
    game.bowl(10);
    game.bowl(2);
    game.bowl(8);
    game.bowl(6);
    game.calculateScore()
    expect(game.gameScore).toEqual(133);
  });

  it("should not accept any more rolls when game is over", function() {
    for(i = 0; i < 20; i++) {
      game.bowl(3);
    };
    expect(function(){game.bowl(3);}).toThrow("Game is already over");
  });


});


