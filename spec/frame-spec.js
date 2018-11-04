describe ('Frame', function () {
  var frame
  var game

  beforeEach(function () {
    frame = new Frame()
    game = jasmine.createSpy('game')
  })

  describe('A frame', function () {
    it('should have a score', function () {
      expect(frame.getScore()).toEqual(0)
    })

    it('can store bowls', function () {
      expect(frame.getBowls()).toEqual([])
    })

    it('calculates its score based on its bowls', function () {
      frame.getBowls().push(5)
      frame.getBowls().push(2)
      expect(frame.getScore()).toEqual(7)
    })
  })
})
