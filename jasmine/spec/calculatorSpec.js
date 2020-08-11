'use strict';

describe ('calculator', function() {

  var calculator;
  var scorecard;

  beforeEach(function() {
    calculator = new Calculator()
    scorecard = new Scorecard()
  });

  it('adds up the correct score for no spares or strikes', function() {
    for (var i = 0; i < 21; i++) {
      scorecard.addRoll(4);
    }
    expect(calculator.totalScore(scorecard)).toEqual(80);
  });

  it('adds the correct bonus score for a spare', function() {
    for (var i = 0; i < 21; i++) {
      scorecard.addRoll(5);
    }
    expect(calculator.totalScore(scorecard)).toEqual(150)
  });

  it('adds the correct bonus score for a strike', function() {
    for (var i = 0; i < 21; i++) {
      scorecard.addRoll(10);
    }
    expect(calculator.totalScore(scorecard)).toEqual(300)
  });

  it('adds the correct bonus score for a mix of roll results', function() {
    scorecard.addRoll(5);
    scorecard.addRoll(1);
    scorecard.addRoll(9);
    scorecard.addRoll(1);
    scorecard.addRoll(10);
    scorecard.addRoll(5);
    scorecard.addRoll(5);
    scorecard.addRoll(10);
    scorecard.addRoll(10);
    scorecard.addRoll(1);
    scorecard.addRoll(2);
    scorecard.addRoll(0);
    scorecard.addRoll(8);
    scorecard.addRoll(10);
    scorecard.addRoll(1);
    scorecard.addRoll(9);
    scorecard.addRoll(6);

    expect(calculator.totalScore(scorecard)).toEqual(147)
  });


});