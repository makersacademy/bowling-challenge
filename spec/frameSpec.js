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
  });

});
