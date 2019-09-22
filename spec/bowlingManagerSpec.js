'use strict';

describe('BowlingManager', function(){
  var bowlingManager;
  var frameScore;
  var frame;

  beforeEach(function() {
    bowlingManager = new BowlingManager();
    frame = [];
  });

  it("match score of 10 for 1 frame(8,2)", function(){
    frame.push(new BowlingScore(8,2));
    expect(bowlingManager.matchScore(frame)).toEqual(10);
  });

  it("match score of 19 for 2 frames (8,2 and 3,3)", function(){
    frame.push(new BowlingScore(8,2));
    frame.push(new BowlingScore(3,3));
    expect(bowlingManager.matchScore(frame)).toEqual(19);
  });

  it("match score of 18 for 2 frames (10 and 3,1)", function(){
    frame.push(new BowlingScore(10));
    frame.push(new BowlingScore(3,1));
    expect(bowlingManager.matchScore(frame)).toEqual(18);
  });

  it("match score of 41 for 3 frames (10, 10 and 3,1)", function(){
    frame.push(new BowlingScore(10));
    frame.push(new BowlingScore(10));
    frame.push(new BowlingScore(3,1));
    expect(bowlingManager.matchScore(frame)).toEqual(41);
  });

  it("match score of 136 for 6 frames (10 * 5 and 4,2)", function(){
    frame.push(new BowlingScore(10));
    frame.push(new BowlingScore(10));
    frame.push(new BowlingScore(10));
    frame.push(new BowlingScore(10));
    frame.push(new BowlingScore(10));
    frame.push(new BowlingScore(4,2));
    expect(bowlingManager.matchScore(frame)).toEqual(136);
  });

  it("match score of 300 for perfect game", function(){
    frame.push(new BowlingScore(10));
    frame.push(new BowlingScore(10));
    frame.push(new BowlingScore(10));
    frame.push(new BowlingScore(10));
    frame.push(new BowlingScore(10));
    frame.push(new BowlingScore(10));
    frame.push(new BowlingScore(10));
    frame.push(new BowlingScore(10));
    frame.push(new BowlingScore(10));
    frame.push(new BowlingScore(10,10,10));
    expect(bowlingManager.matchScore(frame)).toEqual(300);
  });

  it("match score of 291 for almost perfect game", function(){
    frame.push(new BowlingScore(10));
    frame.push(new BowlingScore(10));
    frame.push(new BowlingScore(10));
    frame.push(new BowlingScore(10));
    frame.push(new BowlingScore(10));
    frame.push(new BowlingScore(10));
    frame.push(new BowlingScore(10));
    frame.push(new BowlingScore(10));
    frame.push(new BowlingScore(10));
    frame.push(new BowlingScore(10,10,1));
    expect(bowlingManager.matchScore(frame)).toEqual(291);
  });

  it("match score of 263 for a good game", function(){
    frame.push(new BowlingScore(10));
    frame.push(new BowlingScore(10));
    frame.push(new BowlingScore(10));
    frame.push(new BowlingScore(10));
    frame.push(new BowlingScore(10));
    frame.push(new BowlingScore(10));
    frame.push(new BowlingScore(10));
    frame.push(new BowlingScore(10));
    frame.push(new BowlingScore(10));
    frame.push(new BowlingScore(5,4));
    expect(bowlingManager.matchScore(frame)).toEqual(263);
  });

  it("random scores should equal 166", function(){
    frame.push(new BowlingScore(4,6));
    frame.push(new BowlingScore(7,3));
    frame.push(new BowlingScore(5,2));
    frame.push(new BowlingScore(10));
    frame.push(new BowlingScore(3,7));
    frame.push(new BowlingScore(10));
    frame.push(new BowlingScore(5,4));
    frame.push(new BowlingScore(10));
    frame.push(new BowlingScore(10));
    frame.push(new BowlingScore(5,5,4));
    expect(bowlingManager.matchScore(frame)).toEqual(166);
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