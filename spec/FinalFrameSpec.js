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

});