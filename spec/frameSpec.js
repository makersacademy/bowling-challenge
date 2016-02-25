describe('Frame', function() {
  var frame1;
  var frame2;

  beforeEach(function() {
    frame1 = new Frame();
    frame2 = new Frame();
  });

  describe('-> initialising a frame', function() {
    it('-> starts the game with empty rolls', function(){
      expect(frame1._rolls).toEqual([])
    });
  });

  describe('-> adding rolls', function() {
    it('-> prevents the player from rolling more than twice per turn', function(){
      frame1.addRoll()
      frame1.addRoll()
      expect(function() {
        frame1.addRoll()
      }).toThrowError('Max two rolls per turn!')
    });
  });
});
