describe("Roll", function() {
  var testRoll, pinsKnocked, currentMultiplier, previousRoll;
  beforeEach( function() {
    pinsKnocked = 5;
    currentMultiplier = 2;
    previousRoll = 3;
    testRoll = new Roll(pinsKnocked, currentMultiplier, previousRoll);
  });

  it("is initialized with the number of pins knocked down", function() {
    expect(testRoll.pinsKnocked).toEqual(pinsKnocked);
  });

  it("is initialised with the current multiplier", function() {
    expect(testRoll.currentMultiplier).toEqual(currentMultiplier);
  });

  it("is initialised with the previous role if there was one", function() {
    expect(testRoll.previousRoll).toEqual(previousRoll);
  });

  describe(".calculateScore()", function() {
    it("multiplies the number of pins by the recieved multiplier", function() {
      testRoll.calculateScore();
      
      expect(testRoll.score).toEqual(pinsKnocked * currentMultiplier);
    });
  });

  describe(".calculateNextMulitpliers()", function() {
    it("sets this.calculateNextmultipliers = [1, 1] when the roll is a strike", function() {
      var strikeRoll = new Roll(10);
      strikeRoll.calculateNextMultipliers();

      expect(strikeRoll.nextMultipliers).toEqual([1, 1]);
    });

    it("sets this.calculateNextMultipliers = [1, 0] when the roll is a spare", function() {
      var spareRoll = new Roll(8, currentMultiplier, 2);
      spareRoll.calculateNextMultipliers();

      expect(spareRoll.nextMultipliers).toEqual([1, 0]);
    });

    it("sets this.calculateNextMultipliers = [0, 0] if neither a strike nor a spare", function() {
      var standardRoll = new Roll(3, currentMultiplier, 1);
      standardRoll.calculateNextMultipliers();

      expect(standardRoll.nextMultipliers).toEqual([0, 0]);
    });
  });

  describe(".roll()", function() {
    beforeEach(function() {
      spyOn(testRoll, "calculateScore");
      spyOn(testRoll, "calculateNextMultipliers");
    });

    it("calls this.calculateScore", function() {
      testRoll.roll();

      expect(testRoll.calculateScore).toHaveBeenCalledWith();
    });

    it("calls this.calculateNextMultipliers", function() {
      testRoll.roll();

      expect(testRoll.calculateNextMultipliers).toHaveBeenCalledWith();
    });
  });

});
