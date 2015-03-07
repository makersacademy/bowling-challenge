describe('Frame', function() {

  beforeEach(function(){
    frame = new Frame
  })

  describe('a frame', function() {

    it('starts with the a rollOne score of 0', function() {
      expect(frame.rollOne).toEqual(0);
    });

    it('starts with a rollTwo score of 0', function() {
      expect(frame.rollTwo).toEqual(0);
    });

    it('starts wit a bonusRoll score of 0', function() {
      expect(frame.bonusRoll).toEqual(0);
    });


    it('knows to start on frame 1 ', function(){
      expect(frame.frameNumber).toEqual(1);
    });

    it('when on frame 2 knows that it is in frame 2', function() {
      frame.nextFrame();
      expect(frame.frameNumber).toEqual(2)
    });

  });

});