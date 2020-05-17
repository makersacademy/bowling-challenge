describe('Frame Factory', function() {
  var frameFactory;

  beforeEach(function() {
    frameClass = function() {}
    rollClass = function() {}
    frameFactory = new FrameFactory(frameClass, rollClass)
  })

  describe('#instance', function() {
    it('creates a instance of frame', function() {
      expect(frameFactory.instance()).toBeInstanceOf(frameClass)
    })
  })
})