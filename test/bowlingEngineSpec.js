describe('BowlingEngine', function () {
  var mockFrame = {score: []}
  var FrameConstructorMock = function () {
    return mockFrame
  }
  var bowlingEngine = new BowlingEngine(FrameConstructorMock)

  describe('initialisation values', function () {
    it('should have a current frame property', function () {
      expect(bowlingEngine.currentFrame).toEqual(0)
    })
    it('should have a frames array', function () {
      expect(bowlingEngine.frames).toEqual([])
    })
  })

  describe('creates a new frame at the start of the game', function () {
    beforeEach(function () {
      bowlingEngine.currentFrame = 0
      bowlingEngine.frames = []
    })
    afterEach(function () {
      bowlingEngine.currentFrame = 0
      bowlingEngine.frames = []
    })
    it('should call the new frame method on #startGame', function () {
      spyOn(bowlingEngine, 'addFrame')
      bowlingEngine.startGame()
      expect(bowlingEngine.addFrame).toHaveBeenCalledWith()
    })
    it('should create a new frame', function () {
      var cSpy = spyOn(window, 'Frame')
      var bowlingEngine = new BowlingEngine()
      bowlingEngine.addFrame()
      expect(cSpy).toHaveBeenCalled()
    })
    it('should push the new frame into the .frames attribute', function () {
      bowlingEngine.addFrame()
      expect(bowlingEngine.frames[0]).toEqual(mockFrame)
    })
    it('should increment frame count by 1', function () {
      bowlingEngine.addFrame()
      expect(bowlingEngine.currentFrame).toEqual(1)
    })
  })
  describe('can throw a ball', function () {
    it('should have a #throwBall method', function () {
      expect(typeof bowlingEngine.throwBall).toBe('function')
    })

  })
})