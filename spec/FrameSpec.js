describe('Frame', function() {
  var frame = new Frame();

  describe('default state', function() {

    it('has frame number', function() {
      frame = new Frame(1)
      expect(frame.frameNumber).toEqual(1);
    })

    it('has pending frames', function() {
      frame = new Frame(1)
      expect(frame.pendingFrames).toEqual(0);
    })

    it('has ball one score', function() {
      frame = new Frame(1)
      expect(frame.ballOne).toEqual(0);
    })

    it('has ball two score', function() {
      frame = new Frame(1)
      expect(frame.ballTwo).toEqual(0);
    })

    it('has bonus score', function() {
      frame = new Frame(1)
      expect(frame.bonusScore).toEqual(0);
    })
  })
})
