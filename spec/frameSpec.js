'use strict';

describe('Frame', function(){
  var frame;

  beforeEach(function(){
    frame = new Frame();
  });

  it("starts with 0 score on each roll", function(){
    expect(frame.roll1).toEqual(0);
    expect(frame.roll2).toEqual(0);
  });
});