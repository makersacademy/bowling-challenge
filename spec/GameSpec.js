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
    addSpare();
    expect(game.bonusCount).toBe(1);
  });

  it("returns the total sum of all the scores", function() {
    game.frames[0].push(1,2);
    game.addScore(6);
    expect(game.total()).toEqual(9);
  });

  it("should add the bonus scores from strikes or spares", function() {
    strikeAndTwoScores();
    expect(game.total()).toEqual(24);
  });

  it("doesn't add anymore frames after the 10th frame", function() {
    for (var i = 0; i < 20; i++) {
      game.addScore(3);
    }
    game.addScore(3);
    expect(game.frames.length).toEqual(10);
  });

  it("doesn't allow more than 3 scores in the 10th frame", function() {
    addNineFrames();
    addTripleStrike();
    game.addScore(10);
    expect(game.frames[9].length).toEqual(3);
  });

  it("allows extra throws when scoring a strike on the 10th frame", function() {
    addNineFrames();
    strikeAndTwoScores();
    expect(game.frames[9].length).toEqual(3);
  });

  it("allows an extra throw when scoring a spare on the 10th frame", function() {
    addNineFrames();
    addSpare();
    game.addScore(3);
    expect(game.frames[9].length).toEqual(3);
  });

  it("allows a triple strike in the 10th frame", function() {
    for (var i = 0; i < 18; i++) {
      game.addScore(3);
    }
    addTripleStrike();
    expect(game.frames[9].length).toEqual(3);
  });

  var addSpare = function() {
    game.addScore(6);
    game.addScore(4);
  };

  var addTripleStrike = function() {
    game.addScore(10);
    game.addScore(10);
    game.addScore(10);
  };

  var addNineFrames = function() {
    for (var i = 0; i < 18; i++) {
      game.addScore(3);
    }
  };

  var strikeAndTwoScores = function() {
    game.addScore(10);
    game.addScore(4);
    game.addScore(3);
  };

});
