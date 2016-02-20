'use strict';

describe("Frame",function(){
  var frame, START_PINS;

  beforeEach(function(){
    frame = new Frame();
    START_PINS = frame.START_PINS;
  });

  describe("addThrow",function(){
    it("each throw is added to a frame",function(){
      frame.addThrow(4)
      expect(frame.throws.length).toEqual(1);
    });

    it("a throw cannot be higher than the total number of pins starting",function(){
      expect(function(){frame.addThrow(START_PINS+1)}).toThrow('Value exceeds number of pins');
    });

    it("each throw cannot be higher than the number of pins available",function(){
      frame.addThrow(5)
      expect(function(){frame.addThrow(frame.pinsLeft()+1)}).toThrow('Value exceeds number of pins');
    });
  });
});
