'use strict';

describe('BowlingScore', function() {
  var bowlingScore;

  beforeEach(function() {
    // bowlingScore = new BowlingScore();
  });

  it("stores a 1 roll frame score", function(){
    bowlingScore = new BowlingScore(10);
    expect(bowlingScore.rollOne).toEqual(10);
    expect(bowlingScore.rollTwo).toEqual(null);
    expect(bowlingScore.rollThree).toEqual(null);
  });

  it("stores a 2 roll frame score", function(){
    bowlingScore = new BowlingScore(8,1);
    expect(bowlingScore.rollOne).toEqual(8);
    expect(bowlingScore.rollTwo).toEqual(1);
    expect(bowlingScore.rollThree).toEqual(null);
  });

  it("stores a 3 roll frame score", function(){
    bowlingScore = new BowlingScore(10,10,8);
    expect(bowlingScore.rollOne).toEqual(10);
    expect(bowlingScore.rollTwo).toEqual(10);
    expect(bowlingScore.rollThree).toEqual(8);
  });

  it("returns a frame score for 3 rolls", function(){
    bowlingScore = new BowlingScore(10,10,8);
    expect(bowlingScore.frameScore()).toEqual(28);
  });

  it("returns a frame score for 2 rolls", function(){
    bowlingScore = new BowlingScore(5,2);
    expect(bowlingScore.frameScore()).toEqual(7);
  });
});
