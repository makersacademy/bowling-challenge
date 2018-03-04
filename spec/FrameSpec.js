'use strict';

describe('Game', function(){
  var empty_frame
  var frame

  beforeEach(function(){
    empty_frame = new Frame(0,0);
    frame = new Frame(6,3);
  });

  it('first roll starts as zero', function(){
    expect(empty_frame.roll_one).toEqual(0);
  });

  it('second roll defaults to zero', function(){
    expect(empty_frame.roll_two).toEqual(0);
  })

  describe('.score', function(){
    it('returns the score of the frame', function(){
      expect(frame.score).toEqual(9)
    });
  });

  describe('.isStrike', function(){
    it('returns true if frame is a strike', function(){
      frame.roll_one = 10;
      expect(frame.isStrike()).toEqual(true)
    })
  });

  describe('.isSpare', function(){
    it('returns true if frame is a spare', function(){
      frame.roll_one = 6;
      frame.roll_two = 4;
      expect(frame.isSpare()).toEqual(true)
    })

    it("doesn't return true for a strike", function(){
      frame.roll_one = 10
      frame.roll_two = 0
      expect(frame.isSpare()).not.toEqual(true)
    })
  });

});
