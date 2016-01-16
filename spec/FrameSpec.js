describe("Frame", function(){
  var frame;
  var nextFrame;

  beforeEach(function() {
    frame = new Frame();
    frame.rollBall(3)
    nextFrame = {
      getScore: function() {
        return 6
      },
      firstRoll: 3
    }
  })

  describe("#rollBall", function() {
    it("returns the value of the rolled ball", function() {
      frame.rollBall(3)
      expect(frame.rollBall(4)).toEqual(4);
    })
  })

  describe("When not spare nor strike", function() {
    describe("#isCompleted", function() {
      it("returns true if it's not a strike, it's not a spare and the second ball has been thrown", function() {
        frame.rollBall(4)
        expect(frame.isCompleted()).toBeTruthy();
      })
      it("returns false if the second ball hasn't been thrown", function() {
        expect(frame.isCompleted()).toBeFalsy();
      })
    })

    describe("#getScore", function() {
      it("returns the total score of the frame", function() {
        frame.rollBall(4)
        expect(frame.getScore()).toEqual(7)
      })
    })

    describe("#getMessage", function() {
      it("returns the number of last hit pins", function() {
        frame.rollBall(3)
        expect(frame.getMessage()).toEqual('3 hit')
      })
    })

    describe("#updateScore", function() {
      it("returns the total score of the frame unchanged", function() {
        frame.rollBall(3)
        expect(frame.getScore()).toEqual(6)
        expect(frame.updateScore(nextFrame)).toEqual(6)
      })
    })

  })

  describe("When spare", function() {

    describe("#isCompleted", function() {
      it("returns true if it's spare", function() {
        frame.rollBall(7)
        expect(frame.isCompleted()).toBeTruthy();
      })
    })

    describe("#getScore", function() {
      it("returns the total score of the frame", function() {
        frame.rollBall(7)
        expect(frame.getScore()).toEqual(10)
      })
    })

    describe("#getMessage", function() {
      it("returns the total score of the frame", function() {
        frame.rollBall(7)
        expect(frame.getMessage()).toEqual('7 hit, spare!')
      })
    })

    describe("#updateScore", function() {
      it("returns the total score of the frame changed", function() {
        frame.rollBall(7)
        expect(frame.getScore()).toEqual(10)
        expect(frame.updateScore(nextFrame)).toEqual(13)
      })
    })
  })

  describe("When strike", function() {
    var frame_strike;

    beforeEach(function() {
      frame_strike = new Frame();
      frame_strike.rollBall(10);
      nextFrame = {
        getScore: function() {
          return 6
        },
        firstRoll: 3,
        isCompleted: function() {
          return true
        }
      }
    })

    describe("#isCompleted", function() {
      it("returns true if it's strike", function() {
        expect(frame_strike.isCompleted()).toBeTruthy();
      })
    })

    describe("#getScore", function() {
      it("returns the total score of the frame", function() {
        expect(frame_strike.getScore()).toEqual(10)
      })
    })

    describe("#getMessage", function() {
      it("returns the total score of the frame", function() {
        expect(frame_strike.getMessage()).toEqual('Strike!')
      })
    })

    describe("#updateScore", function() {
      it("returns the total score of the frame changed", function() {
        expect(frame_strike.getScore()).toEqual(10)
        expect(frame_strike.updateScore(nextFrame)).toEqual(16)
      })
    })
  })
})
