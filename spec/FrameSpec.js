describe("Frame", function(){
  var frame;
  var nextFrame;

  describe("When not spare nor strike", function() {

    beforeEach(function() {
      ball = {
        roll: function() { return 3 }
      }
      frame = new Frame(ball);
      frame.rollBall()
      nextFrame = {
        getTempScore: function() {
          return 6
        },
        firstRoll: 3
      }
    })

    describe("#rollBall", function() {
      it("returns the value of the rolled ball", function() {
        frame.rollBall()
        expect(frame.rollBall()).toEqual(3);
      })
    })

    describe("#isCompleted", function() {
      it("returns true if it's not a strike, it's not a spare and the second ball has been thrown", function() {
        frame.rollBall()
        expect(frame.isCompleted()).toBeTruthy();
      })
      it("returns false if the second ball hasn't been thrown", function() {
        expect(frame.isCompleted()).toBeFalsy();
      })
    })

    describe("#getTempScore", function() {
      it("returns the total score of the frame", function() {
        frame.rollBall()
        expect(frame.getTempScore()).toEqual(6)
      })
    })

    describe("#getScore", function() {
      it("returns the total score only if the frame is ready to display the score", function() {
        frame.rollBall()
        expect(frame.getScore()).toEqual('')
      })

      it("returns the total score only if the frame is ready to display the score", function() {
        frame.rollBall()
        frame.rollBall()
        expect(frame.getScore()).toEqual(6)
      })
    })

    describe("#getMessage", function() {
      it("returns the number of last hit pins", function() {
        frame.rollBall()
        expect(frame.getMessage()).toEqual('3 hit')
      })
    })

    describe("#updateScore", function() {
      it("returns the total score of the frame unchanged", function() {
        frame.rollBall()
        expect(frame.getTempScore()).toEqual(6)
        expect(frame.updateScore(nextFrame)).toEqual(6)
      })
    })

  })

  describe("When spare", function() {

    beforeEach(function() {
      ball = {
        roll: function() { return 5 }
      }
      frame = new Frame(ball);
      frame.rollBall()
      nextFrame = {
        getTempScore: function() {
          return 6
        },
        firstRoll: 3
      }
    })

    describe("#isCompleted", function() {
      it("returns true if it's spare", function() {
        frame.rollBall()
        expect(frame.isCompleted()).toBeTruthy();
      })
    })

    describe("#getTempScore", function() {
      it("returns the total score of the frame", function() {
        frame.rollBall()
        expect(frame.getTempScore()).toEqual(10)
      })
    })

    describe("#getMessage", function() {
      it("returns the total score of the frame", function() {
        frame.rollBall()
        expect(frame.getMessage()).toEqual('5 hit, spare!')
      })
    })

    describe("#updateScore", function() {
      it("returns the total score of the frame changed", function() {
        frame.rollBall()
        expect(frame.getTempScore()).toEqual(10)
        expect(frame.updateScore(nextFrame)).toEqual(13)
      })
    })
  })

  describe("When strike", function() {
    var frame;

    beforeEach(function() {
      ball = {
        roll: function() { return 10 }
      }
      frame = new Frame(ball);
      frame.rollBall()
      nextFrame = {
        getTempScore: function() {
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
        expect(frame.isCompleted()).toBeTruthy();
      })
    })

    describe("#getTempScore", function() {
      it("returns the total score of the frame", function() {
        expect(frame.getTempScore()).toEqual(10)
      })
    })

    describe("#getMessage", function() {
      it("returns the total score of the frame", function() {
        expect(frame.getMessage()).toEqual('Strike!')
      })
    })

    describe("#updateScore", function() {
      it("returns the total score of the frame changed", function() {
        expect(frame.getTempScore()).toEqual(10)
        expect(frame.updateScore(nextFrame)).toEqual(16)
      })
    })
  })
})
