"use strict";

describe('Frame', function(){
  var frame;

  beforeEach(function(){
    frame = new Frame();
  })

  it('score starts with 0', function(){
    expect(frame.score).toEqual(0);
  })

  it('adds to score when playing', function(){
    frame.play(5);
    expect(frame.score).toEqual(5);
  })

  it('ends after second throw', function () {
    frame.play(5);
    frame.play(4);
    expect(frame.isComplete).toBeTruthy();
  })

  it('ends after strike', function(){
    frame.play(10);
    expect(frame.isComplete).toBeTruthy();
  })

  it('isSpare', function () {
    frame.play(5);
    frame.play(5);
    expect(frame.isSpare).toBeTruthy();
  })

  it('isStrike', function(){
    frame.play(10);
    expect(frame.isStrike).toBeTruthy();
  })

  it('keeps shots history', function(){
    frame.play(4);
    frame.play(5);
    expect(frame.shotsHistory).toEqual([4,5]);
  })

  describe('isLastFrame', function(){
    it('three shots if first is a strike', function(){
      frame.isLastFrame = true;
      frame.play(10);
      expect(frame.shotsAllowed).toEqual(3);
    })

    it('three shots if spare', function(){
      frame.isLastFrame = true;
      frame.play(5);
      frame.play(5);
      expect(frame.shotsAllowed).toEqual(3);
    })

    it('can play third shot', function(){
      frame.isLastFrame = true;
      frame.play(5);
      frame.play(5);
      frame.play(5);
      expect(frame.score).toEqual(15);
      expect(frame.shotsHistory).toEqual([5,5,5])
    })
  })
})
