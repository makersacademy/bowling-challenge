'use strict';

describe('Frame', function(){
  var frame;

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
      let ROLL = { score: 6 };
      frame.addRoll(ROLL);
      expect(frame.getRolls()[0]).toEqual(ROLL);
    });
  });

  describe('isIncomplete', function(){
    it("it shows if a frame is incomplete",function(){
      let ROLL = { score: 6 };
      frame.addRoll(ROLL);
      expect(frame.isIncomplete()).toEqual(true); 
    });
  });
});
