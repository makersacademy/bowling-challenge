describe ('Frame', function() {

  var frame;

  beforeEach(function(){
    frame = new Frame();
  });

  describe('Creating frames', function() {
    it('creates a new frame as an empty array', function() {
      expect(frame._frame).toEqual([]);
    });
  });

  describe('Rolling balls', function() {
    it('pushes a roll into the frame array', function(){
      frame.roll(1);
      frame.roll(2);
      expect(frame._frame).toEqual([1,2]);
    });
  });

  describe('Calculating scores', function() {
    it('calculates total score of a frame', function() {
      frame.roll(1);
      frame.roll(2);
      expect(frame.calculateFrameScore()).toEqual(3);
    });
  });


});
