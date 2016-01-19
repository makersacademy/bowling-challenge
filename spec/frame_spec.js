describe('Frame', function(){

  var frame

  beforeEach(function(){
    frame = new Frame();
  });

  describe('#getResults', function(){
    it('should return the current score', function(){
      expect(frame.getResults()).toEqual(frame.results);
    });
  });

  describe('#roll', function(){
    it('should reduce the number of standing pins', function(){
      frame.roll(4);
      expect(frame.pins).toEqual(6);
    });

    it('should increase the roll count', function(){
      frame.roll(7);
      expect(frame.currentRoll).toEqual(2);
    });

    describe('edge cases', function(){
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
    })
  });

  describe('#isComplete', function(){
    it('should return true if the frame is complete', function(){
      frame.roll(10);
      expect(frame.isComplete()).toEqual(true);
    });
  });

  describe('bonuses', function(){
    describe('#getBonus', function(){
      it('should return the current bonus', function(){
        expect(frame.getBonus()).toEqual(frame.bonus);
      });
    });
    describe('#_isStrike', function(){
      it('should record 10 pin bowl as a strike', function(){
        frame.roll(10);
        expect(frame.getBonus()).toEqual(2);
        expect(frame.results).toContain(10, 0);
      });
    });
    describe('#_isSpare', function(){
      it('should record 2 10 pin bowls as a strike', function(){
        frame.roll(5);
        frame.roll(5);
        expect(frame.getBonus()).toEqual(1);
      });
    });
  });
});
