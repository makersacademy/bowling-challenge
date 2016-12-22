'use strict';

describe("Scoreboard", function(){
  var scoreboard;
  var game;

  beforeEach(function(){
    scoreboard = new Scoreboard();
    game = jasmine.createSpy('game');
  });

  it("should intialize with an empty scores array", function(){
    expect(scoreboard.scores).toEqual([]);
  });

  it("should initialize with maximum score of 10", function(){
    expect(scoreboard.MAXPINS).toEqual(10);
  });

  it("should initialize with an empty array for all scores", function(){
    expect(scoreboard.allScores).toEqual([]);
  });

  it("should initialize with an empty current score array", function() {
    expect(scoreboard.currentScore).toEqual([]);
  });

  it("should initialize with a total current score of 0", function() {
    expect(scoreboard.totalCurrentScore).toEqual(0);
  });

  it("should return an array with the first current score", function() {
    scoreboard.scoreFirstRoll(4);
    expect(scoreboard.currentScore).toContain(4);
  });

  it("should return X if a 10 is scored on the first roll", function(){
    scoreboard.scoreFirstRoll(10);
    expect(scoreboard.scores).toContain('X')
  });

  it("should call the function a strike when score is 10", function(){
    scoreboard.scoreFirstRoll(10);
    scoreboard.scoreFirstRoll(4);
    scoreboard.scoreSecondRoll(3);
    scoreboard.calculateScore();
    scoreboard.bonusPoints();
    expect(scoreboard.scores).toEqual([17, 7]);
  });

  it("should return a / if score one and two equal 10", function(){
    scoreboard.scoreFirstRoll(4);
    scoreboard.scoreSecondRoll(6);
    scoreboard.calculateScore();
    expect(scoreboard.scores).toContain('/');
  });

  it("should call function spare when score one and score two equals 10", function(){
    scoreboard.scoreFirstRoll(4);
    scoreboard.scoreSecondRoll(6);
    scoreboard.calculateScore();
    scoreboard.refreshCurrentScores();
    scoreboard.bonusPoints();
    scoreboard.scoreFirstRoll(3);
    scoreboard.scoreSecondRoll(4);
    scoreboard.calculateScore();
    scoreboard.bonusPoints();
    expect(scoreboard.scores).toEqual([13, 7])
  });

  it("should call the function strike when score is 10", function(){
    scoreboard.scoreFirstRoll(10);
    scoreboard.bonusPoints();
    scoreboard.refreshCurrentScores();
    scoreboard.scoreFirstRoll(3);
    scoreboard.scoreSecondRoll(4);
    scoreboard.calculateScore();
    scoreboard.bonusPoints();
    scoreboard.refreshCurrentScores();
    scoreboard.scoreFirstRoll(10);
    scoreboard.bonusPoints();
    scoreboard.refreshCurrentScores();
    scoreboard.scoreFirstRoll(5);
    scoreboard.scoreSecondRoll(5);
    scoreboard.calculateScore();
    scoreboard.bonusPoints();
    scoreboard.refreshCurrentScores();
    scoreboard.scoreFirstRoll(10);
    scoreboard.bonusPoints();
    scoreboard.refreshCurrentScores();
    scoreboard.scoreFirstRoll(5);
    scoreboard.scoreSecondRoll(3);
    scoreboard.calculateScore();
    scoreboard.bonusPoints();
    scoreboard.refreshCurrentScores();
    scoreboard.scoreFirstRoll(7);
    scoreboard.scoreSecondRoll(0);
    scoreboard.calculateScore();
    scoreboard.bonusPoints();
    expect(scoreboard.scores).toEqual([17, 7, 20, 20, 18, 8, 7]);
  });


  it("should return X when 10 is scored on the first roll", function(){
    scoreboard.scoreFirstRoll(10);
    expect(scoreboard.scoreFirstRoll(10)).toEqual('X')
  });

  it("should return the result of the second roll", function(){
    expect(scoreboard.scoreSecondRoll(3)).toEqual(3);
  });

  it("should return the result for the third roll", function(){
    expect(scoreboard.scoreThirdRoll(5)).toEqual(5);
  });

  it("should return an array that contains the second score", function(){
    scoreboard.scoreSecondRoll(3);
    expect(scoreboard.currentScore).toContain(3)
  });

  it("should return an array of the first and second score", function(){
    scoreboard.scoreFirstRoll(4);
    scoreboard.scoreSecondRoll(3);
    expect(scoreboard.currentScore).toEqual([4,3])
  });

  it("should return a calculation of the current score per throw set", function(){
    scoreboard.currentScore = [4,3]
    scoreboard.calculateScore();
    expect(scoreboard.scores).toContain(7);
  });

  it("should result in 20 being logged in the scores when two strikes are scored", function(){
    scoreboard.scoreFirstRoll(10);
    scoreboard.bonusPoints();
    scoreboard.scoreFirstRoll(10);
    scoreboard.bonusPoints();
    expect(scoreboard.scores).toContain(20);
  });

  it("should result in the score containing 20 if a spare and then a strike is scored", function(){
    scoreboard.scoreFirstRoll(5);
    scoreboard.scoreSecondRoll(5);
    scoreboard.calculateScore();
    scoreboard.bonusPoints();
    scoreboard.refreshCurrentScores();
    scoreboard.scoreFirstRoll(10);
    scoreboard.bonusPoints();
    scoreboard.refreshCurrentScores();
    scoreboard.scoreFirstRoll(3);
    scoreboard.scoreSecondRoll(2);
    scoreboard.calculateScore();
    scoreboard.bonusPoints();
    scoreboard.refreshCurrentScores();
    expect(scoreboard.scores).toEqual([20, 15, 5])
  });

  it("should return a total of all score", function(){
    scoreboard.scores = [17, 7, 20, 15, 8, 7]
    expect(scoreboard.totalScore()).toEqual(74)
  });

  it("should return an empty array once score have been calculated", function(){
    scoreboard.scoreFirstRoll(4);
    scoreboard.scoreSecondRoll(3);
    scoreboard.calculateScore();
    scoreboard.refreshCurrentScores();
    expect(scoreboard.currentScore).toEqual([]);
  });

//   it("should return an array of all individual scores obtained", function(){
//     game.currentScore = [3,4]
//     scoreboard.calculateScore(game.currentScore);
//     expect(scoreboard.allScores).toEqual([[3,4]]);
//   });
//
//   it("should return a calculation of the current score per throw set", function(){
//     game.currentScore = ["X"]
//     scoreboard.calculateScore(game.currentScore);
//     expect(scoreboard.scores).toContain('0X');
//   });
//
//   it("should return the relevant function according to the score - 2 strikes", function(){
//     game.currentScore = ["X"];
//     scoreboard.calculateScore(game.currentScore);
//     scoreboard.currentTotal();
//     game.currentScore = ["X"];
//     scoreboard.calculateScore(game.currentScore);
//     scoreboard.currentTotal();
//     expect(scoreboard.scores).toContain(20);
//   });
//
//   it("should return the relevant function according to the score - strike", function(){
//     game.currentScore = ["X"]
//     scoreboard.calculateScore(game.currentScore);
//     scoreboard.currentTotal()
//     game.currentScore = [3,3]
//     scoreboard.calculateScore(game.currentScore);
//     scoreboard.currentTotal()
//     expect(scoreboard.scores).toContain(16);
//   });
//
//   it("should return the relevant function according to the score - spare", function(){
//     game.currentScore = [5,5]
//     scoreboard.calculateScore(game.currentScore);
//     scoreboard.currentTotal()
//     game.currentScore = [3,6]
//     scoreboard.calculateScore(game.currentScore);
//     scoreboard.currentTotal()
//     expect(scoreboard.scores).toContain(13);
//   });
//
//   it("should return the relevant function according to the score - spare", function(){
//     game.currentScore = [5,5];
//     scoreboard.calculateScore(game.currentScore);
//     scoreboard.currentTotal();
//     game.currentScore = ['X'];
//     scoreboard.calculateScore(game.currentScore);
//     scoreboard.currentTotal();
//     expect(scoreboard.scores).toContain(20);
//   });
//
//   it("should return the total score if no stikes or spares were scored", function(){
//     game.currentScore = [5,2];
//     scoreboard.calculateScore(game.currentScore);
//     scoreboard.currentTotal();
//     game.currentScore = [3,6];
//     scoreboard.calculateScore(game.currentScore);
//     expect(scoreboard.currentTotal()).toEqual(16);
//   });
//
//   it("should calculate current total", function() {
//     game.currentScore = [5,5]
//     scoreboard.calculateScore(game.currentScore);
//     scoreboard.bonusPoints();
//     game.currentScore = [3,6]
//     scoreboard.calculateScore(game.currentScore);
//     expect(scoreboard.currentTotal()).toEqual(22)
//   });
//
//   it("should return perfect score if total score is 300", function(){
//     game.currentScore = ["X"];
//     scoreboard.calculateScore(game.currentScore);
//     scoreboard.currentTotal();
//     game.currentScore = ["X"];
//     scoreboard.calculateScore(game.currentScore);
//     scoreboard.currentTotal();
//     game.currentScore = ["X"];
//     scoreboard.calculateScore(game.currentScore);
//     scoreboard.currentTotal();
//     game.currentScore = ["X"];
//     scoreboard.calculateScore(game.currentScore);
//     scoreboard.currentTotal();
//     game.currentScore = ["X"];
//     scoreboard.calculateScore(game.currentScore);
//     scoreboard.currentTotal();
//     game.currentScore = ["X"];
//     scoreboard.calculateScore(game.currentScore);
//     scoreboard.currentTotal();
//     game.currentScore = ["X"];
//     scoreboard.calculateScore(game.currentScore);
//     scoreboard.currentTotal();
//     game.currentScore = ["X"];
//     scoreboard.calculateScore(game.currentScore);
//     scoreboard.currentTotal();
//     game.currentScore = ["X"];
//     scoreboard.calculateScore(game.currentScore);
//     scoreboard.currentTotal();
//     game.currentScore = ["X"];
//     scoreboard.calculateScore(game.currentScore);
//     scoreboard.currentTotal();
//     game.currentScore = ["X"];
//     scoreboard.calculateScore(game.currentScore);
//     scoreboard.currentTotal();
//     game.currentScore = ["X"];
//     scoreboard.calculateScore(game.currentScore);
//     expect(scoreboard.currentTotal()).toEqual('Perfect Game!')
//   });
//
//   it("should return gutter game if total score is zero", function() {
//     expect(scoreboard.currentTotal()).toEqual('Gutter Game!')
//   });
//
//   it("should count the frames completed", function() {
//     scoreboard.allScores = ([[1,3]]);
//     scoreboard.increaseFrame();
//     expect(scoreboard.frameCount).toEqual(1)
//   });
//
});
