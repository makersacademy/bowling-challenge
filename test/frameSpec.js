describe('Frame', function () {
  var frame = new Frame;

  describe('on initialisation', function () {
    it('should be defined', function () {
      expect(frame).toBeDefined()
    })
    it('should be an object', function () {
      expect(frame).toEqual(jasmine.any(Object))
    })
  })
  describe('keeps score', function () {
    it('should have an attribute .score', function () {
      expect(frame.score).toBeDefined()
    })
    it('should be an object', function () {
      expect(frame.score).toEqual({})
    })
  })
  describe('can add scores', function () {
    afterEach(function () {
      frame.score = {}
    })
    it('should add score for each throw', function () {
      frame.add('throw1', 5)
      expect(frame.score).toEqual({'throw1': 5})
    })
  })
})