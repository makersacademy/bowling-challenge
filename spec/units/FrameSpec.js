describe("Frame", function() {
  var frame;

  describe("non strike", function() {
    beforeEach(function() {
      frame = new Frame(firstRoll = 7);
    });

    describe("ongoing frame", function() {
      describe("new", function() {
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
      describe(".isSpare", function() {
        it("returns true", function() {
          frame.addRoll(second_roll = 3);
          expect(frame.isSpare()).toEqual(true);
        })
      })
    })
  })
  describe("strike", function() {
    beforeEach(function() {
      frame = new Frame(firstRoll = 10);
    });
    it("frame is over", function() {
      expect(frame.isOngoing()).toEqual(false);
    })
    it("reports being a strike", function() {
      expect(frame.isStrike()).toEqual(true);
    })
  })

});
