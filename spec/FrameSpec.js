describe("Frame", function() {
  var frame;

  beforeEach(function() {
    frame = new Frame({ frameNumber: 1 });
  });

  describe("#registerRoll", function() {
    it("has a gutter ball", function() {
      frame.registerRoll(0);
      expect(frame.pins).toEqual(0);
    });

    it("has one registered roll", function() {
      frame.registerRoll(7);
      expect(frame.pins).toEqual(7);
    });

    it("has two registered rolls", function() {
      frame.registerRoll(3);
      frame.registerRoll(5);
      expect(frame.pins).toEqual(8);
    });

    it("counts the number of rolls after the first throw", function() {
      frame.registerRoll(6);
      expect(frame.rollCount).toEqual(1);
    });

    it("counts the number of rolls after the second throw", function() {
      frame.registerRoll(6);
      frame.registerRoll(1);
      expect(frame.rollCount).toEqual(2);
    })
  });

  describe("#isOver", function() {
    it("is completed after two rolls", function() {
      frame.registerRoll(3);
      frame.registerRoll(2);
      expect(frame.isOver()).toBe(true);
    });

    it("is completed after a strike", function() {
      frame.registerRoll(10);
      expect(frame.isOver()).toBe(true);
    });

    it("is completed after a spare", function() {
      frame.registerRoll(7);
      frame.registerRoll(3);
      expect(frame.isOver()).toBe(true);
    });

    it("is not completed after less than two rolls", function() {
      frame.registerRoll(4);
      expect(frame.isOver()).toBe(false);
    });
  });

  describe("#isStrike", function() {
    it("knows when it is a strike", function() {
      frame.registerRoll(10);
      expect(frame.isStrike()).toBe(true);
    });

    it("knows when it is not a strike", function() {
      frame.registerRoll(5);
      frame.registerRoll(4);
      expect(frame.isStrike()).toBe(false);
    });
  });

  describe("#isSpare", function() {
    it("knows when it is a spare", function() {
      frame.registerRoll(8);
      frame.registerRoll(2);
      expect(frame.isSpare()).toBe(true);
    });

    it("knows when it is not a spare", function() {
      frame.registerRoll(4);
      frame.registerRoll(4);
      expect(frame.isSpare()).toBe(false);
    });
  });

  describe("#totalFrame", function() {
    it("has the total score", function() {
      frame.registerRoll(2);
      frame.registerRoll(6);
      expect(frame.totalFrame()).toEqual(8);
    });
  });
});