describe("Frame", function() {
  var frame;

  describe("non strike", function() {
    beforeEach(function() {
      frame = new Frame(frameNumber = 3, firstRoll = 7);
    });

    describe("ongoing frame", function() {
      describe("new", function() {
        it("assigns a number", function() {
          expect(frame.number()).toEqual(3);
        });
        it("assigns score equal to value of inital roll", function() {
          expect(frame.total()).toEqual(7);
        });
      })
      describe(".isOngoing", function() {
        it("initially returns true", function() {
          expect(frame.isOngoing()).toEqual(true);
        })
      })
    })

    describe("completed frame", function() {
      beforeEach(function() {
        frame.addRoll(second_roll = 2);
      });
      describe(".addRoll", function() {
        it("adds the value of the second roll to the total score", function() {
          expect(frame.total()).toEqual(9);
        })
      })

      describe(".addBonus", function() {
        it("adds the supplied bonus score to the total for the frame", function() {
          frame.addBonus(bonus = 5);
          expect(frame.total()).toEqual(14);
        })
      })

      describe(".isOngoing", function() {
        it("returns false", function() {
          expect(frame.isOngoing()).toEqual(false);
        })
      })

      describe(".isSpare", function() {
        it("returns false", function() {
          expect(frame.isSpare()).toEqual(false);
        })
      })
    })

    describe("completed frame - spare", function() {
      beforeEach(function() {
        frame.addRoll(second_roll = 3);
      });

      describe(".isSpare", function() {
        it("returns true", function() {
          expect(frame.isSpare()).toEqual(true);
        })
      })
    })
  })
  describe("strike", function() {
    beforeEach(function() {
      frame = new Frame(frameNumber = 3, firstRoll = 10);
    });
    it("frame is over", function() {
      expect(frame.isOngoing()).toEqual(false);
    })
    it("reports being a strike", function() {
      expect(frame.isStrike()).toEqual(true);
    })
  })

});
