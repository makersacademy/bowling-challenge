describe('Feature Tests', function () {
  beforeEach(function () {
    this.scorecard = new Scorecard()
  })

  describe('Game', function () {
    describe('first bowl (not a strike)', function () {
      beforeEach(function () {
        this.scorecard.bowl(4)
      })

      it('should create a new frame', function () {
        expect(this.scorecard.frames.length).toEqual(1)
      })

      it('should have one entry in the frames array', function () {
        expect(this.scorecard.frames[0].rolls.length).toEqual(1)
      })

      it('should record the number of pins knocked down', function () {
        expect(this.scorecard.frames[0].rolls[0]).toEqual(4)
      })

      it('should not complete the frame', function () {
        expect(this.scorecard.frames[0].complete).toEqual(false)
      })

      it('should have a frame score of zero', function () {
        expect(this.scorecard.frames[0].score).toEqual(0)
      })

      it('should have a total score of zero', function () {
        expect(this.scorecard.totalScore).toEqual(0)
      })
    })

    // describe('first bowl is a strike!', function () {
    //   it('should create a new frame', function () {});

    //   it('should record 10 pins knocked down', function () {});

    //   it('should complete the frame', function () {});
    // });

    // describe('second bowl (not a spare)', function () {
    //   it('should not create a new frame', function () {});

    //   it('should record the number of pins knocked down', function () {});

    //   it('should have two entries in the frames array', function () {});

    //   it('should complete the frame', function () {});

    //   it('should update the total score', function () {});
    // });

    // describe('second bowl is a spare!', function () {
    //   it('should not create a new frame', function () {});

    //   it('should record the number of pins knocked down', function () {});

    //   it('should have two entries in the frames array', function () {});

    //   it('should not complete the frame', function () {});

    //   it('should not update the total score', function () {});
    // });
  })
})
