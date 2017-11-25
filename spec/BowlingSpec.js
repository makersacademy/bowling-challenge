describe('Bowling', function () {
  var bowling
  var frame

  beforeEach(function () {
    bowling = new Bowling()
  })

    it('should add to the list of frames', function () {
      bowling.addFrame(5, 5)
      expect(bowling.frames).toContain([5, 5])
    })
  })
})
