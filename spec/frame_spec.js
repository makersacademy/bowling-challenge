describe('Frame', function(){

  var frame

  beforeEach(function(){
    frame = new Frame();
  });

  describe('#results', function(){
    it('should be empty array', function(){
      expect(frame.results).toEqual([]);
    });
    describe('#getResults', function(){
      it('should return the current score', function(){
        expect(frame.getResults()).toEqual(frame.results);
      });
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
    it('should start with 10 pins', function(){
      expect(frame.pins).toEqual(10);
    });
  });

  describe('#roll', function(){
    it('should reduce the number of standing pins', function(){
        frame.roll(4);
        expect(frame.pins).toEqual(6);
    });

    it('should not allow more than 10 pins to fall', function(){
      frame.roll(8);
      expect(function() { frame.roll(3); }).toThrow('Frame score may not exceed 10');
      expect(frame.results).toEqual([8]);
    });

    it('should not allow more than 2 bowls', function(){
      frame.roll(8);
      frame.roll(1);
      expect(function() { frame.roll(3); }).toThrow('Only two bowls per frame');
    });

    it('should record 0 pins', function(){
      frame.roll(0);
      frame.roll(0);
      expect(frame.results).toEqual([0,0]);
    });
  });

  describe('#checkComplete', function(){
    it('should return false if the frame is ongoing', function(){
      frame.roll(4);
      expect(frame.checkComplete()).toEqual(false);
    });
  });

  describe('#strike', function(){

    it('should add 0 to the score', function(){
      frame.roll(10);
      expect(frame.results).toContain(10, 0);
    });
  });

  describe('#isStrike', function(){
    it('should report a frame as a strike', function(){
      expect(frame.isStrike(10)).toEqual(true);
    })
  });

  describe('#isSpare', function(){
    it('should report a frame as a spare', function(){
      frame.roll(5);
      frame.roll(5);
      expect(frame.isSpare()).toEqual(true);
    })
  });

})
