'use strict';

describe('Game', function(){
  var frame

  beforeEach(function(){
    frame = new Frame();
  });

  it('first roll starts as zero', function(){
    expect(frame.roll_one).toEqual(0);
  });

  it('second roll defaults to zero', function(){
    expect(frame.roll_two).toEqual(0);
  })

  describe('.score', function(){
    it('calculates the score of the frame', function(){
      frame.roll_one = 6
      frame.roll_two = 3
      expect(frame.calculateScore()).toEqual(9)
    })
  });

});
