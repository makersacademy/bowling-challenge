describe('Frame', function(){
  var frames;

  beforeEach(function(){
    frames = new Frame;
  });

  describe('Defaults', function(){

    it('Can be an instance of frame', function(){
      expect(frames).toBeInstanceOf(Frame);
    });
    
    it('Has score for current frame', function(){
      expect(frames.score).toEqual(0);
    });

    it('Has score for the first roll', function(){
      expect(frames.rollOne).toEqual(0);
    });

    it('Has score for second roll', function(){
      expect(frames.rollTwo).toEqual(0);
    });
  });
});