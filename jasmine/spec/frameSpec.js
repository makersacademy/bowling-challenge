describe('Frame', function(){

  beforeEach(function(){
    frame = new Frame
  });

  describe('frames are keys to arrays with scores', function(){
    it('has an empty array for scores', function(){
      expect(frame.gameFrames.frame1).toEqual([])
    });
  });

});
