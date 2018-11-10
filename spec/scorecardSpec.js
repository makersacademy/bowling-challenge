'use strict';

describe('Tests scoreCard', function() {

  var scorecard;

  beforeEach(function() {
    scorecard = new Scorecard();
  });

  function rollMany(n, pins) {
    for (var i = 0; i < n; i++) scorecard.roll(pins);
  }

  function rollSpare() {
    scorecard.roll(5);
    scorecard.roll(5);
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

  it('expects spare to add the next roll to current frame', function() {
    rollSpare();
    rollSpare();
    scorecard.roll(3);
    rollMany(15, 0);
    expect(scorecard.score()).toEqual(31);
  });

  it('expects a strike to add the next 2 rolls to current frame', function() {
    scorecard.roll(10);
    scorecard.roll(10);
    scorecard.roll(10);
    scorecard.roll(3);
    scorecard.roll(4);
    rollMany(16, 0);
    expect(scorecard.score()).toEqual(77);
  });

  it('checks for perfect score, all 10s', function() {
    rollMany(12, 10);
    expect(scorecard.score()).toEqual(300);
  });




});
