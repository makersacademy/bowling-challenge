describe('Frame', function(){
  var frame;

  beforeEach(function(){
    frame = new Frame();

  });

  it('A frame begins with 10 pins standing', function(){
    expect(frame.getPinsStanding()).toEqual(10);
  });

  describe('#rollOne', function(){
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
  });

  describe('#rollTwo', function(){
    it('Updates knocked pins after roll', function(){
      spyOn(Math, "random").and.returnValue(0.49);
      frame.rollTwo();
      expect(frame.getKnockedPinsTwo()).toEqual(5);
    });
  });

  describe('#playFrame', function(){
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
