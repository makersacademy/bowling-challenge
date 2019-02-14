describe('Frame', function() {

  beforeEach(function(){
    frameOne = new Frame(1);
  });

  describe('making a new frame object', function() {
    it('has a frame number property which is set when a new frame object is initialized', function() {
      expect(frameOne.frameNumber).toEqual(1)
    });

    it('has a has a roll one and roll two properties which are equal to null when a new frame object is initialized', function() {
      expect(frameOne.rollOne).toEqual(null)
      expect(frameOne.rollTwo).toEqual(null)
    });
  });
});
