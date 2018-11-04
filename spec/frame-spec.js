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
  })
})
