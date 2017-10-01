'use strict';

describe('Frame', function(){
  var frame;

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
