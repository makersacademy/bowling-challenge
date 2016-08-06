describe('Frame', function(){
  var frame;

  beforeEach(function(){
    frame = new Frame();

  });

  it('A frame is incomplete when initialized', function(){
    expect(frame.isFrameFinished()).toBe(false);
  });
  it('A frame starts with roll 1 (potentially of 2)', function(){
    expect(frame.getRollNumber()).toEqual(1);
  });
  it('A frame begins with 10 pins standing', function(){
    expect(frame.getPinsStanding()).toEqual(10);
  });

  describe('Complete Frame', function(){
    it('Resets the roll number to 1', function(){
      frame.completeFrame();
      expect(frame.getRollNumber()).toEqual(1);
    });
    it('Marks the frame as finished', function(){
      frame.completeFrame();
      expect(frame.isFrameFinished()).toEqual(true);
    });
    it('Resets the pins so 10 are standing', function(){
      frame.rollOne();
      frame.completeFrame();
      expect(frame.getPinsStanding()).toEqual(10);
    });
  });

  describe('Roll One', function(){
    it('Updates knocked pins after roll', function(){
      spyOn(Math, "random").and.returnValue(0.49);
      frame.rollOne();
      expect(frame.getKnockedPins()).toEqual(5);
    });
    it('Updates the Roll Number to 2 after roll 1', function(){
      spyOn(Math, "random").and.returnValue(0.49);
      frame.rollOne();
      expect(frame.getRollNumber()).toEqual(2);
    });
    it('A frame ends if a strike is thrown in roll 1', function(){
      // Roll has to receive 10
      spyOn(Math, "random").and.returnValue(0.99);
      frame.rollOne();
      expect(frame.isFrameFinished()).toBe(true);
    });
  });

  describe('Roll Two', function(){
    // it('Roll 2 is used if a strike is not thrown in roll 1', function(){
    //   // Roll has to receive less than 10
    //   spyOn(Math, "random").and.returnValue(0.49);
    //   frame.roll();
    //   expect(frame.isFrameFinished()).toBe(true);
    // });
    it('Updates knocked pins after roll', function(){
      // Stub roll to receieve 7
      spyOn(Math, "random").and.returnValue(0.49);
      frame.rollTwo();
      expect(frame.getKnockedPins()).toEqual(5);
    });
    it('After roll 2 is used, the frame ends', function(){
      // Roll has to receive less than 10
      frame.rollTwo();
      expect(frame.isFrameFinished()).toBe(true);
    });
  });

});
