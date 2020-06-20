'use strict';

describe('Frame class', function(){
  var frame;
  var game;
  beforeEach(function(){
    frame = new Frame ();
    game = jasmine.createSpyObj('game', ['sharingInfoAboutFrames'])
    // frame1 = new Frame ();
    // frame2 = new Frame ();
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
  describe('possible errors to be raised', function(){
    it('raises error if points given to single roll > 10', function(){
      expect(function(){frame.firstRoll(11);}).toThrowError('invalid amount of points for single roll');
      expect(function(){frame.secondRoll(11);}).toThrowError('invalid amount of points for single roll');
    });
    it('raises error if, with the second roll, the total frame points get greater than 10', function(){
      frame.firstRoll(9);
      expect(function(){frame.secondRoll(2);}).toThrowError('invalid amount of points for single frame');
    });
  });

  describe('strike', function(){
    it('knows if the frame is a strike', function(){
      frame.firstRoll(10);
      expect(frame._isAStrike()).toBe(true);
    });
    it('knows if the frame is NOT a strike', function(){
      frame.firstRoll(2);
      expect(frame._isAStrike()).not.toBe(true);
    });
  });
});
