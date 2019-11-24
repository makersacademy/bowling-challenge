'use strict';

describe('Frame', function(){
  var frame;

  beforeEach(function(){
    frame = new Frame();
  });

  it('has 10 pins by default', function(){
    expect(frame.pincount()).toEqual(10);
  });

  it('has a score of 0 by default', function(){
    expect(frame.score()).toEqual(0);
  });

  it('gives 1 point per pin knocked down', function(){
    frame.roll(4);
    expect(frame.pincount()).toEqual(6);
  });

  it('can only have 2 rolls per frame', function(){
    frame.rollcount = 2;
    expect( function(){frame.roll(3); } ).toThrow(new Error("Only 2 rolls per frame!"));
  });

  it('is a strike if 10 pins knocked down in first roll', function(){
    frame.firstroll = 10;
    expect(frame.strike()).toBe(true);
  });

  it('is a spare if 10 pins knocked down in 2 rolls', function(){
    frame.firstroll = 5;
    frame.secondroll = 5;
    expect(frame.spare()).toBe(true);
  });
});
