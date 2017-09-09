describe('Frame', function() {
  var frame

  beforeEach(function() {
    frame = new Frame();
  })

  it('begins a frame with an bonus of 0', function() {
    expect(frame.bonus).toEqual(0);
  })

  it('begins a frame with an empty rollArray', function() {
    expect(frame.rollArray).toEqual([]);
  })

  describe('#frameController', function() {
    it('calls takeAGo if rollArray is empty', function() {
      frame.frameController();
      expect(frame.rollArray[0]).toEqual(0);
    })

    it('returns [2, 10] if rollArray[0] = 10', function() {
      frame.rollArray[0] = 10;
      expect(frame.frameController()).toEqual([2, 10]);
    })
  })

  describe('#takeAGo', function() {
    it('fills rollArray[0] with a score if it is empty', function() {
      frame.takeAGo(2);
      expect(frame.rollArray[0]).toEqual(2);
    })

    it('fills rollArray[1] with a score if it is empty', function() {
      frame.rollArray[0] = 2;
      frame.takeAGo(4);
      expect(frame.rollArray[1]).toEqual(4);
    })
  })

  describe('#finishedFrame', function() {
    it('returns true if the frame is finished', function() {
      frame.rollArray = [2, 3];
      expect(frame.finishedFrame()).toEqual(true);
    })

    it('returns false if the frame is not finished', function() {
      frame.rollArray = [2];
      expect(frame.finishedFrame()).toEqual(false);
    })
  })
})
