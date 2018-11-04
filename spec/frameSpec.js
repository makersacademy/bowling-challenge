describe("Frame", function() {
  var Frame = require("../lib/frame")
  var frame;

  beforeEach(function() {
    frame = new Frame
  });

  describe("total", function() {
    it("starts at 0", function() {
      expect(frame.total).toEqual(0);
    });
  });

  describe(".roll()", function() {
    it("adds value to total", function() {
      frame.roll(5);
      expect(frame.total).toEqual(5);
    });
    it("adds roll to rolls", function() {
      frame.roll(5);
      expect(frame.rolls).toEqual(1);
    });
    it("marks game as complete after two rolls", function() {
      frame.roll(1);
      frame.roll(1);
      expect(frame.isComplete()).toEqual(true);
    });
    it("marks game as complete after strike", function() {
      frame.roll(10);
      expect(frame.isComplete()).toEqual(true);
    });
  });

  describe(".hasBonus()", function() {
    it("begins false", function() {
      expect(frame.hasBonus()).toEqual(false);
    });
  });

  describe(".bonusRolls", function() {
    it("begins empty", function() {
      expect(frame.bonusRolls).toEqual(0);
    });
    it("increments by 2 after strike", function() {
      frame.roll(10);
      expect(frame.bonusRolls).toEqual(2);
    });
    it("increments by 1 after spare", function() {
      frame.roll(5);
      frame.roll(5);
      expect(frame.bonusRolls).toEqual(1);
    })
  });

  describe(".isComplete()", function() {
    it("is initially false", function() {
      expect(frame.isComplete()).toEqual(false);
    });
    it("becomes true after two rolls", function() {
      frame.roll(1);
      frame.roll(1);
      expect(frame.isComplete()).toEqual(true);
    });
  })

});
