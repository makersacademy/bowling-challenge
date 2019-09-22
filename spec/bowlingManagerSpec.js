'use strict';

describe('BowlingManager', function(){
  var bowlingManager;
  var frameScore;

  beforeEach(function() {
    bowlingManager = new BowlingManager();
  });

  it("frame match score of 10 for 8,2", function(){
    frameScore = new BowlingScore(8,2);
    expect(bowlingManager.matchScore(frameScore)).toEqual(10);
  });

  it("frame match score of 6 for 3,3", function(){
    frameScore = new BowlingScore(3,3);
    expect(bowlingManager.matchScore(frameScore)).toEqual(6);
  });

  it("no more throws if roll 1+2 < 10 in 10th frame", function(){
    frameScore = new BowlingScore(6,2);
    expect(bowlingManager.anotherThrow(frameScore,10)).toEqual(false);
  });

  it("another throw true if first throw < 10", function(){
    frameScore = new BowlingScore(8);
    expect(bowlingManager.anotherThrow(frameScore)).toEqual(true);
  });

  it("another throw false if first throw = 10", function(){
    frameScore = new BowlingScore(10);
    expect(bowlingManager.anotherThrow(frameScore)).toEqual(false);
  });

  it("another throw false if had two throws", function(){
    frameScore = new BowlingScore(6,2);
    expect(bowlingManager.anotherThrow(frameScore)).toEqual(false);
  });

  it("another throw if only 1 throw, and 10th frame", function(){
    frameScore = new BowlingScore(10);
    expect(bowlingManager.anotherThrow(frameScore,10)).toEqual(true);
  });

  it("another throw if roll 1 and 2 > 10, in 10th frame", function(){
    frameScore = new BowlingScore(10,0);
    expect(bowlingManager.anotherThrow(frameScore,10)).toEqual(true);
  });

  it("no more throws if roll 1,2,3 taken in 10th frame", function(){
    frameScore = new BowlingScore(10,5,4);
    expect(bowlingManager.anotherThrow(frameScore,10)).toEqual(false);
  });

  it("no more throws if roll 1+2 < 10 in 10th frame", function(){
    frameScore = new BowlingScore(6,2);
    expect(bowlingManager.anotherThrow(frameScore,10)).toEqual(false);
  });

  it("another throw if roll 1+2 >= 10 in 10th frame", function(){
    frameScore = new BowlingScore(8,2);
    expect(bowlingManager.anotherThrow(frameScore,10)).toEqual(true);
  });

});