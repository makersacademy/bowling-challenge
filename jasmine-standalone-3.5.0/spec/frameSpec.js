'use strict';

describe('Frame', function(){
  var frame;

  beforeEach(function(){
    frame = new Frame(1);
  });

  it('stores a number to identify itself', function(){
    expect(frame.NUMBER).toEqual(1)
  });

  describe('point storage', function(){
    it('starts with a total point score of zero', function(){
      expect(frame.returnpoints()).toEqual(0)
    });
    it('starts with empty scores for the first and second rolls', function(){
      expect(frame.roll1).toEqual(0)
      expect(frame.roll2).toEqual(0)
    });
    it('can store a non-strike result as a first roll', function(){
      frame.firstroll(5)
      expect(frame.roll1).toEqual(5)
    });
    it('can store a non-split result as a second roll', function(){
      frame.secondroll(3)
      expect(frame.roll2).toEqual(3)
    });
    it('can add the result of a non-bonus pair of rolls', function(){
      frame.firstroll(3)
      frame.secondroll(6)
      expect(frame.POINTS).toEqual(9)
    });

  });
});
