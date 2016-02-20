'use strict';

describe("Frame",function(){
  var frame, START_PINS;

  beforeEach(function(){
    frame = new Frame();
    START_PINS = frame.START_PINS;
  });

  describe("addRoll",function(){
    it("each roll is added to a frame",function(){
      frame.addRoll(4)
      expect(frame.rolls.length).toEqual(1);
    });

    it("a roll cannot be higher than the total number of pins starting",function(){
      expect(function(){frame.addRoll(START_PINS+1)}).toThrow('Value exceeds number of pins');
    });

    it("each roll cannot be higher than the number of pins available",function(){
      frame.addRoll(5)
      expect(function(){frame.addRoll(frame.pinsLeft()+1)}).toThrow('Value exceeds number of pins');
    });

    it("if a ten is rolled in the first roll, the next roll is automatically a zero",function(){
      frame.addRoll(10);
      expect(frame.rolls.length).toEqual(2);

    });
  });
});
