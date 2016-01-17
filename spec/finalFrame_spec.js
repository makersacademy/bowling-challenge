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

  describe('#checkComplete', function(){
    it('should be complete if a pin is left after 2 bowls', function(){
      fFrame.roll(3);
      fFrame.roll(3);
      expect(fFrame.checkComplete()).toEqual(true);
    })
    it('should not be complete if first is strike', function(){
      fFrame.roll(10);
      expect(fFrame.checkComplete()).toEqual(false);
    })
    it('should not be complete if first 2 is spare', function(){
      fFrame.roll(5);
      fFrame.roll(5);
      expect(fFrame.checkComplete()).toEqual(false);
    })
  })

});
