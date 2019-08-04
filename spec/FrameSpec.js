'use strict';

describe('Frame', function(){
  var frame;

  beforeEach(function(){
    frame = new Frame;
  });

  it('returns the number of throws', function(){
    expect(frame.throwChecker()).toEqual(0)
  });

  it('returns the correct score from a two-shot go', function(){
    frame.throw(2)
    frame.throw(5)
    expect(frame.totalScore()).toEqual(7);
  });

  it('handles a strike', function(){
    frame.throw(10)
    frame.throw(7)
    frame.throw(1)
    expect(frame.totalScore()).toEqual(18);
  })

  it('Stops counting after bonus points', function(){
    frame.throw(10)
    frame.throw(7)
    frame.throw(10)
    frame.throw(7)
    expect(frame.totalScore()).toEqual(27)
  })
});
