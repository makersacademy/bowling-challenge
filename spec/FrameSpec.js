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
      frame.roll(2);
      expect(frame.firstRoll).toEqual(2);
      expect(frame.secondRoll).toEqual(null);
    });

    it('can add second roll', function() {
      frame.roll(2);
      frame.roll(3);
      expect(frame.firstRoll).toEqual(2);
      expect(frame.secondRoll).toEqual(3);
    });
  });

  describe('#isDone', function() {

    it('knows when frame has finished', function () {
      frame.roll(2);
      frame.roll(3);
      expect(frame.isDone()).toEqual(true);
    });

    it('knows when frame is still underway', function() {
      frame.roll(2);
      expect(frame.isDone()).toEqual(false);
    });
  });

});
