'use strict';

describe('Frame', function() {

  var frame;

  beforeEach(function() {
    frame = new Frame;
  });

  describe('Bowl', function() {
    it('adds score to first bowl on first go',  function(){
      frame.bowl(5);
      expect(frame.firstBowl()).toEqual(5);
    });

    it('adds score to second bowl on second go', function(){
      frame.bowl(5);
      frame.bowl(2);
      expect(frame.secondBowl()).toEqual(2);
    });
  });

  describe('Complete', function(){
    it('starts off incomplete', function(){
      expect(frame.isComplete()).toBe(false);
    });

    it('is true when 2 bowls have happened', function() {
      frame.bowl(5);
      frame.bowl(2);
      expect(frame.isComplete()).toBe(true);
    });
  });

  describe('Strike', function(){
    it('knows when it is a strike', function(){
      frame.bowl(10);
      expect(isAStrike()).toBe(true);
    });

    it('knows when it is not a strike', function(){
      expect(isAStrike().toBe(false));
      frame.bowl(5);
      expect(isAStrike().toBe(false));
    });
  });


});
