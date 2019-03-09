'use strict';

describe('Frame', function(){
  var frame;
  var pins_standing;

  beforeEach(function(){
    frame = new Frame(pins_standing);
    pins_standing = new Pin();
  })

  it('each frame should contain 10 pins', function(){
    expect(frame.pins.length).toEqual(10);
  })

  it('cannot knock more than 10 pins in one frame', function(){
    expect(function(){frame.bowl(11)}).toThrowError('You cannot knock more than 10 pins down!')
  })

  it('cannot knock less than 0 pins in one frame', function(){
    expect(function(){frame.bowl(-1)}).toThrowError('Negative Number!')
  })

  it('should only contain two scores', function(){
    frame.bowl(1)
    frame.bowl(3)
    frame.bowl(1);
    expect(frame.score.length).toEqual(2)
    expect(frame.score.sum()).toEqual(4)
  });

  it('can bowl a strike', function(){
    frame.bowlStrike();
    expect(frame.score.sum()).toEqual(10)
  });

  it('should return strike when STRIKE is bolwed', function(){
    expect(frame.bowlStrike()).toEqual('Strike!')
  });

  it('calculates the pins standing if no strike is bolwed', function(){
    frame.bowl(3)
    expect(frame.sparePins(3)).toEqual(7)
  });

  it('should know when a Strike is bowled', function(){
    frame.bowlStrike();
    expect(frame.isStrike()).toEqual(true)
  });

  it('should know when Spare is bowled', function(){
    frame.bowl(3)
    frame.bowl(7)
    //spare is when the second roll knocks all remaining pins down
  });
});
