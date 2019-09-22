'use strict';

describe('BowlingScore', function() {

  beforeEach(function() {
    bowlingScore = new bowlingScore();
  });

  it("it stores a single frame score", function(){
    bowlingScore.setScore(10,10,10);
    expect(bowlingScore.rollOne).toEqual(10);
    expect(bowlingScore.rollTwo).toEqual(10);
    expect(bowlingScore.rollThree).toEqual(10);
  });
});
