'use strict';

describe('BowlingManager', function(){
  var bowlingManager;

  beforeEach(function() {
    bowlingManager = new BowlingManager();
  });

  it("gives me a 1 frame match score", function(){
    expect(bowlingManager.matchScore(frames)).toEqual(10);
  });

});