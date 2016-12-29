'use strict';

describe ("Scoreboard", function() {
  var scoreboard
  var game

  beforeEach(function(){
    scoreboard = new Scoreboard()
    game = jasmine.createSpy("Game")
  })

  it("Should initialize with an empty scores array", function(){
    expect(scoreboard.scores).toEqual([])
  })

  it("should initialize with an empty totalScores array", function(){
    expect(scoreboard.totalScores).toEqual([])
  })

  it("should initialize with a calculated total of 0", function(){
    expect(scoreboard.totalCalculated).toEqual(0)
  })

  it("it should initialize with the maximum pins a player can knock down in one throw", function(){
    expect(scoreboard.MAXIMUM).toEqual(10)
  })

  it("should place the first roll score result into the scores array", function(){
    scoreboard.scoreFirstRoll(4)
    expect(scoreboard.scores).toContain(4)
  })

  it("should place the second roll score result into the scores array", function(){
    scoreboard.scoreSecondRoll(3)
    expect(scoreboard.scores).toContain(3)
  })

  it("should place the bonus third roll score into the scores array", function(){
    scoreboard.scoreBonusRoll(5)
    expect(scoreboard.scores).toContain(5)
  })

  it("should place the total of each set of rolls", function(){
    scoreboard.scoreFirstRoll(10)
    scoreboard.scoreSecondRoll(0)
    scoreboard.bonusPoints()
    scoreboard.scoreFirstRoll(2)
    scoreboard.scoreSecondRoll(1)
    scoreboard.bonusPoints()
    expect(scoreboard.totalScores).toEqual([13, 3])
  })

  it("should return the calculation of two consecutive throws", function(){
    scoreboard.scoreFirstRoll(4)
    scoreboard.scoreSecondRoll(3)
    scoreboard.bonusPoints()
    scoreboard.calculatedTotal()
    expect(scoreboard.totalCalculated).toEqual(7)
  })

  it("should place the calculated score into the totalScores array", function(){
    scoreboard.scoreFirstRoll(5)
    scoreboard.scoreSecondRoll(1)
    scoreboard.calculateScores()
    expect(scoreboard.totalScores).toContain(6)
  })

  it("should return of a calculated score of a strike and the next two consecutive throws", function(){
    scoreboard.scoreFirstRoll(10)
    scoreboard.scoreSecondRoll(0)
    scoreboard.bonusPoints()
    scoreboard.scoreFirstRoll(5)
    scoreboard.scoreSecondRoll(1)
    expect(scoreboard._aStrike()).toEqual(16)
  })

  it("should place the total scores of three consecutive throws (first a strike) to totalScores", function(){
    scoreboard.scoreFirstRoll(10)
    scoreboard.scoreSecondRoll(0)
    scoreboard.bonusPoints()
    scoreboard.scoreFirstRoll(5)
    scoreboard.scoreSecondRoll(1)
    scoreboard.bonusPoints()
    expect(scoreboard.totalScores).toEqual([16, 6])
  })

  it("should return the calculated result of two consecutive strikes and score of roll one", function(){
    scoreboard.scoreFirstRoll(10)
    scoreboard.scoreSecondRoll(0)
    scoreboard.bonusPoints()
    scoreboard.scoreFirstRoll(10)
    scoreboard.scoreSecondRoll(0)
    scoreboard.bonusPoints()
    scoreboard.scoreFirstRoll(5)
    scoreboard.scoreSecondRoll(1)
    scoreboard.bonusPoints()
    expect(scoreboard.totalScores).toEqual([25, 16, 6])
  })

  it("should return 30 when three strikes are scored in a row", function(){
    scoreboard.scoreFirstRoll(10)
    scoreboard.scoreSecondRoll(0)
    scoreboard.bonusPoints()
    scoreboard.scoreFirstRoll(10)
    scoreboard.scoreSecondRoll(0)
    scoreboard.bonusPoints()
    scoreboard.scoreFirstRoll(10)
    scoreboard.scoreSecondRoll(0)
    scoreboard.bonusPoints()
    expect(scoreboard.totalScores).toEqual([30])
  })


  it("should add the result of the calculation of the spare and the first roll of the next set to totalScores", function(){
    scoreboard.scoreFirstRoll(2)
    scoreboard.scoreSecondRoll(8)
    scoreboard.bonusPoints()
    scoreboard.scoreFirstRoll(1)
    scoreboard.scoreSecondRoll(8)
    scoreboard.bonusPoints()
    expect(scoreboard.totalScores).toEqual([11,9])
  })

  it("should call the function strike when score is 10", function(){
    scoreboard.scoreFirstRoll(10)
    scoreboard.scoreSecondRoll(0)
    scoreboard.bonusPoints()
    scoreboard.scoreFirstRoll(3)
    scoreboard.scoreSecondRoll(4)
    scoreboard.bonusPoints()
    scoreboard.scoreFirstRoll(10)
    scoreboard.scoreSecondRoll(0)
    scoreboard.bonusPoints()
    scoreboard.scoreFirstRoll(5)
    scoreboard.scoreSecondRoll(5)
    scoreboard.bonusPoints()
    scoreboard.scoreFirstRoll(10)
    scoreboard.scoreSecondRoll(0)
    scoreboard.bonusPoints()
    scoreboard.scoreFirstRoll(5)
    scoreboard.scoreSecondRoll(3)
    scoreboard.bonusPoints()
    scoreboard.scoreFirstRoll(7)
    scoreboard.scoreSecondRoll(0)
    scoreboard.bonusPoints()
    expect(scoreboard.totalScores).toEqual([17, 7, 20, 20, 18, 8, 7])
  })

  it("should return the total score of all the scores", function(){
    scoreboard.totalScores = [17, 7, 20, 20, 18, 8, 7]
    expect(scoreboard.calculatedTotal()).toEqual(97)
  })

  it("should return Gutter Game! when total score is 0", function(){
    scoreboard.totalScores = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    expect(scoreboard.calculatedTotal()).toEqual("Gutter Game!")
  })

  it("should return Perfect Game! when total score is 300", function(){
    scoreboard.totalScores = [30, 30, 30, 30, 30, 30, 30, 30, 30, 30]
    expect(scoreboard.calculatedTotal()).toEqual("Perfect Game!")
  })

  it("should return Perfect Game! when total score is 300", function(){
    var i = 0;
     do {
       scoreboard.scoreFirstRoll(10)
       scoreboard.scoreSecondRoll(0)
       scoreboard.bonusPoints()
       i++;
     }
     while (i <12);
    expect(scoreboard.calculatedTotal()).toEqual("Perfect Game!")
  });



});
