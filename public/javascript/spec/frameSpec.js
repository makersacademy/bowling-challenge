'use strict';

describe('frame', function(){
  var frame;

  beforeEach(function(){
    frame = new Frame();
  });

  it('records the number of pins knocked down on a single roll', function(){
    frame.recordRoll(7)
    expect(frame.points()).toEqual(7)
  });

  it('records the number of pins knocked down over two rolls', function(){
    frame.recordRoll(7)
    frame.recordRoll(2)
    expect(frame.points()).toEqual(9)
  });

  it('knows if it is a strike', function(){
    frame.recordRoll(10)
    expect(frame.isStrike()).toEqual(true)
  });

  it('knows if it is not a strike', function(){
    frame.recordRoll(7)
    frame.recordRoll(2)
    expect(frame.isStrike()).toEqual(false)
  });

  it('knows if it is a spare', function(){
    frame.recordRoll(9)
    frame.recordRoll(1)
    expect(frame.isSpare()).toEqual(true)
  });

  it('knows if it is not a spare', function(){
    frame.recordRoll(7)
    frame.recordRoll(2)
    expect(frame.isSpare()).toEqual(false)
  });

  describe('when the next roll is a 7', function(){
    it('can apply the bonus for a spare', function(){
      frame.recordRoll(7)
      frame.recordRoll(3)
      expect(frame.points(7)).toEqual(17)
    });
  });
})
