describe("Frame", function() {
  var frame

  beforeEach(function() {
    frame = new Frame();
  });

  describe("pins", function() {
    it('Should start at 10', function() {
      expect(frame.pins).toEqual(10);
    });
  })

  describe("rollsLeft", function() {
    it('Should start at 2', function() {
      expect(frame.rollsLeft).toEqual(2);
    });
  });

  describe("play", function() {
    it('should decrease number of pins', function() {
      spyOn(frame, 'rollScore').and.returnValue(5);
      frame.play();
      expect(frame.pins).toEqual(5);
    });

    it('should decrease number of roll left', function() {
      frame.play();
      expect(frame.rollsLeft).toEqual(1);
    });
  });

});
