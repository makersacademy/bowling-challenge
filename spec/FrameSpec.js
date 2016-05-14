'use strict';

describe("Frame", function(){
  var frame;

  function Strike(){
    frame.recordFirstRoll(10);
  }

  function Spare(){
    frame.recordFirstRoll(8);
    frame.recordSecondRoll(2);
  }

  beforeEach(function(){
    frame = new Frame();
  });

  it("record the score for first roll", function(){
    frame.recordFirstRoll(8);
    expect(frame.firstRoll).toEqual(8);
  });

  it("shows the score for first roll", function(){
    frame.recordFirstRoll(8);
    expect(frame.firstRollScore()).toEqual(8);
  });

  it("stores the score for second roll", function(){
    frame.recordSecondRoll(1);
    expect(frame.secondRoll).toEqual(1);
  });

  it("shows the score for second roll", function(){
    frame.recordSecondRoll(1);
    expect(frame.secondRollScore()).toEqual(1);
  });

  describe('#isStrike', function(){
    it("returns true if it is a strike", function(){
      Strike();
      expect(frame.isStrike()).toBe(true)
    });

    it("returns false if it's not a strike", function(){
      frame.recordFirstRoll(8);
      expect(frame.isStrike()).toBe(false);
    });
  });

  describe('#isSpare', function(){
    it("returns true for a spare", function(){
      Spare()
      expect(frame.isSpare()).toBe(true);
    });

    it("returns false for a strike", function(){
      Strike();
      expect(frame.isSpare()).toBe(false);
    });

    it("returns false for other conditions", function(){
      frame.recordFirstRoll(7);
      frame.recordSecondRoll(2);
      expect(frame.isSpare()).toBe(false);
    });
  });

  describe("#isFinished", function(){
    it('correctly identify a strike as finished', function(){
      Strike();
      expect(frame.isFinished()).toBe(true);
    });

    it('correctly identify a spare as finshed', function(){
      Spare();
      expect(frame.isFinished()).toBe(true);
    });

    it('correctly identify two missed shots as finished', function(){
      frame.recordFirstRoll(0);
      frame.recordSecondRoll(0);
      expect(frame.isFinished()).toBe(true);
    });

    it('correctly identify another finished frame as finished', function(){
      frame.recordFirstRoll(7);
      frame.recordSecondRoll(1);
      expect(frame.isFinished()).toBe(true);
    });

    it('identify an unfinished frame to be unfinished', function(){
      frame.recordFirstRoll(7);
      expect(frame.isFinished()).toBe(false);
    });

  });
});