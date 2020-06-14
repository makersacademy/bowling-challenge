'use strict';

describe('Frame class', function(){
  var frame;
  beforeEach(function(){
    frame = new Frame ();
  });
  it('when created has 2 properties - roll1,roll2 - equal to null and 2 methods for visualizing them', function(){
    expect(frame.pointsFirstRoll()).toEqual(null);
    expect(frame.pointsSecondRoll()).toEqual(null);
  });
  it('has a method to assign points to the first roll', function(){
  frame.firstRoll(5);
  expect(frame.pointsFirstRoll()).toEqual(5);
  });
  it('has a method to assign points to the second roll', function(){
    frame.secondRoll(2);
    expect(frame.pointsSecondRoll()).toEqual(2);
  });
  it('is determining the basic frame total pts, without considering bonus pts', function(){
    frame.firstRoll(3);
    frame.secondRoll(4);
    expect(frame.totPointsBeforeBonus()).toEqual(7);
  });
});
