describe("Frame", function() {

  var frame;

  beforeEach(function(){
    frame = new Frame();
  });

  describe('#roll', function() {
    it('has two rolls', function() {
      expect(frame.firstRoll).toEqual(null);
      expect(frame.secondRoll).toEqual(null);
    });

    it('can add one roll', function() {
      frame.roll(3);
      expect(frame.firstRoll).toEqual(3);
      expect(frame.secondRoll).toEqual(null);
    });

    it('can add second roll', function() {
      frame.roll(3);
      frame.roll(6);
      expect(frame.firstRoll).toEqual(3);
      expect(frame.secondRoll).toEqual(6);
    });
  });

  describe('#isComplete', function() {

    it('identifies when a frame is complete', function () {
      frame.roll(3);
      frame.roll(4);
      expect(frame.isComplete()).toEqual(true);
    });

    it('identifies when a frame is not complete', function() {
      frame.roll(3);
      expect(frame.isComplete()).toEqual(false);
    });
  });

  describe('#score', function() {
    it('calculates the score for the frame', function() {
      frame.roll(3);
      frame.roll(5);
      expect(frame.score()).toEqual(8)
    })
  });

})
