describe('Scorecard', function () {
  beforeEach(function () {
    this.frame1 = jasmine.createSpyObj('frame', ['bowl', 'setComplete'])
    this.scorecard = new Scorecard([this.frame1])
  })

  describe('constructor', function () {
    it('should have an empty frames array', function () {
      let sc = new Scorecard()
      expect(sc.frames).toEqual([])
    })

    it('should have a pre-populated frames array', function () {
      expect(this.scorecard.frames).toEqual([this.frame1])
    })

    it('should have a totalScore of zero', function () {
      expect(this.scorecard.totalScore).toEqual(0)
    })
  })

  describe('bowl', function () {
    describe('first bowl (not a strike)', function () {
      it('should bowl the ball', function () {
        this.scorecard.bowl(4)
        expect(this.scorecard.frames[0].bowl).toHaveBeenCalledWith(4)
      })
    })

    describe('first bowl is a strike!', function () {
      beforeEach(function () {
        this.scorecard.bowl(10)
      })
      it('should bowl a strike', function () {
        expect(this.frame1.bowl).toHaveBeenCalledWith(10)
      })

      it('should complete the frame', function () {
        expect(this.frame1.setComplete).toHaveBeenCalled()
      })
    })

    describe('second bowl (not a spare)', function () {
      it('should not create a new frame', function () {})

      it('should record the number of pins knocked down', function () {})

      it('should have two entries in the frames array', function () {})

      it('should complete the frame', function () {})

      it('should update the total score', function () {})
    })

    // describe('second bowl is a spare!', function() {
    //   it('should not create a new frame', function() {});

    //   it('should record the number of pins knocked down', function() {});

    //   it('should have two entries in the frames array', function() {});

    //   it('should not complete the frame', function() {});

    //   it('should not update the total score', function() {});
    // });
  })
})
