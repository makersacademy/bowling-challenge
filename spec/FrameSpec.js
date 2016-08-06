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

  describe('Roll One', function(){
    it('A frame ends if a strike is thrown in roll 1', function(){
      // Roll has to receive 10
      spyOn(Math, "random").and.returnValue(0.99);
      frame.rollOne();
      expect(frame.isFrameFinished()).toBe(true);
    });
    it('Updates knocked pins after roll', function(){
      spyOn(Math, "random").and.returnValue(0.49);
      frame.rollOne();
      expect(frame.knockedPins).toEqual(5);
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
      expect(frame.knockedPins).toEqual(5);
    });
    it('After roll 2 is used, the frame ends', function(){
      // Roll has to receive less than 10
      frame.rollTwo();
      expect(frame.isFrameFinished()).toBe(true);
    });
  });

});
