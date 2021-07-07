'use strict';

describe('Frame', function() {

  var frame;

  beforeEach(function() {
    frame = new Frame();
  });

  it('hit one pin', function() {
    frame.rollTheball(1)
    expect(frame.total()).toEqual(1);
  });

  it('will return score for a frame', function() {
    frame.rollTheball(1)
    frame.rollTheball(1)
    expect(frame.total()).toEqual(2);
  });

  it('will return the frame I am on', function() {
    frame.rollTheball(1)
    frame.rollTheball(1)
    frame.rollTheball(1)
    frame.rollTheball(1)
    expect(frame.currentFrame()).toEqual(2);
  })

  it('will indicate that I have a strike', function() {
    frame.rollTheball(10)
    expect(frame.strikeCount().length).toEqual(1);
  })

  it('a strike will skip a frame', function() {
    frame.rollTheball(10)
    frame.rollTheball(1)
    expect(frame.currentFrame()).toEqual(2);
  })

  it('store values of rolls', function() {
    frame.rollTheball(10)
    frame.rollTheball(5)
    frame.rollTheball(4)
    expect(frame.rollValue(2)).toEqual(5);
  });

  it('apply strike bonus', function() {
    frame.rollTheball(10)
    frame.rollTheball(1)
    frame.rollTheball(1)
    expect(frame.total()).toEqual(14);
  });




  // it('will indicate that I have a spare', function() {
  //   frame.rollTheball(8)
  //   frame.rollTheball(2)
  //   expect(frame.spareCount().length).toEqual(1);
  // })
});
