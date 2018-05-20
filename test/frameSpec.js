describe('Frame', function () {
  var frame = new Frame;

  describe('Frame should be a defined object', function () {
    it('should be defined', function () {
      expect(frame).toBeDefined()
    })
    it('should be an object', function () {
      expect(frame).toEqual(jasmine.any(Object))
    })
  })
  describe('Frame.score should be an object', function () {
    it('should have an attribute .score', function () {
      expect(frame.score).toBeDefined()
    })
    it('should be an object', function () {
      expect(frame.score).toEqual({})
    })
  })
  describe('Frame should have a method to add scores', function () {
    afterEach(function () {
      frame.score = {}
    })
    it('should add score for each throw', function () {
      frame.add('throw1', 5)
      expect(frame.score).toEqual({'throw1': 5})
    })
  })
})