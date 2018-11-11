'use strict';

describe('Frame', function(){
  var frame;

  let KNOCKED_FOUR_PINS = 4;

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

  describe('isIncomplete', function(){
    it("it shows if a frame is not complete", function(){
      let roll_4 = jasmine.createSpyObj('roll', ['getScore']);
      roll_4.getScore.and.callFake(function() { return KNOCKED_FOUR_PINS; });
      frame.addRoll(roll_4);
      expect(frame.isComplete()).toEqual(false); 
    });
  });
});
