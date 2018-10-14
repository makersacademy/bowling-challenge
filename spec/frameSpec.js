'use strict';

describe('Frame', function(){
  var frame;
  var strikeFrame;

  beforeEach(function(){
    frame = new Frame(4);
    strikeFrame = new Frame(10);
  });

  it('starts containing the first roll', function(){
    expect(frame.rolls).toEqual([4]);
    expect(strikeFrame.rolls).toEqual([10]);
  });

  describe('add second roll', function(){
    it('can add a second roll to a frame', function(){
      frame.addSecondRoll(3)
      expect(frame.rolls).toEqual([4,3]);
    });

    it('does not allow to add roll if already strike', function(){
      expect(function(){strikeFrame.addSecondRoll(3)}).toThrowError('This frame was already a strike');
    });

    it('does not add more than 2 rolls to a frame', function(){
      frame.addSecondRoll(5);
      expect(function(){frame.addSecondRoll(3)}).toThrowError('This frame already contains two rolls');
      expect(frame.rolls).toEqual([4,5])
    });
  });

  describe('total frame score', function(){
    it('returns total score of current frame', function(){
      frame.addSecondRoll(2);
      expect(frame.totalFrameScore()).toEqual(6);
    });

    it('returns total score of current frame if strike', function(){
      expect(strikeFrame.totalFrameScore()).toEqual(10);
    });
  });

  describe('is a spare', function(){
    it('returns true if this frame is a spare', function(){
      frame.addSecondRoll(6);
      expect(frame.isASpare()).toBe(true)
    });

    it('returns false if this frame is not a spare', function(){
      frame.addSecondRoll(3);
      expect(frame.isASpare()).toBe(false)
    });
  });

  describe('is a strike', function(){
    it('returns true if this frame is a strike', function(){
      expect(strikeFrame.isAStrike()).toBe(true)
    });

    it('returns false if this frame is not a spare', function(){
      frame.addSecondRoll(3);
      expect(frame.isAStrike()).toBe(false)
    });
  });

  describe('pins first roll', function(){
    it('returns the nummber of pins of the first roll', function(){
      frame.addSecondRoll(6);
      expect(frame.pinsFirstRoll()).toEqual(4)
    });
  });
});
