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
    expect(game.frames[0][0][0]).toBe(5);
  });

  it("should start a new frame after 2 throws", function() {
    game.frames[0][0].push(1,2);
    game.addScore(5);
    expect(game.frames.length).toBe(2);
  });

  it("should start a new frame after a strike", function() {
    game.addScore(10);
    game.addScore(1);
    expect(game.frames.length).toBe(2);
  });

  it("should add the bonuses to the array if the score was a strike", function() {
    game.addScore(10);
    expect(game.frames[0][1]).toBe(2);
  });

  it("should add to the bonus count if the score was a spare", function() {
    addSpare();
    expect(game.frames[0][1]).toBe(1);
  });

  it("returns the total sum of all the scores", function() {
    game.addScore(1);
    game.addScore(2);
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
    expect(game.frames[9][0].length).toEqual(3);
  });

  it("allows extra throws when scoring a strike on the 10th frame", function() {
    addNineFrames();
    strikeAndTwoScores();
    expect(game.frames[9][0].length).toEqual(3);
  });

  it("allows an extra throw when scoring a spare on the 10th frame", function() {
    addNineFrames();
    addSpare();
    game.addScore(3);
    game.addScore(3);
    expect(game.frames[9][0].length).toEqual(3);
  });

  it("allows a triple strike in the 10th frame", function() {
    for (var i = 0; i < 18; i++) {
      game.addScore(3);
    }
    addTripleStrike();
    expect(game.frames[9][0].length).toEqual(3);
  });

  it("allows a gutter game (0 score)", function() {
    for (var i = 0; i < 20; i++) {
      game.addScore(0);
    }
    expect(game.total()).toEqual(0);
  });

  it("allows a perfect game (300 score)", function() {
    for (var i = 0; i < 12; i++) {
      game.addScore(10);
    }
    expect(game.total()).toEqual(300);
  });

  it("should output a score of 157", function() {
    var scores = [10, 8, 1, 8, 1, 8, 2, 8, 2, 5, 4, 9, 0, 2, 7, 10, 10, 10, 10];
    var i;
    for (i in scores) {
      game.addScore(scores[i]);
    }
    expect(game.total()).toEqual(157);
  });

  it("should output a score of 97", function() {
    var scores = [2, 7, 0, 6, 6, 4, 1, 0, 9, 1, 0, 0, 10, 4, 5, 7, 3, 8, 2, 4];
    var i;
    for (i in scores) {
      game.addScore(scores[i]);
    }
    expect(game.total()).toEqual(97);
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
