'use strict';

describe('Tests scoreCard', function() {

  var scorecard;

  beforeEach(function() {
    scorecard = new Scorecard();
  });

  it('expects scorecard to exist', function() {
    expect(scorecard instanceof Scorecard).toBeTruthy;
  });

  it('expects score to return 0', function() {
    var n = 20;
    var pins = 0;
    for (var i = 0; i < n; i++) scorecard.roll(pins);
    expect(scorecard.score()).toEqual(0);
  });

  it('expects score to return 20', function() {
    for (var i = 0; i < 20; i++) scorecard.roll(1);
    expect(scorecard.score()).toEqual(20);
  });

});
