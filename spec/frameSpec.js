describe('Frame', function(){
  var frames;

  beforeEach(function(){
    frames = new Frame;
  });

  describe('Defaults', function(){

    it('Can be an instance of scorecard', function(){
      expect(frames).toBeInstanceOf(Frame);
    });
    
    it('Has score for current frame', function(){
      expect(frames.score).toEqual(0);
    });
  });
});