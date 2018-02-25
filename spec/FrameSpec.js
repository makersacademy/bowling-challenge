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

  





});
