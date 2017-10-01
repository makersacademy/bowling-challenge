'use strict';

describe('Frame', function(){
  var frame;

  describe('when not a strike', function(){
    beforeEach(function(){
      frame = new Frame([4,3]);
    });

    it('is defined', function(){
      expect(frame).toBeDefined();
    });

    it('calculates the total score', function(){
      frame.calculateScore();
      expect(frame._score).toEqual(7);
    });
  });

  describe('when a strike', function(){
    it('accounts for a Strike', function(){
      frame = new Frame([10,0]);
      frame.calculateScore();
      expect(frame.isStrike).toEqual(true);
    });
  });
});
