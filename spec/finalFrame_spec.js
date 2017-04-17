describe('Final Frame', function(){

  var fFrame;

  beforeEach(function(){
    fFrame = new FinalFrame();
  });

  describe('inheritance', function(){
    it('should have the same properties as a frame', function(){
      expect(fFrame.currentRoll).toEqual(1);
      expect(fFrame.pins).toEqual(10);
      expect(fFrame.results).toEqual([]);
    });
  });

  describe('#getBonus', function(){
    it('should be 0', function(){
      fFrame.roll(3);
      fFrame.roll(3);
      expect(fFrame.getBonus()).toEqual(0);
    })
    it('should be 1 if spare', function(){
      fFrame.roll(5);
      fFrame.roll(5);
      expect(fFrame.getBonus()).toEqual(1);
    })
    it('should be 1 if strike', function(){
      fFrame.roll(10);
      expect(fFrame.getBonus()).toEqual(1);
    })
  })

  describe('#pinReset', function(){
    it('should reset pins if strike', function(){
      fFrame.roll(10);
      expect(fFrame.pins).toEqual(10);
    });
    it('should reset pins if spare', function(){
      fFrame.roll(5);
      fFrame.roll(5);
      expect(fFrame.pins).toEqual(10);
    });
  });

  describe('#isComplete', function(){
    it('should complete after 2 normal rolls', function(){
      fFrame.roll(3);
      fFrame.roll(3);
      expect(fFrame.isComplete()).toEqual(true);
    });
    it('should complete after a spare and 1 bonus', function(){
      fFrame.roll(5);
      fFrame.roll(5);
      expect(fFrame.isComplete()).toEqual(false);
      fFrame.roll(5);
      expect(fFrame.isComplete()).toEqual(true);
    });
    it('should complete after a strike and 1 bonus', function(){
      fFrame.roll(10);
      fFrame.roll(10);
      expect(fFrame.isComplete()).toEqual(false);
      fFrame.roll(10);
      expect(fFrame.isComplete()).toEqual(true);
    });
  });
});
