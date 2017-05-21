describe('Frame', function(){

  beforeEach(function(){
    frame = new Frame
    frame.frameSet(frame.frameNumber)
  });

  describe('frames are keys to arrays with scores', function(){
    it('has an empty array for scores', function(){
      expect(frame.gameFrames[0].frame).toEqual([])
    });

    it('has a current frame', function(){
      expect(frame.currentFrame).toEqual([])
    });


    it('switches currentFrame when a frame is done', function(){
      frame.currentFrame.push(2,7)
      frame.statusChecker()
      expect(frame.frameNumber).toEqual(1)
      frame.frameSet(frame.frameNumber)
      expect(frame.currentFrame).toEqual([])
    });

    it('switches currentFrame if player hits a strike', function(){
      console.log(frame.frameNumber)
      frame.currentFrame.push(10)
      frame.statusChecker()
      expect(frame.frameNumber).toEqual(1)
      frame.frameSet(frame.frameNumber)
      expect(frame.currentFrame).toEqual([])
    });
  });

});
