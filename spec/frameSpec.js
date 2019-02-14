describe("FRAME", function() {
  describe("*First roll is 5*", function() {
    let frame = new Frame();
    frame.enterRoll(5);

    describe("New frame", function() {
      it("should create first roll and add to array", function() {
        expect(frame.rolls[0]).toEqual(jasmine.any(Object));
        expect(frame.rolls.constructor).toEqual(Array);
      });
    });

    describe("*No second roll*", function(){
      describe("#isComplete", function() {
        it("should be false", function() {
          spyOn(Roll.prototype, "returnScore").and.returnValue(5);
          expect(frame.isComplete).toEqual(false);
        });
      });
    });

    describe("*Second roll is 3*", function(){
      describe("#isComplete", function() {
        it("should be true", function() {
          frame.enterRoll(3)
          spyOn(Roll.prototype, "returnScore").and.returnValue(3);
          frame.countRemainingRolls();
          expect(frame.isComplete).toEqual(true);
        });
      });
    });
  });

  describe("*First roll is 10*", function() {
    let frame = new Frame();
    frame.enterRoll(10);

    describe("#isComplete", function() {
      it("should be true", function() {
        spyOn(Roll.prototype, "returnScore").and.returnValue(10);
        frame.countRemainingRolls();
        expect(frame.isComplete).toEqual(true);
      });
    });
  });
});
