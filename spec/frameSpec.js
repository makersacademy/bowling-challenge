describe("FRAME", function() {
  describe("*First roll is 1*", function() {
    let frame = new Frame();
    frame.enterRoll(1);

    describe("New frame", function() {
      it("should create first roll and add to array", function() {
        expect(frame.rolls[0]).toEqual(jasmine.any(Object));
        expect(frame.rolls.constructor).toEqual(Array);
      });
    });

    describe("*No second roll*", function() {
      describe("#isComplete", function() {
        it("should be false", function() {
          spyOn(Roll.prototype, "returnScore").and.returnValue(1);
          expect(frame.isComplete).toEqual(false);
        });
      });
    });

    describe("*Second roll is 2*", function() {
    let frame2 = new Frame();
    frame2.enterRoll(1);
    frame2.enterRoll(2);

      describe("#isComplete", function() {
        it("should be true", function() {
          spyOn(Roll.prototype, "returnScore").and.returnValue(2);
          expect(frame2.isComplete).toEqual(true);
        });
      });

      describe("*Frame is complete*", function() {
        it("should calculate frame score", function() {
          expect(frame2.score).toEqual(3);
        });
      });
    });

    describe("*Spare*", function() {
      let frame3 = new Frame();
      frame3.enterRoll(3);
      frame3.enterRoll(7);

      describe("*Frame notes*", function(){
        it('should record a strike', function(){
          expect(frame3.notes).toEqual("Spare")
        });
      });
    });

    describe("*Zero Pins*", function() {
      let frame0 = new Frame();
      frame0.enterRoll(0);
      frame0.enterRoll(0);

      describe("*Frame notes*", function(){
        it('should record a strike', function(){
          expect(frame0.notes).toEqual("Unlucky")
        });
      });
    });

  });

  describe("*First roll is 10*", function() {
    let frame10 = new Frame();
    frame10.enterRoll(10);

    describe("#isComplete", function() {
      it("should be true", function() {
        spyOn(Roll.prototype, "returnScore").and.returnValue(10);
        expect(frame10.isComplete).toEqual(true);
      });
    });

    describe("*Frame notes*", function(){
      it('should record a strike', function(){
        expect(frame10.notes).toEqual("Strike")
      });
    });
  });
});
