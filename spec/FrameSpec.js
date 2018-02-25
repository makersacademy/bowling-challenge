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

  describe('score', function() {

    it("returns the score for the frame", function() {
      frame.roll(3);
      frame.roll(2);
      expect(frame.score()).toEqual(5);
    });
  });





});
