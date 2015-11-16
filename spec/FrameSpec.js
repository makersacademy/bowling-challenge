describe("Frame", function() {


  beforeEach( function() {
  newFrame = new Frame();
  });


    it("each frame should have 10 pins", function() {
      expect(newFrame.pins).toEqual(10);
    });

    it("should let you roll the ball and reduce the number of rolls", function() {
      newFrame.roll();
      expect(newFrame.rolls).toEqual(1);
    });

    it("should let you roll the ball twice", function() {
      newFrame.roll();
      newFrame.roll();
      expect(function(){ newFrame.roll(); }).toThrow("Can not roll ball, frame is over!");
    });

    it("should reduce the number of pins per roll", function() {
      newFrame.roll(2);
      expect(newFrame.pins).toEqual(8);
    });

    it("should not let you roll if there are no pins", function() {
      newFrame.roll(10);
      expect(function(){ newFrame.roll(); }).toThrow("Can not roll ball, frame is over!");
    });
})
