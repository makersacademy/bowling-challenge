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

    describe("#bothBallThrown", function() {
      it("returns true if it's not a strike, it's not a spare and the second ball has been thrown", function() {
        frame.rollBall()
        expect(frame.bothBallThrown()).toBeTruthy();
      })
      it("returns false if the second ball hasn't been thrown", function() {
        expect(frame.bothBallThrown()).toBeFalsy();
      })
    })

    describe("#getTempScore", function() {
      it("returns the temporary total score of the frame", function() {
        expect(frame.getTempScore()).toEqual(3)
      })
    })

    describe("#getFinalScore", function() {
      it("returns empty string when the frame score is not final", function() {
        expect(frame.getFinalScore()).toEqual('')
      })

      it("returns the total score when the frame score is final", function() {
        frame.rollBall()
        frame.updateScore(nextFrame)
        expect(frame.getFinalScore()).toEqual(6)
      })
    })

    describe("#getMessage", function() {
      it("returns the number of last hit pins", function() {
        frame.rollBall()
        expect(frame.getMessage()).toEqual('3 hit')
      })
    })

    describe("#updateScore", function() {
      it("returns the temp score if score isn't updated", function() {
        expect(frame.updateScore(nextFrame)).toEqual(3)
      })
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

    describe("#bothBallThrown", function() {
      it("returns true when both ball thrown and it's spare", function() {
        frame.rollBall()
        expect(frame.bothBallThrown()).toBeTruthy();
      })
    })

    describe("#getTempScore", function() {
      it("returns the temporary total score of the frame", function() {
        expect(frame.getTempScore()).toEqual(5)
      })
      it("returns the temporary total score of the frame", function() {
        frame.rollBall()
        expect(frame.getTempScore()).toEqual(10)
      })
    })

    describe("#getFinalScore", function() {
      it("returns empty string when the frame score is not final", function() {
        expect(frame.getFinalScore()).toEqual('')
      })

      it("returns empty string when the frame score is not final", function() {
        frame.rollBall()
        expect(frame.getFinalScore()).toEqual('')
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
        expect(frame.getFinalScore()).toEqual(13)
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
        bothBallThrown: function() {
          return true
        }
      }
    })

    describe("#bothBallThrown", function() {
      it("returns true if it's strike", function() {
        expect(frame.bothBallThrown()).toBeTruthy();
      })
    })

    describe("#getTempScore", function() {
      it("returns the total score of the frame", function() {
        expect(frame.getTempScore()).toEqual(10)
      })
    })

    describe("#getFinalScore", function() {
      it("returns empty string when the frame score is not final", function() {
        expect(frame.getFinalScore()).toEqual('')
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
        expect(frame.getFinalScore()).toEqual(16)
      })
    })
  })
})
