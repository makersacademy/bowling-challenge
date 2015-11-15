describe("Frame", function() {

  var pins;
  var rolls;

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
})
