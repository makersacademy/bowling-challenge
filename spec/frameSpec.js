"use strict";

describe('Frame', function(){
  var frame;

  beforeEach(function(){
    frame = new Frame();
  });

  describe('score', function(){
    it('starts with a score of zero', function(){
      expect(frame.score).toEqual(0);
    })

    it('increments the score cumulatively', function(){
      frame.bowl();
      expect(frame.score).toEqual(10);
      frame.bowl();
      expect(frame.score).toEqual(20);
    })
  });

  describe('bowling', function(){
    it('bowls a ball', function(){
      expect(frame.bowl()).toMatch("You bowled a ball");
      expect(frame.score).toEqual(10);
    });
  });

});
