describe('Frame', function () {
  var Frame = require('../lib/frame')
  var frame

  beforeEach(function () {
    frame = new Frame()
  })

  describe('on initialisation', function () {
    it('should be defined', function () {
      expect(frame).toBeDefined()
    })
    it('should be an object', function () {
      expect(frame).toEqual(jasmine.any(Object))
    })
  })
  describe('keeps counters', function () {
    it('should have a pin-hit counter', function () {
      expect(frame._hits).toEqual(0)
    })
    it('should have a spare counter', function () {
      expect(frame._spares).toEqual(0)
    })
    it('should have a strike counter', function () {
      expect(frame._strikes).toEqual(0)
    })
    it('should have a _scores array', function () {
      expect(frame._score).toEqual([])
    })
    it('should have a _isScored boolean', function () {
      expect(frame._isScored).toEqual(false)
    })
    it('should have a _isComplete boolean', function () {
      expect(frame._isComplete).toEqual(false)
    })
  })

  describe('#score method', function () {
    it('should change _isScored when the method is called', function () {
      frame.scored()
      expect(frame._isScored).toEqual(true)
    })
  })

  describe('receives the ball and knocks out _pins', function () {
    beforeEach(function () {
      frame._hits = 0
      frame._strikes = 0
      frame._spares = 0
      frame._score = []
      frame._isScored = false
      frame._isComplete = false
    })
    afterEach(function () {
      frame._hits = 0
      frame._strikes = 0
      frame._spares = 0
      frame._score = []
      frame._isScored = false
      frame._isComplete = false
    })
    it('should record the score after the first throw', function () {
      frame.newBall(5)
      expect(frame._score[0]).toEqual(5)
    })
    it('should record the second score after the first throw', function () {
      frame.newBall(5)
      frame.newBall(4)
      expect(frame._score).toEqual([5, 4])
    })
    it('should mark the frame complete after two throws', function () {
      frame.newBall(5)
      frame.newBall(4)
      expect(frame._isComplete).toEqual(true)
    })
    it('should throw an error if newBall tries to hit more than twice', function () {
      frame.newBall(5)
      frame.newBall(4)
      expect(function () {
        frame.newBall(4)
      }).toThrow('Frame had two hits.')
    })
    it('should record a strike if newBall is 10 on the 1st throw', function () {
      frame.newBall(10)
      expect(frame._strikes).toEqual(1)
    })
    it('should record frame is complete on strike', function () {
      frame.newBall(10)
      expect(frame._isComplete).toEqual(true)
    })
    it('should record a spare if newBall knocks out all remaining pins on second throw', function () {
      frame.newBall(5)
      frame.newBall(5)
      expect(frame._spares).toEqual(1)
    })
  })
})
