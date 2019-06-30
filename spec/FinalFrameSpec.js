"use strict";

describe('FinalFrame', function(){

  let finalFrame;

  beforeEach(function(){
    finalFrame = new FinalFrame();
  });

  it('allows a 3rd ball to be rolled if a strike or spare are rolled', function(){
    finalFrame.roll(3);
    finalFrame.roll(7);
    expect(finalFrame.isExtraRoll()).toBe(true);
  });

  it('calculates a final score correctly for 2 throw frame', function(){
    finalFrame.roll(3);
    finalFrame.roll(6);
    expect(finalFrame.totalScore()).toEqual(9);
  });

  it('calculates a final score correctly for 3 throw frame', function(){
    finalFrame.roll(4);
    finalFrame.roll(6);
    finalFrame.roll(5);
    expect(finalFrame.totalScore()).toEqual(15);
  });

  it('calculates a final score correctly for 3 strike frame', function(){
    finalFrame.roll(10);
    finalFrame.roll(10);
    finalFrame.roll(10);
    expect(finalFrame.totalScore()).toEqual(30);
  });

});