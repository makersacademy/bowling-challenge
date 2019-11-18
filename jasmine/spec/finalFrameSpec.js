'use strict';

describe ('finalframe', function() {

  var finalframe;

  beforeEach(function() {
    finalframe = new FinalFrame()
  });


  it ('is not completed when created', function() {
    expect(finalframe.isComplete()).toEqual(false);
  });

  it ('all rolls are set to 0 when created', function() {
    expect(finalframe.roll1).toBeNull();
    expect(finalframe.roll2).toBeNull();
    expect(finalframe.roll3).toBeNull();
  });

  it ('determines if a bonus roll is allowed', function() {
    var testCases = [
      {roll1: 5, roll2: 5, expected: true}, //example of a spare scenario, would allow a bonus roll
      {roll1: 10, roll2: 0, expected: false}, //example of a strike scenario where roll2 is less than 1, would not allow a bonus roll
      {roll1: 10, roll2: 1, expected: true}, //example of strike scenario that would allow a bonus roll
      {roll1: 10, roll2: 10, expected: true}, //example of strike scenario that would allow a bonus roll
      {roll1: 0, roll2: 10, expected: true}, //example of a spare scenario that would allow a bonus roll
      {roll1: 5, roll2: 4, expected: false} //example that would not allow bonus roll
    ];

    testCases.forEach(scenario => {
      finalframe.roll1 = scenario.roll1
      finalframe.roll2 = scenario.roll2
      expect(finalframe.isBonusRoll()).toEqual(scenario.expected)
    });

  });

  it('adds a score to roll1 when roll1 is null', function() {
    finalframe.addRoll(5);
    expect(finalframe.roll1).toEqual(5)
    expect(finalframe.roll2).toBeNull()
    expect(finalframe.roll3).toBeNull();
  });

  it('adds a score to roll2 when roll2 is null', function() {
    finalframe.addRoll(5);
    finalframe.addRoll(4);
    expect(finalframe.roll1).toEqual(5)
    expect(finalframe.roll2).toEqual(4)
    expect(finalframe.roll3).toBeNull();
  });

  it('if a bonus roll is allowed, it adds a score to roll3 when roll3 is null', function() {
    finalframe.addRoll(5);
    finalframe.addRoll(5);
    finalframe.addRoll(3);
    expect(finalframe.roll1).toEqual(5)
    expect(finalframe.roll2).toEqual(5)
    expect(finalframe.roll3).toEqual(3);
  });


});