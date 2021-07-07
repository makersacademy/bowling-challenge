describe("Game Scorecard", function() {
  var game;

  beforeEach(function() {
    game = new Game();
  });

  it("should return total score as 0 for a gutter game", function() {
    for (var i = 0; i < 20; i++) {
      game.inputBallValue(0);
    };
    expect(game.showTotalPoints()).toEqual(0);
  });

  it("should not be possible to start an 11th frame", function(){
    for (var i = 0; i < 20; i++) {
      game.inputBallValue(0);
    };
    expect(function() {game.inputBallValue(0);} ).toThrow(new Error("You have completed your scorecard - start a new game."));
  });

  it("should return total score for a non-gutter game", function() {
    var scoreArray = [3, 4, 7, 2, 5, 4, 3, 2, 0, 7, 6, 2, 1, 3, 6, 2, 8, 1, 6, 0]
    for (var i = 0; i < scoreArray.length; i++) {
      game.inputBallValue(scoreArray[i])
    }
    expect(game.showTotalPoints()).toEqual(72);
  });

  it("should return total score for a non-gutter game with bonuses for spares", function() {
    var scoreArray = [3, 7, 7, 2, 5, 4, 3, 2, 0, 7, 6, 4, 1, 9, 6, 2, 8, 1, 6, 0]
    for (var i = 0; i < scoreArray.length; i++) {
      game.inputBallValue(scoreArray[i])
    }
    expect(game.showTotalPoints()).toEqual(97);
  });

  it("should return total score for a non-gutter game with bonuses for single strikes", function(){
    var scoreArray = [3, 7, 7, 2, 5, 4, 10, null, 0, 7, 6, 4, 1, 9, 6, 2, 8, 1, 6, 0]
    for (var i = 0; i < scoreArray.length; i++) {
      game.inputBallValue(scoreArray[i])
    }
    expect(game.showTotalPoints()).toEqual(109);
  });

  it("should return total score for a non-gutter game with bonuses for double strikes", function(){
    var scoreArray = [3, 7, 7, 2, 5, 4, 10, null, 10, null, 6, 4, 1, 9, 6, 2, 8, 1, 6, 0]
    for (var i = 0; i < scoreArray.length; i++) {
      game.inputBallValue(scoreArray[i])
    }
    expect(game.showTotalPoints()).toEqual(131);
  });

  it("should throw an error if you try bowl a bonus ball without getting a spare or strike in the final frame", function(){
    var scoreArray = [3, 7, 7, 2, 5, 4, 10, null, 10, null, 6, 4, 1, 9, 6, 2, 8, 1, 6, 0]
    for (var i = 0; i < scoreArray.length; i++) {
      game.inputBallValue(scoreArray[i])
    }
    expect(function() {game.inputBallValue(6);} ).toThrow(new Error("You have completed your scorecard - start a new game."));
  });

  it("should be possible to throw a bonus ball if you get a spare in the final frame", function(){
    var scoreArray = [3, 7, 7, 2, 5, 4, 10, null, 10, null, 6, 4, 1, 9, 6, 2, 8, 1, 6, 4, 6]
    for (var i = 0; i < scoreArray.length; i++) {
      game.inputBallValue(scoreArray[i])
    }
    expect(game.showTotalPoints()).toEqual(141);
  });

  it("should be possible to throw two bonus ball if you get a strike in throw of the final frame", function(){
    var scoreArray = [3, 7, 7, 2, 5, 4, 10, null, 10, null, 6, 4, 1, 9, 6, 2, 8, 1, 10, 4, 6]
    for (var i = 0; i < scoreArray.length; i++) {
      game.inputBallValue(scoreArray[i])
    }
    expect(game.showTotalPoints()).toEqual(145);
  });

});
