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
    'newBall': function (number) {}
  }

  var mockFrameComplete = {
    '_hits': 2,
    '_spares': 0,
    '_strikes': 0,
    '_score': [5, 4],
    '_isScored': false,
    '_isComplete': true,
    'newBall': function (number) {}
  }
  var mockFrameCompleteSpare = {
    '_hits': 2,
    '_spares': 1,
    '_strikes': 0,
    '_score': [5, 5],
    '_isScored': false,
    '_isComplete': true,
    'newBall': function (number) {}
  }
  var FrameConstructorMock = function () {
    return mockFrame
  }
  var FrameConstructorMock1 = function () {
    return mockFrameComplete
  }
  var FrameConstructorMockSpare = function () {
    return mockFrameCompleteSpare
  }
  beforeEach(function () {
    bowlingEngine = new BowlingEngine(FrameConstructorMock)
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
    it('should check if current frame is complete and throw ball in the next frame', function () {
      bowlingEngine.currentFrame = 1
      bowlingEngine.frames = [mockFrameCompleteSpare]
      bowlingEngine.throwBall(5)
      expect(bowlingEngine.currentFrame).toEqual(2)
      expect(bowlingEngine.frames.length).toEqual(2)
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
  describe('frameSelector', function () {
    beforeEach(function () {
      bowlingEngine.currentFrame = 0
      bowlingEngine.frames = []
    })
    afterEach(function () {
      bowlingEngine.currentFrame = 0
      bowlingEngine.frames = []
    })
    it('should return false if it is not the last frame', function () {
      spyOn(bowlingEngine, '_frameBuilder')
      bowlingEngine.addFrame()
      expect(bowlingEngine._frameBuilder).toHaveBeenCalledWith()
    })
    it('should return true if it is the last frame', function () {
      spyOn(bowlingEngine, '_frameBuilder')
      bowlingEngine.addFrame()
      bowlingEngine.addFrame()
      bowlingEngine.addFrame()
      bowlingEngine.addFrame()
      bowlingEngine.addFrame()
      bowlingEngine.addFrame()
      bowlingEngine.addFrame()
      bowlingEngine.addFrame()
      bowlingEngine.addFrame()
      bowlingEngine.addFrame()
      expect(bowlingEngine._frameBuilder).toHaveBeenCalledWith('last')
    })
  })
  describe('scoring', function () {
    beforeEach(function () {
      bowlingEngine = new BowlingEngine(FrameConstructorMock1)
      bowlingEngine.currentFrame = 0
      bowlingEngine.frames = []
      mockFrameCompleteSpare._isScored = false
      mockFrameComplete._isScored = false

    })
    afterEach(function () {
      bowlingEngine = new BowlingEngine(FrameConstructorMock1)
      bowlingEngine.currentFrame = 0
      bowlingEngine.frames = []
      mockFrameCompleteSpare._isScored = false
      mockFrameComplete._isScored = false
    })
    it('should call score after every throw ball', function () {
      spyOn(bowlingEngine, 'score')
      bowlingEngine.addFrame()
      bowlingEngine.throwBall(5)
      expect(bowlingEngine.score).toHaveBeenCalled()
    })
    it('should score the frames', function () {
      bowlingEngine.currentFrame = 1
      bowlingEngine.frames = [mockFrameComplete]
      bowlingEngine.score()
      expect(bowlingEngine.totalScore).toEqual(9)
    })
    it('should score previous frame on spare', function () {
      bowlingEngine.currentFrame = 2
      bowlingEngine.frames = [mockFrameCompleteSpare, mockFrameComplete]
      bowlingEngine.score()
      expect(bowlingEngine.totalScore).toEqual(24)
    })
  })
})
