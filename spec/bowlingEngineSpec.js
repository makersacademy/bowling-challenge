describe('BowlingEngine', function () {
  var BowlingEngine = require('../lib/bowlingEngine')
  var bowlingEngine

  var mockFrame = {
    '_hits': 0,
    '_spares': 0,
    '_strikes': 0,
    '_score': [],
    '_isScored': false,
    '_isComplete': false,
    'newBall': function (number) {
      this._score.push(number)
    }
  }
  var FrameConstructorMock = function () {
    return mockFrame
  }
  beforeEach(function () {
    bowlingEngine = new BowlingEngine(FrameConstructorMock)
    // bowlingEngine = new BowlingEngine()
  })

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
      expect(bowlingEngine.addFrame).toHaveBeenCalled()
    })
    it('should create a new frame', function () {
      spyOn(bowlingEngine, '_frameBuilder')
      bowlingEngine.addFrame()
      expect(bowlingEngine._frameBuilder).toHaveBeenCalled()
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
    beforeEach(function () {
      bowlingEngine.currentFrame = 0
      bowlingEngine.frames = []
    })
    afterEach(function () {
      bowlingEngine.currentFrame = 0
      bowlingEngine.frames = []
    })
    it('should have a #throwBall method', function () {
      expect(typeof bowlingEngine.throwBall).toBe('function')
    })
    it('should throw a ball of set number', function () {
      spyOn(mockFrame, 'newBall')
      bowlingEngine.addFrame()
      bowlingEngine.throwBall(10)
      expect(mockFrame.newBall).toHaveBeenCalledWith(10)
    })
  })
  describe('it adds frames into array', function () {
    beforeEach(function () {
      bowlingEngine.currentFrame = 0
      bowlingEngine.frames = []
    })
    afterEach(function () {
      bowlingEngine.currentFrame = 0
      bowlingEngine.frames = []
    })
    it('should add a new frame to .frames array ', function () {
      bowlingEngine.addFrame()
      bowlingEngine.addFrame()
      expect(bowlingEngine.frames.length).toEqual(2)
    })
    it('should increment the currentFrame counter', function () {
      bowlingEngine.addFrame()
      bowlingEngine.addFrame()
      expect(bowlingEngine.currentFrame).toEqual(2)
    })
  })
})
