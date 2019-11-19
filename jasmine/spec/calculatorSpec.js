'use strict';

describe ('calculator', function() {

  var calculator;
  var scorecard;

  beforeEach(function() {
    calculator = new Calculator()
    scorecard = new Scorecard()
  });

  it('adds up the total score', function() {
    for (var i = 0; i < 21; i++) {
      scorecard.addRoll(4);
    }
    expect(calculator.totalRollScore(scorecard)).toEqual(80);
  });

  // it('adds the correct bonus score for a spare', function() {
  //   scorecard.addRoll(5)
  //   scorecard.addRoll(5)
  //   scorecard.addRoll(5)
  //   scorecard.addRoll(4)
  //   expect(calculator.calculateScore(scorecard.frames)).toEqual(24)
  // });

});