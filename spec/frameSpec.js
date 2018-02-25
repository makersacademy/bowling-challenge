describe("Frame", function() {
  var frame;
  var testMultipliers;
  beforeEach(function() {
    testMultipliers = [2, 1];
    frame = new Frame(testMultipliers);
  });

  it("is initialised with an empty rolls array", function() {
    expect(frame.rolls).toEqual([]);
  });

  it("is initialised with the passed multiplier array", function() {
    expect(frame.multipliers).toEqual([2,1]);
  });

  // describe(".roll()", function() {
  //   beforeEach(function() {
  //     spyOn(frame, "rollScore");
  //   });
  //
  //   it("calls .rollScore", function() {
  //     frame.roll(4);
  //
  //     expect(frame.rollScore).toHaveBeenCalledWith(4);
  //   });
  // });

  describe(".extractFirstMulitplier()", function() {
    it("returns the first multiplier", function() {
      var testFirstMultiplier = frame.multipliers[0];

      expect(frame.extractFirstMultiplier()).toEqual(testFirstMultiplier);
    });

    it("removes the first multiplier from this.multipliers", function() {
      var testSecondMulitplier = frame.multipliers[1];
      frame.extractFirstMultiplier();

      expect(frame.multipliers).toEqual([testSecondMulitplier]);
    });
  });

  describe(".createRoll()", function() {
    var Roll, pinsKnocked;
    beforeEach(function() {
      roll = jasmine.createSpyObj("roll", ["roll"]);
      pinsKnocked = 4;
      frame.createRoll(pinsKnocked, roll);
    });

    it("pushes the roll into this.rolls", function() {
      expect(frame.rolls).toEqual([roll]);
    });

    it("calls .roll() on the newly created Roll object", function() {
      expect(roll.roll).toHaveBeenCalledWith(pinsKnocked);
    });
  });

  // describe(".rollScore", function() {
  //   var pinsKnocked = 3;
  //   var currentMultiplier;
  //   beforeEach( function() {
  //     pinsKnocked = 3;
  //     currentMultiplier = testMultipliers[0];
  //   });
  //
  //   it("multiplies the roll by the first multiplier", function() {
  //     expect(frame.rollScore(pinsKnocked)).toEqual(pinsKnocked * currentMultiplier);
  //   });
  //
  //   it("removes the current multiplier from the multipliers array", function() {
  //     frame.rollScore(pinsKnocked);
  //
  //     expect(frame.multipliers).toEqual([1]);
  //   });
  // });
});
