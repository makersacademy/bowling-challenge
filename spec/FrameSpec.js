describe('Frame', function(){
  var frame;

  beforeEach(function(){
    frame = new Frame();

  });

  it('A frame starts with roll 1 (potentially of 2)', function(){
    expect(frame.getRollNumber()).toEqual(1);
  });
  it('A frame begins with 10 pins standing', function(){
    expect(frame.getPinsStanding()).toEqual(10);
  });

  describe('Roll One', function(){
    it('Updates knocked pins after roll', function(){
      spyOn(Math, "random").and.returnValue(0.49);
      frame.rollOne();
      expect(frame.getKnockedPinsOne()).toEqual(5);
    });
    it('Updates the number of standing pins after roll', function(){
      spyOn(Math, "random").and.returnValue(0.49);
      frame.rollOne();
      expect(frame.getPinsStanding()).toEqual(5);
    });
    it('Updates the Roll Number to 2 after roll 1', function(){
      spyOn(Math, "random").and.returnValue(0.49);
      frame.rollOne();
      expect(frame.getRollNumber()).toEqual(2);
    });
    // Do we need this??
    it('A strike is noted if bowled on roll 1', function(){
      spyOn(Math, "random").and.returnValue(0.99);
      frame.rollOne();
      expect(frame.getStrike()).toBe(true);
    });
  });

  describe('Roll Two', function(){
    it('Updates knocked pins after roll', function(){
      spyOn(Math, "random").and.returnValue(0.49);
      frame.rollTwo();
      expect(frame.getKnockedPinsTwo()).toEqual(5);
    });
  });

  describe('Play Frame', function(){
    it('Returns the number of pins knocked down in each of rolls 1 and 2', function(){
      spyOn(Math, "random").and.returnValue(0.49);
      expect(frame.playFrame()).toEqual([5, 2])
    });
    it('Returns a 10 for the first element if a strike has been rolled', function(){
      spyOn(Math, "random").and.returnValue(0.99);
      expect(frame.playFrame()).toEqual([10,0]);
    });
  });

});
