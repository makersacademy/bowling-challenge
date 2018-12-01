describe("Frame", function() {

  var frame;

  beforeEach(function() {
    frame = new Frame();
  });

  describe('each frame', function() {

    it('starts with a score of 0', function() {
      expect(frame.score()).toEqual(0);
    });

    it('starts with 10 pins', function() {
      expect(frame.pins()).toEqual(10);
    });

  });

});
