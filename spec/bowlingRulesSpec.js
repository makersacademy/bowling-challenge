'use strict';

describe('bowlingRules', function() {
  var bowlingRules;
  var scoreArrayTest
  var turnHash


  beforeEach(function() {
    bowlingRules = new BowlingRules();
  });

  it('returns 1 when 1 pin knocked down on first role and sets next turn to 2', function() {
    scoreArrayTest = bowlingRules.takeTurn(1,1)
    turnHash = scoreArrayTest[1]
    expect(turnHash.nextTurn).toEqual(2)
    expect(turnHash.pins1stRole).toEqual(1)
    expect(turnHash.displayPins1stRole).toEqual("1")
  });

  it('returns X when 1 pin knocked down on first role and sets next turn to 3', function() {
    scoreArrayTest = bowlingRules.takeTurn(1,10)
    turnHash = scoreArrayTest[1]
    expect(turnHash.nextTurn).toEqual(3)
    expect(turnHash.pins1stRole).toEqual(10)
    expect(turnHash.displayPins1stRole).toEqual("X")
  });

  it('returns 1 into 2nd variable when role =1 on second roles', function() {
    bowlingRules.takeTurn(1,1)
    scoreArrayTest = bowlingRules.takeTurn(2,1)
    var turnHash = scoreArrayTest[1]
    expect(turnHash.nextTurn).toEqual(3)
    expect(turnHash.pins2ndRole).toEqual(1)
    expect(turnHash.displayPins2ndRole).toEqual("1")
  });
  
  it('returns /(spare) variable when score = 10 on second role', function() {
    bowlingRules.takeTurn(1,1)
    scoreArrayTest = bowlingRules.takeTurn(2,9)
    var turnHash = scoreArrayTest[1]
    expect(turnHash.nextTurn).toEqual(3)
    expect(turnHash.pins2ndRole).toEqual(9)
    expect(turnHash.displayPins2ndRole).toEqual("/")
  });

  it('can hanldle three or more roles', function() {
    bowlingRules.takeTurn(1,6)
    bowlingRules.takeTurn(2,3)
    scoreArrayTest = bowlingRules.takeTurn(3,4)
    var turnHash = scoreArrayTest[2]
    expect(turnHash.nextTurn).toEqual(4)
    expect(turnHash.pins1stRole).toEqual(4)
    expect(turnHash.displayPins2ndRole).toEqual("")
  });
  
  it('can hanldle more than threeroles', function() {
    bowlingRules.takeTurn(1,1)
    bowlingRules.takeTurn(2,3)
    bowlingRules.takeTurn(3,4)
    scoreArrayTest = bowlingRules.takeTurn(4,5)
    var turnHash = scoreArrayTest[2]
    expect(turnHash.nextTurn).toEqual(5)
    expect(turnHash.pins2ndRole).toEqual(5)
    expect(turnHash.displayPins2ndRole).toEqual("5")
  });


});