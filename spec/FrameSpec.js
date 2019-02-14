describe('Frame', function() {

  beforeEach(function(){
    frameOne = new Frame(1);
  });

  describe('#frameNumber', function() {
    it('has a frame number property which is set when a new frame object is initialized', function() {
      expect(frameOne.frameNumber).toEqual(1)
    });
  });
});
