'use strict';

describe('Frame', function() {

  let frame;

  beforeEach(function() {
    frame = new Frame();
  })

  describe('frame rolls', function(){
    it('starts at 0', function() {
      expect(frame.getCurrentScore()).toEqual(0);
    })

    it('saves a roll value when user inputs two rolls', function() {
      frame.knockedDownPins(4);
      frame.knockedDownPins(3);
      expect(frame.getRolls()).toContain(4);
      expect(frame.getRolls()).toContain(3);
    })

    it('value not saved if knocked down pins >10', function(){
      frame.knockedDownPins(11);
      expect(frame.getCurrentScore()).toEqual(0);
    })

    it('does not save a roll value if the knocked down pins add to more than 10', function(){
      frame.knockedDownPins(4);
      frame.knockedDownPins(8);
      expect(frame.getCurrentScore()).toEqual(4);
    })

    it('does not save a roll value if there are more than 2 rolls in a frame', function(){
      frame.knockedDownPins(4);
      // console.log(frame.getCurrentScore(), frame.validateFrameLength())
      frame.knockedDownPins(3);
      // console.log(frame.getCurrentScore(), frame.validateFrameLength())
      frame.knockedDownPins(2);
      // console.log(frame.getCurrentScore(), frame.validateFrameLength())
      frame.knockedDownPins(1);
      // console.log(frame.getCurrentScore(), frame.validateFrameLength())
      expect(frame.getRolls()).toEqual([4,3]);
    })
  })

  describe('frame score', function(){
    it('shows the score when a player rolls 2 and 6', function() {
      frame.knockedDownPins(2);
      frame.knockedDownPins(6);
      expect(frame.getCurrentScore()).toEqual(8);
    })

  })  

  describe('frame strike', function(){
    it('knows if it is a strike', function() {
      expect(frame.strike).toEqual(false);
      frame.knockedDownPins(10);
      expect(frame.strike).toEqual(true);
    })
  })

  describe('frame spare', function(){
    it('knows if it is a spare', function(){
      expect(frame.spare).toEqual(false);
      frame.knockedDownPins(2);
      frame.knockedDownPins(8);
      
      expect(frame.spare).toEqual(true);
    })
  })
})