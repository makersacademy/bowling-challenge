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

  it("returns a frame score for 1 roll", function(){
    bowlingScore = new BowlingScore(5);
    expect(bowlingScore.frameScore()).toEqual(5);
  });

  it("if its a spare, return true", function(){
    bowlingScore = new BowlingScore(6,4);
    expect(bowlingScore.isSpare()).toEqual(true);
    expect(bowlingScore.isStrike()).toEqual(false);
  });

  it("if its a strike, return true", function(){
    bowlingScore = new BowlingScore(10);
    expect(bowlingScore.isSpare()).toEqual(false);
    expect(bowlingScore.isStrike()).toEqual(true);
  });
});
