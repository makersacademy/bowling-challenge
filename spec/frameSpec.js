describe("Frame", function() {
  var frame;

  beforeEach(function() {
    frame = new Frame();
  });

  describe('should start the frame with', function() {
    it("0 rolls", function(){
      expect(frame.rollNumber).toEqual(0);
    });

    it("0 pins knocked down", function(){
      expect(frame.pinsDown).toEqual(0);
    });

    it("a maximum of 10 pins per frame", function(){
      expect(frame.MAXPINS).toEqual(10);
    });

    it("a maximum of two rolls per frame", function(){
      expect(frame.MAXROLLS).toEqual(2);
    });

  });
});
