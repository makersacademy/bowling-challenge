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
  describe('keeps pin, pin_hits, spares and _strikes counter', function () {
    it('should have an attribute ._pins', function () {
      expect(frame._pins).toEqual(jasmine.any(Array))
    })
    it('should have 20 _pins in two arrays on start', function () {
      expect(frame._pins).toEqual([10, 10])
    })
    it('should have a pin-hit counter', function () {
      expect(frame._hits).toEqual(0)
    })
    it('should have a spare counter', function () {
      expect(frame._spares).toEqual(0)
    })
    it('should have a strike counter', function () {
      expect(frame._strikes).toEqual(0)
    })
  })

  describe('receives the ball and knocks out _pins', function () {
    beforeEach(function () {
      frame._pins = [10, 10]
      frame._hits = 0
      frame._strikes = 0
    })
    afterEach(function () {
      frame._pins = [10, 10]
      frame._hits = 0
      frame._strikes = 0
    })
    it('should reduce the number of _pins on 1st throw from _pins[1st] ', function () {
      frame.newBall(5)
      expect(frame._pins).toEqual([5, 10])
    })
    it('should reduce the number of _pins on 2nd throw from _pins[2nd]', function () {
      frame.newBall(5)
      frame.newBall(4)
      expect(frame._pins).toEqual([5, 6])
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
  })

  describe('keeps _score', function () {
    it('should have an attribute ._score', function () {
      expect(frame._score).toBeDefined()
    })
  })
  describe('can add _scores', function () {
    afterEach(function () {
      frame._score = {}
    })
    it('should add _score for each throw', function () {
      frame.add('throw1', 5)
      expect(frame._score).toEqual({'throw1': 5})
    })
  })
})