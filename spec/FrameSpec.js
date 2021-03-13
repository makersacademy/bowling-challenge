describe("Frame", function() {
  var frame;

  beforeEach(function() {
    frame = new Frame();
  });

  describe("scoring", function() {
    it("knows the rolls that were made", function() {
      frame.addPin(5);
      frame.addPin(2);
      expect(frame.scoring()).toEqual(7)
    })
  });
  
  describe("addPin", function() {
    it("add the provided pins number to the frame's rolls", function() {
      frame.addPin(4);
      expect(frame.rolls).toContain(4);
    });
  });

  describe("isStrike", function() {
    it("return true if the roll was a strike", function() {
      frame.addPin(10);
      expect(frame.isStrike()).toBe(true);
    });
    it("return false if the roll was not a strike", function() {
      frame.addPin(9,1);
      expect(frame.isStrike()).toBe(false);
    });
  });

  describe("isSpare", function() {
    it("returns true if the rolls was a spare", function() {
      frame.addPin(9);
      frame.addPin(1);
      expect(frame.isSpare()).toEqual(true);
    })
    it("returns true if the rolls was a spare", function() {
      frame.addPin(10);
      expect(frame.isSpare()).toEqual(false);
    })
  })
})