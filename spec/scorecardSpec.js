'use strict';

describe('Tests scoreCard', function() {

  var scorecard;

  beforeEach(function() {
    scorecard = new Scorecard();
  });

  function rollMany(n, pins) {
    for (var i = 0; i < n; i++) scorecard.roll(pins);
  }

  it('expects scorecard to exist', function() {
    expect(scorecard instanceof Scorecard).toBeTruthy;
  });

  it('expects score to be 0 after 20 rolls of 0', function() {
    rollMany(20, 0);
    expect(scorecard.score()).toEqual(0);
  });

  it('expects score to be 20 after 20 rolls of 1', function() {
    rollMany(20, 1);
    expect(scorecard.score()).toEqual(20);
  });

  it('expects spare to be added to score', function() {
    scorecard.roll(4);
    scorecard.roll(6);
    scorecard.roll(4);
    scorecard.roll(6);
    scorecard.roll(3);
    rollMany(15, 0);
    expect(scorecard.score()).toEqual(30);
  });


});
