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
      spyOn(frame, 'rollScore').and.returnValue(5);
      frame.play();
      expect(frame.pins).toEqual(5);
    });

    it('should decrease number of roll left', function() {
      frame.play();
      expect(frame.rollsLeft).toEqual(1);
    });

    it('should increase score when roll is higher than zero', function() {
      spyOn(frame, 'rollScore').and.returnValue(5);
      frame.play();
      expect(frame.score).toEqual(5);
    });

    it('should throw error if there are no frames left', function() {
      spyOn(frame, 'rollScore').and.returnValue(4);
      for(i = 1; i <= 2 ; i++ ) {
        frame.play();
      };
      expect(function() {frame.play()}).toThrow('No more frames. Start a new frame!');
    })
  });

});
