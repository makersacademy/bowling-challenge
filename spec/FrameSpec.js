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

  function otherFinishedGame(){
    frame.recordFirstRoll(7);
    frame.recordSecondRoll(2);
  }

  beforeEach(function(){
    frame = new Frame();
  });

  it("record the score for first roll", function(){
    frame.recordFirstRoll(8);
    expect(frame._firstRoll).toEqual(8);
  });

  it("shows the score for first roll", function(){
    frame.recordFirstRoll(8);
    expect(frame.firstRollScore()).toEqual(8);
  });

  it("stores the score for second roll", function(){
    frame.recordSecondRoll(1);
    expect(frame._secondRoll).toEqual(1);
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
      otherFinishedGame();
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
      otherFinishedGame();
      expect(frame.isFinished()).toBe(true);
    });

    it('identify an unfinished frame to be unfinished', function(){
      frame.recordFirstRoll(7);
      expect(frame.isFinished()).toBe(false);
    });

  });

  describe("#isAllBonusAdded", function(){
    it('returns true for 2 bonus for strike', function(){
      Strike();
      frame.addBonus(8);
      frame.addBonus(2);
      expect(frame.isAllBonusAdded()).toBe(true);
    });

    it('returns false for 1 bonus for strike', function(){
      Strike();
      frame.addBonus(8);
      expect(frame.isAllBonusAdded()).toBe(false);
    });


    it('returns false for 0 bonus for strike', function(){
      Strike();
      expect(frame.isAllBonusAdded()).toBe(false);
    });

    it('returns true for 1 bonus for spare', function(){
      Spare();
      frame.addBonus(8);
      expect(frame.isAllBonusAdded()).toBe(true);
    });

    it('returns false for 0 bonus for spare', function(){
      Spare();
      expect(frame.isAllBonusAdded()).toBe(false);
    })

    it('returns true for 0 bonus for other finished games', function(){
      otherFinishedGame();
      expect(frame.isAllBonusAdded()).toBe(true);
    });
  });

  describe('#calculateBonus', function(){
    it('calculate the bonus for strike', function(){
      Strike();
      frame.addBonus(8);
      frame.addBonus(2);
      expect(frame.calculateBonus()).toEqual(10);
      expect(frame.calculateTotal()).toEqual(20);
    });

    it('calculate bonus for spare', function(){
      Spare();
      frame.addBonus(5);
      expect(frame.calculateBonus()).toEqual(5);
      expect(frame.calculateTotal()).toEqual(15);
    });

    it('return 0 for any other finished game', function(){
      otherFinishedGame();
      expect(frame.calculateBonus()).toEqual(0);
      expect(frame.calculateTotal()).toEqual(9);
    });
  });

  it('only add bonus for finished game', function(){
    frame.recordFirstRoll(8);
    frame.addBonus(10);
    expect(frame.calculateBonus()).toEqual(0);
  })
});