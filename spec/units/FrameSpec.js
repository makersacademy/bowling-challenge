describe("Frame", function() {
  var frame;

  beforeEach(function() {
    frame = new Frame(frameNumber = 3, first_roll = 7);
  });

  describe("ongoing frame", function() {
    describe("#initialize", function() {
      it("assigns a number", function() {
        expect(frame.number()).toEqual(3);
      });
      it("assigns score equal to value of inital roll", function() {
        expect(frame.total()).toEqual(7);
      });
    })
  })

  describe("completed frame", function() {
    beforeEach(function() {
      frame.add_roll(second_roll = 2);
    });
    describe("#add_roll", function() {
      it("adds the value of the second roll to the total score", function() {
        expect(frame.total()).toEqual(9);
      })
    })

    describe("#add_bonus", function() {
      it("adds the supplied bonus score to the total for the frame", function() {
        frame.add_bonus(bonus = 5);
        expect(frame.total()).toEqual(14)
      })
    })

  })

});
