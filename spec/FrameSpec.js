describe('Frame', function() {
  var frame


  beforeEach(function() {
    frame = new Frame();
  });

  describe("roll", function() {
    it("Records the number of pins knocked down", function() {
      frame.roll(6);
      frame.roll(1);
      expect(frame.rolls).toEqual([6, 1]);
    });
  });

  describe("score", function() {
    it("returns the score for the frame", function() {
      frame.roll(3);
      frame.roll(2);
      expect(frame.score()).toEqual(5);
    });
  });

  describe("strike", function() {
    it("returns strike when 10 pins are knocked down on first roll", function() {
      frame.roll(10);
      expect(frame.strike()).toBeTruthy();
    });
  });

  describe("spare", function() {
    it("returns spare when 10 pins are knocked down by first and second rolls", function() {
      frame.roll(5);
      frame.roll(5);
      expect(frame.spare()).toBeTruthy();
    });
  });




});
