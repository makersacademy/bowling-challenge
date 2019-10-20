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

  });
});
