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
      expect(frame.rolls).toEqual([10,0]);
    });
  });

  describe("tenth frame",function(){
    it("specialFrame accepts addroll",function(){
      var frame2 = new Frame('specialFrame');
      frame2.addRoll(5);
      expect(frame2.rolls.length).toEqual(1);
    });

    it("accepts three rolls",function(){
      var frame2 = new Frame('specialFrame');
      frame2.addRoll(10);
      frame2.addRoll(2);
      frame2.addRoll(7);
      expect(frame2.rolls.length).toEqual(3);
    });

    it("each roll cannot be higher than the number of pins available",function(){
      var frame2 = new Frame('specialFrame');
      frame2.addRoll(5)
      expect(function(){frame2.addRoll(frame.pinsLeft()+1)}).toThrow('Value exceeds number of pins');
    });
  });

  describe("frameOver when number of rolls equals max rolls",function(){
    it("a normal frame is over after two rolls",function(){
      frame.addRoll(4);
      frame.addRoll(4);
      expect(frame.isOver()).toEqual(true);
    });

    it("a special frame is over after three rolls given a strike",function(){
      var frame2 = new Frame('specialFrame');
      frame2.addRoll(10);
      frame2.addRoll(2);
      frame2.addRoll(7);
      expect(frame2.isOver()).toEqual(true);
    });

    it("a special frame is over after two rolls if not special is rolled",function(){
      var frame2 = new Frame('specialFrame');
      frame2.addRoll(4);
      frame2.addRoll(2);
      expect(frame2.isOver()).toEqual(true);
    });
  });
});
