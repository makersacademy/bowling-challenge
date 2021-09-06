describe("FrameNotTen", function () {
  describe("Points tests", function () {
    let frame;
    beforeEach(function () {
      frame = new FrameNotTen(3, 0);
    });

    it("a new frame should have the frame score 0", function () {
      expect(frame.points("score")).toEqual(0);
    });

    it("a new frame should have the frame bonus 0", function () {
      expect(frame.points("bonus")).toEqual(0);
    });

    it("a new frame should have the total score 0", function () {
      expect(frame.points()).toEqual(0);
    });

    it("a new frame should have the total score 3", function () {
      frame._addRollAndReturnBonusForPrevFrames(3);
      expect(frame.points()).toEqual(3);
    });

    it("frame after adding bonus should have the bonus 3", function () {
      frame.addBonusSentFromFutureRolls(3);
      expect(frame.points("bonus")).toEqual(3);
    });

    it("frame after adding bonus and score should have the total 7", function () {
      frame._addRollAndReturnBonusForPrevFrames(3);
      frame.addBonusSentFromFutureRolls(4);
      expect(frame.points()).toEqual(7);
    });
  });

  describe("test _addRollAndReturnBonusForPrevFrames return bonusPrevFrames", function () {
    let frame;
    beforeEach(function () {
      frame = new FrameNotTen(3, 0);
      frameAfterSpare = new FrameNotTen(3, 1);
      frameAfterStrike = new FrameNotTen(3, 2.1);
      frameStrikeAfterStrikeAfter = new FrameNotTen(3, 2.2);
    });

    it("After Spare, expects addRoll.. to return bonusPrevFrames as [3]", function () {
      valueReturned = frameAfterSpare._addRollAndReturnBonusForPrevFrames(3);
      expect(valueReturned.bonusPrevFrames).toEqual([3]);
    });

    it("After Strike, expects addRoll.. to return bonusPrevFrames as [3]", function () {
      valueReturned = frameAfterStrike._addRollAndReturnBonusForPrevFrames(3);
      expect(valueReturned.bonusPrevFrames).toEqual([3]);
    });

    it("Strike after Strike after, expects addRoll.. to return bonusPrevFrames as [3, 3] bonus for two prev frames", function () {
      valueReturned =
        frameStrikeAfterStrikeAfter._addRollAndReturnBonusForPrevFrames(3);
      expect(valueReturned.bonusPrevFrames).toEqual([3, 3]);
    });
  });

  describe("Test _addRollAndReturnBonusForPrevFrames return bonusFutureRolls", function () {
    let frame;
    beforeEach(function () {
      frame = new FrameNotTen(3, 0);
    });

    it("Strike, expects addRoll.. to return bonusFutureRolls with value 2.1", function () {
      valueReturned = frame._addRollAndReturnBonusForPrevFrames(10);
      expect(valueReturned.bonusFutureRolls).toEqual(2.1);
    });

    it("Strike after Strike, expects addRoll.. to return bonusFutureRolls with value 2.2", function () {
      frame.rollsWithBonus = 2.1;
      valueReturned = frame._addRollAndReturnBonusForPrevFrames(10);
      expect(valueReturned.bonusFutureRolls).toEqual(2.2);
    });
  });
});

describe("FrameNotTen Errors", function () {
  let frame;
  beforeEach(function () {
    frame = new FrameNotTen(3, 0);
  });

  it("should throw error is we pass to addRoll.. a non-numeric argument", function () {
    expect(function () {
      frame._addRollAndReturnBonusForPrevFrames("a");
    }).toThrow("argument should be a number");
  });

  it("should throw error is we pass to addRoll.. a smaller than 0 argument", function () {
    expect(function () {
      frame._addRollAndReturnBonusForPrevFrames(-1);
    }).toThrow("argument should be greater than 0");
  });

  it("should throw error is we pass to addRoll.. an argument that with current score is greater than 10", function () {
    expect(function () {
      frame._addRollAndReturnBonusForPrevFrames(7);
      frame._addRollAndReturnBonusForPrevFrames(4);
    }).toThrow("argument + score > 10");
  });

  it("should throw error is we pass to addRoll.. but the frame hase ended", function () {
    expect(function () {
      spyOn(frame, "frameEnded").and.returnValue(true);
      frame._addRollAndReturnBonusForPrevFrames(1);
    }).toThrow("this frame has eneded");
  });

  it("should throw error is we pass to addRoll.. but the frame hase ended", function () {
    expect(function () {
      frame._addRollAndReturnBonusForPrevFrames(1);
      frame._addRollAndReturnBonusForPrevFrames(1);
      frame._addRollAndReturnBonusForPrevFrames(1);
    }).toThrow("this frame has eneded");
  });

  it("should throw error is we pass to addRoll.. but the frame hase ended", function () {
    expect(function () {
      frame._addRollAndReturnBonusForPrevFrames(10);
      frame._addRollAndReturnBonusForPrevFrames(1);
    }).toThrow("this frame has eneded");
  });
});

//expect(fizz.run(1)).toBeTruthy();
//expect(player.currentlyPlayingSong).toEqual(song);
