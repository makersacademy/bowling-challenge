describe('Frame', function(){

  var frame

  beforeEach(function(){
    frame = new Frame();
    spyOn(frame, 'completeFrame');
  });

  describe('#currentScore', function(){
    it('should be empty array', function(){
      expect(frame.currentScore).toEqual([]);
    });
  });

  describe('#currentRoll', function(){
    it('should initialize on roll 1', function(){
      expect(frame.currentRoll).toEqual(1);
    });

    it('should record the second roll', function(){
      frame.roll(7);
      expect(frame.currentRoll).toEqual(2);
    });

    describe('#_addRoll', function(){
      it('should add to the currentRoll count', function(){
        frame._addRoll();
        expect(frame.currentRoll).toEqual(2);
      });
    });
  });

  describe('#pins', function(){
    it('each frame should start with 10 pins', function(){
      expect(frame.pins).toEqual(10);
    });
    describe('#getPins', function(){
      it('getPins should return number of standing pins', function(){
        expect(frame.getPins()).toEqual(frame.pins);
      });
    });
  });

  describe('#roll', function(){
    it('should reduce the number of standing pins', function(){
        frame.roll(4);
        expect(frame.getPins()).toEqual(6);
        expect(frame.currentScore).toContain(4);
    });

    it('should not allow more than 10 pins to fall', function(){
      frame.roll(8);
      expect(function() { frame.roll(3); }).toThrow('Frame score may not exceed 10');
      expect(frame.currentScore).toEqual([8]);
    });

    it('should record 0 pins', function(){
      frame.roll(0);
      frame.roll(0);
      expect(frame.currentScore).toContain(0,0)
    });
  });

  describe('#checkComplete', function(){
    it('should call completeFrame if two balls have rolled have rolled', function(){
        frame.roll(0);
        frame.roll(0);
        expect(frame.completeFrame).toHaveBeenCalled();
    });
    it('should return false if the frame is ongoing', function(){
      frame.roll(4);
      expect(frame._checkComplete()).toEqual(false);
    });
  });

  describe('#strike', function(){
    it('should end the frame if roll 1 hits 10', function(){
      frame.roll(10);
      expect(frame.completeFrame).toHaveBeenCalled();
    });
    it('should add 0 to the score', function(){
      frame.roll(10);
      expect(frame.currentScore).toEqual([10,0]);
    });
  });

  // describe('#frameComplete', function(){
  //   it('should reset the frame', function(){
  //     frame.roll(6);
  //     frame.roll(3);
  //     expect(frame.currentScore).
  // });

})
