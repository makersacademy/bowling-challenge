'use strict';

describe('Frame', function(){
  var frame;
  frame = new Frame(1,[10],30);

  it('has starting nr = 1', function(){
    expect(frame.nr).toEqual(1);
  });

  it('has 10 knocked down pins in 1 rolls', function(){
    expect(frame.rolls).toEqual([10]);
  });

  it('has a score of 30', function(){
    expect(frame.intScore).toEqual(30);
  });
});
