"use strict";

describe('Bowling', function() {

  var scorecard;

  beforeEach(function() {
    scorecard = new Scorecard();
  })

  
  it('score a guttergame', function() {
    rollMany(0, 20);
    expect(scorecard.totalScore).toEqual(0)
  });

  it('score 1', function () {
    rollMany(1, 20);
    expect(scorecard.totalScore).toEqual(20)
  });

  var rollMany = function (pins, rolls) {
    for (var i = 0; i < rolls; i++) {
      scorecard.addRoll(pins);
    }
  };
});