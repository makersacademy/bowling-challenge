describe('Bowling', function () {
  var bowling

  beforeEach(function () {
    bowling = new Bowling()
  })

  describe('#initialize', function () {
    it('should start with 10 frames', function () {
      expect(bowling.session).toEqual(100)
    })

    })
  })
})
