describe("Frame", function() {
  var previousFrame = jasmine.createSpyObj('dummyFrame', {'ifBonusRequired': true, 'bonusRollsRequired': 0});
  var frame;

  describe("non strike", function() {
    beforeEach(function() {
      frame = new Frame(7, previousFrame, 27);
    });

    describe("ongoing frame", function() {
      describe("new", function() {
        it("assigns score equal to value of inital roll", function() {
          expect(frame.total()).toEqual(7);
        });
        it("sets the number of bonus rolls required to zero", function() {
          expect(frame.bonusRollsRequired()).toEqual(0);
        })
        it("sends the number of the rollValue to the previous frame", function() {
          expect(previousFrame.ifBonusRequired).toHaveBeenCalledWith(7);
        })
      })
      describe(".isOngoing", function() {
        it("initially returns true", function() {
          expect(frame.isOngoing()).toEqual(true);
        })
      })
    })

    describe("completed frame", function() {
      beforeEach(function() {
        frame.addRoll(2);
      });
      describe(".addRoll", function() {
        it("adds the value of the second roll to the total score", function() {
          expect(frame.total()).toEqual(9);
        })
        it("sends the value of the second roll to the previous frame", function() {
          expect(previousFrame.ifBonusRequired).toHaveBeenCalledWith(2);
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

      describe(".ifBonusRequired", function() {
        it("does not change bonus value", function() {
          frame.ifBonusRequired(9);
          expect(frame.bonus).toEqual(0);
        })
      })
    })

    describe("completed frame - spare", function() {
      beforeEach(function() {
        frame.addRoll(3);
      });
      describe(".isSpare", function() {
        it("returns true", function() {
          expect(frame.isSpare()).toEqual(true);
        })
        it("sets the number of bonus rolls required to one", function() {
          console.log(frame)
          expect(frame.bonusRollsRequired()).toEqual(1);
        })
      })
      describe(".ifBonusRequired", function() {
        it("increases the bonus value by the rollValue passed to it", function() {
          frame.ifBonusRequired(9);
          expect(frame.bonus).toEqual(9);
        })
        it("reduces the count of bonusRollsRequired", function() {
          frame.ifBonusRequired(9);
          expect(frame.bonusRollsRequired()).toEqual(0);
        })
      })
    })
  })
  describe("strike", function() {
    beforeEach(function() {
      frame = new Frame(10, previousFrame);
    });
    it("frame is over", function() {
      expect(frame.isOngoing()).toEqual(false);
    })
    it("reports being a strike", function() {
      expect(frame.isStrike()).toEqual(true);
    })
    it("sets the number of bonus rolls required to two", function() {
      expect(frame.bonusRollsRequired()).toEqual(2);
    })
    describe(".ifBonusRequired", function() {
      var frameBeforeThat;
      var previousFrame;
      var frame;
      describe("if frame before previous frame does not need bonus rolls", function() {
        beforeEach(function() {
          previousFrame = jasmine.createSpyObj('dummyFrame', {'ifBonusRequired': true, 'bonusRollsRequired': 0});
          frame = new Frame(10, previousFrame);
        });
        it("increases the bonus value by two successive rollValues passed to it", function() {
          frame.ifBonusRequired(9);
          frame.ifBonusRequired(3);
          expect(frame.bonus).toEqual(12);
        })
        it("reduces the count of bonusRollsRequired", function() {
          frame.ifBonusRequired(9);
          expect(frame.bonusRollsRequired()).toEqual(1);
        })
      })
      describe("if previous frame does need a bonus roll", function() {
        beforeEach(function() {
          previousFrame = jasmine.createSpyObj('dummyFrame', {'ifBonusRequired': true, 'bonusRollsRequired': 1});
          frame = new Frame(10, previousFrame);
        });
        it("passes the rollValue on to the previous frame", function() {
          frame.ifBonusRequired(9);
          expect(previousFrame.ifBonusRequired).toHaveBeenCalledWith(9);
        })
        it("does not reduce the number of bonus rolls needed on itself", function() {
          frame.ifBonusRequired(9);
          expect(frame.bonusRollsRequired()).toEqual(2);
        })
      })
    })
  })

});
