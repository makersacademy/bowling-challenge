describe("Frame", function() {
  var frame;

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

  describe("score", function() {
    it('Should be zero initially', function(){
      expect(frame.score).toEqual(0);
    });

  });

  describe("play", function() {
    it('should decrease number of pins', function() {
      frame.play(5);
      expect(frame.pins).toEqual(5);
    });

    it('should decrease number of rolls left', function() {
      frame.play(5);
      expect(frame.rollsLeft).toEqual(1);
    });

    it('should increase score when roll is higher than zero', function() {
      frame.play(5);
      expect(frame.score).toEqual(5);
    });

  });

  describe("setStrike", function() {
    it('should set strike to true', function() {
      frame.setStrike();
      expect(frame.isStrike).toEqual(true);
    });

    it('should set rollsLeft to 0', function() {
      frame.setStrike();
      expect(frame.rollsLeft).toEqual(0);
    });

  });

  describe("setSpare", function() {
    it('should set spare to true', function() {
      frame.setSpare();
      expect(frame.isSpare).toEqual(true);
    });

    it('should set rollsLeft to 0', function() {
      frame.setSpare();
      expect(frame.rollsLeft).toEqual(0);
    });
  });

  describe("finalPlay", function() {
    it("Should decrease number of pins", function() {
      frame.finalPlay(5);
      expect(frame.pins).toEqual(5);
    })
    it("Should reduce number of rolls", function() {
      frame.finalPlay(5);
      expect(frame.rollsLeft).toEqual(1);
    })
  })
});
