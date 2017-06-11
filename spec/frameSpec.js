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
      frame.score = 10
      spyOn(frame, "bowl").and.callFake(function(){
        this.score += 5
      });
      frame.bowl();
      expect(frame.bowl).toHaveBeenCalled();
      expect(frame.score).toEqual(15);
    })
  });

});
