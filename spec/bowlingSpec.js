// 'use strict';

describe("BowlingCard", function() {
  var bowlingcard;
  beforeEach(function() {
  bowlingcard = new BowlingCard();
});


  it('should start with a score of 0', function() {
    expect(bowlingcard.score).toEqual(0);
  });

  it('should be able to update the score', function() {
    expect(bowlingcard.updateScore(5)).toEqual(5);
  });
});
