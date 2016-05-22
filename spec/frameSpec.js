'use strict';

describe('Frame', function(){
  var frame;

  describe('tracks 2 rolls', function(){
    it('tracks 2 rolls', function(){
      frame = new Frame;
      frame.roll(5);
      frame.roll(8);
      expect(frame.getRolls()).toEqual([5,8]);
    });
  });
});
