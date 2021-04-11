describe('Frame', function(){
  var frame;

  beforeEach(function(){
    frame = new Frame();
  });

  describe('recognising a strike', function(){
    it('returns true if the first roll is 10', function(){
      expect(frame.strike(10)).toEqual(true);
    });
    it('returns false if the first roll is not 10', function(){
      expect(frame.strike(4)).toEqual(false);
    });
  });
  describe('recognising a spare', function(){
    it('returns true if the rolls equal 10, e.g. 3 and 7', function(){
      expect(frame.spare(3,7)).toEqual(true);
    });
    it('returns false if the rolls do not equal 10, e.g. 3 and 3', function(){
      expect(frame.spare(3,3)).toEqual(false);
    });
  });
  describe('calculating a bonus', function(){
    it('returns a bonus of 2, given a strike', function(){
      expect(frame.calcBonus(10,null)).toEqual(2);
    });
    it('returns a bonus of 1, given a spare', function(){
      expect(frame.calcBonus(3,7)).toEqual(1);
    });
    it('returns a bonus of 0, if there is no strike or spare', function(){
      expect(frame.calcBonus(2,3)).toEqual(0);
    });
  });

});
