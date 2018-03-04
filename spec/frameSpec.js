describe("Frame", function() {
  var frame, finalFrame, testMultipliers, firstRoll;
  beforeEach(function() {
    testMultipliers = [2, 1];
    frame = new Frame(testMultipliers, false);
    finalFrame = new Frame(testMultipliers, true);
    firstRoll = 2;
  });

  it("is initialised with an empty rolls array", function() {
    expect(frame.rolls).toEqual([]);
  });

  it("is initialised with the passed multiplier array", function() {
    expect(frame.multipliers).toEqual([2,1]);
  });

  it("is initialised with score 0", function() {
    expect(frame.score).toEqual(0);
  });

  it("is inititialised with isFinalFrame", function() {
    expect(frame.isFinalFrame).toEqual(false);
    expect(finalFrame.isFinalFrame).toEqual(true);
  });

  describe(".roll()", function() {
    it("stores the roll in this.rolls", function() {
      frame.roll(firstRoll);

      expect(frame.rolls).toEqual([firstRoll]);
    });

    it("calls this._updateScore()", function() {
      spyOn(frame, "_updateScore");
      frame.roll(firstRoll);

      expect(frame._updateScore).toHaveBeenCalledWith(firstRoll);

    });

    it("calls this._calculateMultipliers", function() {
      spyOn(frame, "_calculateMultipliers");
      frame.roll(firstRoll);

      expect(frame._calculateMultipliers).toHaveBeenCalledWith();
    });
  });

  describe(".updateScore()", function() {
    it("calculates the score and adds it to this.score", function() {
      let currentMultiplier = testMultipliers[0];
      frame._updateScore(firstRoll);

      expect(frame.score).toEqual(currentMultiplier * firstRoll);
    });
  });

  describe("._calculateMultipliers", function() {
    let secondRoll, strikeRoll, spareRoll;
    beforeEach(function() {
      secondRoll = 6;
      spareRoll = 8;
      strikeRoll = 10;
      frame.multipliers = [1];
    });

    it("when final frame, leaves first multiplier untouched, sets second to 1", function() {
      finalFrame.multipliers = [1];
      finalFrame.rolls = [strikeRoll];
      finalFrame._calculateMultipliers();

      expect(finalFrame.multipliers).toEqual([1,1]);
    });

    it("when strike, adds one to the first multiplier, sets the second to 2", function() {
      frame.rolls = [strikeRoll];
      frame._calculateMultipliers();

      expect(frame.multipliers).toEqual([2, 2]);
    });

    it("when spare, adds one to the first multiplier, sets the second to 1", function() {
      frame.rolls = [firstRoll, spareRoll];
      frame._calculateMultipliers();

      expect(frame.multipliers).toEqual([2, 1]);
    });

    it("when not spare and not strike, leaves first multiplier unchanged, sets second to 1", function() {
      frame.rolls = [firstRoll, secondRoll];
      frame._calculateMultipliers();

      expect(frame.multipliers).toEqual([1, 1]);
    });
  });

  describe(".isComplete()", function() {
    describe("when not final frame", function() {
      it("calls this._notFinalFrameIsComplete()", function() {
        spyOn(frame, "_notFinalFrameIsComplete");
        frame.isComplete();

        expect(frame._notFinalFrameIsComplete).toHaveBeenCalledWith();
      });
    });

    describe("when final frame", function() {
      it("calls this._finalFrameIsComplete()", function() {
        spyOn(finalFrame, "_finalFrameIsComplete");
        finalFrame.isComplete();

        expect(finalFrame._finalFrameIsComplete).toHaveBeenCalledWith();
      });
    });

    describe("._notFinalFrameIsComplete()", function() {
      it("returns false when frame is not complete", function() {
        frame.rolls = [4];

        expect(frame._notFinalFrameIsComplete()).toEqual(false);
      });

      it("returns true when first roll is a strike", function() {
        frame.rolls = [10];

        expect(frame._notFinalFrameIsComplete()).toEqual(true);
      });

      it("returns true after second roll", function() {
        frame.rolls = [3, 5];

        expect(frame._notFinalFrameIsComplete()).toEqual(true);
      });
    });

    describe("._finalFrameIsComplete()", function() {
      it("returns true if two rolls and no strike or spare", function() {
        finalFrame.rolls = [3, 4];

        expect(finalFrame._finalFrameIsComplete()).toEqual(true);
      });

      it("returns false if two rolls including strike", function() {
        finalFrame.rolls = [10, 3];

        expect(finalFrame._finalFrameIsComplete()).toEqual(false);
      });

      it("returns false if two rolls including spare", function() {
        finalFrame.rolls = [3, 7];

        expect(finalFrame._finalFrameIsComplete()).toEqual(false);
      });

      it("returns true if 3 rolls including strike", function() {
        finalFrame.rolls = [10, 1, 4];

        expect(finalFrame._finalFrameIsComplete()).toEqual(true);
      });

      it("returns true if 3 rolls including spare", function() {
        finalFrame.rolls = [7, 3, 3];

        expect(finalFrame._finalFrameIsComplete()).toEqual(true);
      });
    });
  });
});
