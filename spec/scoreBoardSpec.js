'use strict';

describe ("Scoreboard", function() {
  var scoreboard;
  var game;

  beforeEach(function(){
    scoreboard = new Scoreboard();
    game = jasmine.createSpy("Game");
  });

  it("Should initialize with an empty scores array", function(){
    expect(scoreboard.scores).toEqual([]);
  });

  it("should initialize with an empty totalScores array", function(){
    expect(scoreboard.totalScores).toEqual([]);
  });

  it("should place the first roll score result into the scores array", function(){
    scoreboard.scoreFirstRoll(4);
    expect(scoreboard.scores).toContain(4);
  });

  it("should return 'X' when a strike is scored", function(){
    expect(scoreboard.scoreFirstRoll(10)).toEqual('X');
  });

  it("should place the second roll score result into the scores array", function(){
    scoreboard.scoreSecondRoll(3);
    expect(scoreboard.scores).toContain(3);
  });

  it("should place the bonus third roll score into the scores array", function(){
    scoreboard.scoreThirdRoll(5);
    expect(scoreboard.scores).toContain(5);
  });

  it("should place the total of each set of rolls", function(){
    scoreboard.scoreFirstRoll(10);
    scoreboard.scoreSecondRoll(0);
    scoreboard.bonusPoints();
    scoreboard.scoreFirstRoll(2);
    scoreboard.scoreSecondRoll(1);
    scoreboard.bonusPoints();
    expect(scoreboard.totalScores).toEqual([13, 3])
  });

  it("should return the calculation of two consecutive throws", function(){
    scoreboard.scoreFirstRoll(4);
    scoreboard.scoreSecondRoll(3);
    scoreboard.bonusPoints();
    expect(scoreboard.calculateScores()).toEqual(7);
  });

  it("should place the calculated score into the totalScores array", function(){
    scoreboard.scoreFirstRoll(5);
    scoreboard.scoreSecondRoll(1);
    scoreboard.calculateScores();
    expect(scoreboard.totalScores).toContain(6);
  });

  it("should return of a calculated score of a strike and the next two consecutive throws", function(){
  scoreboard.scoreFirstRoll(10);
  scoreboard.scoreSecondRoll(0);
  scoreboard.bonusPoints();
  scoreboard.scoreFirstRoll(5);
  scoreboard.scoreSecondRoll(1);
  expect(scoreboard._aStrike()).toEqual(16);
  });

  it("should place the total scores of three consecutive throws (first a strike) to totalScores", function(){
    scoreboard.scoreFirstRoll(10);
    scoreboard.scoreSecondRoll(0);
    scoreboard.bonusPoints();
    scoreboard.scoreFirstRoll(5);
    scoreboard.scoreSecondRoll(1);
    scoreboard.bonusPoints();
    expect(scoreboard.totalScores).toEqual([16, 6])
  });

  it("should return the calculated result of two consecutive strikes and score of roll one", function(){
    scoreboard.scoreFirstRoll(10);
    scoreboard.scoreSecondRoll(0);
    scoreboard.bonusPoints();
    scoreboard.scoreFirstRoll(10);
    scoreboard.scoreSecondRoll(0);
    scoreboard.bonusPoints();
    scoreboard.scoreFirstRoll(5)
    scoreboard.scoreSecondRoll(1);
    scoreboard.bonusPoints();
    expect(scoreboard.totalScores).toEqual([25, 16, 6]);
  });

  it("should return 30 when three strikes are scored in a row", function(){
    scoreboard.scoreFirstRoll(10);
    scoreboard.scoreSecondRoll(0);
    scoreboard.bonusPoints();
    scoreboard.scoreFirstRoll(10);
    scoreboard.scoreSecondRoll(0);
    scoreboard.bonusPoints();
    scoreboard.scoreFirstRoll(10);
    scoreboard.scoreSecondRoll(0);
    scoreboard.bonusPoints();
    expect(scoreboard.totalScores).toContain(30);
  });

  // it("should return '/' when a spare is scored", function(){
  //   scoreboard.scoreFirstRoll(2)
  //   scoreboard.scoreSecondRoll(8);
  //   scoreboard.bonusPoints();
  //   expect(scoreboard._spare()).toEqual('/')
  // });
  //
  // it("should add the result of the calculation of the spare and the first roll of the next set to totalScores", function(){
  //   scoreboard.scoreFirstRoll(2);
  //   console.log(scoreboard.scores)
  //   scoreboard.scoreSecondRoll(8);
  //   console.log(scoreboard.scores)
  //   scoreboard.bonusPoints();
  //   console.log(scoreboard.scores)
  //   console.log(scoreboard.totalScores)
  //   scoreboard.scoreFirstRoll(1)
  //   scoreboard.scoreSecondRoll(8);
  //   scoreboard.bonusPoints();
  //     scoreboard.bonusPoints();
  //   console.log(scoreboard.scores)
  //   console.log(scoreboard.totalScores)
  //   expect(scoreboard.totalScores).toEqual([11,9])
  // });

  it("should call the function strike when score is 10", function(){
    scoreboard.scoreFirstRoll(10);
    scoreboard.scoreSecondRoll(0);
    scoreboard.bonusPoints();
    scoreboard.scoreFirstRoll(3);
    scoreboard.scoreSecondRoll(4);
    scoreboard.bonusPoints();
    scoreboard.scoreFirstRoll(10);
    scoreboard.scoreSecondRoll(0);
    scoreboard.bonusPoints();
    scoreboard.scoreFirstRoll(5);
    scoreboard.scoreSecondRoll(5);
    console.log(scoreboard.scores)
    scoreboard.bonusPoints();
    scoreboard.scoreFirstRoll(10);
    scoreboard.scoreSecondRoll(0);
    scoreboard.bonusPoints();
    scoreboard.scoreFirstRoll(5);
    scoreboard.scoreSecondRoll(3);
    scoreboard.bonusPoints();
    scoreboard.scoreFirstRoll(7);
    scoreboard.scoreSecondRoll(0);
    scoreboard.bonusPoints();
    expect(scoreboard.totalScores).toEqual([17, 7, 20, 20, 18, 8, 7]);
  });



});
