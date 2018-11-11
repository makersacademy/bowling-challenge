'use strict';

describe('Frame', function(){
  var frame;

  let KNOCKED_FOUR_PINS = 4;
  let KNOCKED_SIX_PINS = 6;
  let KNOCKED_TEN_PINS = 10;

  beforeEach(function(){
    frame = new Frame();
  });

  describe('addRoll', function(){
    it('can add rolls', function(){
      expect(frame.addRoll).toBeDefined();
    });
  });

  describe('getRolls', function(){
    it('can return the rolls', function(){
      let roll_4 = jasmine.createSpyObj('roll', ['getScore']);
      roll_4.getScore.and.callFake(function() { return KNOCKED_FOUR_PINS; });
      frame.addRoll(roll_4);
      expect(frame.getRolls()[0]).toEqual(roll_4);
    });
  });

  describe('isComplete', function(){
    it("shows if a frame is not complete", function(){
      let roll_4 = jasmine.createSpyObj('roll', ['getScore']);
      roll_4.getScore.and.callFake(function() { return KNOCKED_FOUR_PINS; });
      frame.addRoll(roll_4);
      expect(frame.isComplete()).toEqual(false);
    });
  });

  describe('isStrike', function(){
    it("shows if a frame is a strike", function(){
      let roll_10 = jasmine.createSpyObj('roll', ['getScore']);
      roll_10.getScore.and.callFake(function() { return KNOCKED_TEN_PINS; });
      frame.addRoll(roll_10);
      expect(frame.isStrike()).toEqual(true);
    });

    it("shows if a frame is a strike", function(){
      let roll_4 = jasmine.createSpyObj('roll', ['getScore']);
      roll_4.getScore.and.callFake(function() { return KNOCKED_FOUR_PINS; });
      frame.addRoll(roll_4);
      expect(frame.isStrike()).toEqual(false);
    });
  });

  describe('isSpare', function(){
    it("shows if a frame is a spare", function(){
      let roll_4 = jasmine.createSpyObj('roll', ['getScore']);
      roll_4.getScore.and.callFake(function() { return KNOCKED_FOUR_PINS; });
      let roll_6 = jasmine.createSpyObj('roll', ['getScore']);
      roll_6.getScore.and.callFake(function() { return KNOCKED_SIX_PINS; });
      frame.addRoll(roll_4);
      frame.addRoll(roll_6);
      expect(frame.isSpare()).toEqual(true);
    });

    it("shows if a frame is a spare", function(){
      let roll_4 = jasmine.createSpyObj('roll', ['getScore']);
      roll_4.getScore.and.callFake(function() { return KNOCKED_FOUR_PINS; });
      frame.addRoll(roll_4);
      expect(frame.isSpare()).toEqual(false);
    });
  });
});
