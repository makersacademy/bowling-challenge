describe("Frame", function(){
  var frame;

  beforeEach(function() {
    frame = new Frame(3);
  })

  describe("#setSecondRoll", function() {
    it("returns the value of the second roll", function() {
      expect(frame.setSecondRoll(4)).toEqual(4);
    })
  })

  describe("When not spare nor strike", function() {
    describe("#readyToCalculateScore", function() {
      it("returns true if it's not a strike, it's not a spare and the second ball has been thrown", function() {
        frame.setSecondRoll(4)
        expect(frame.readyToCalculateScore()).toBeTruthy();
      })
      it("returns false if the second ball hasn't been thrown", function() {
        expect(frame.readyToCalculateScore()).toBeFalsy();
      })
    })
    describe("#anyBonusPoints", function() {
      it("returns null if not spare nor strike", function() {
        frame.setSecondRoll(3)
        expect(frame.anyBonusPoints()).toEqual(null)
      })
    })
    describe("#isCompleted", function() {
      it("returns true if it's not a strike, it's not a spare and the second ball has been thrown", function() {
        frame.setSecondRoll(4)
        expect(frame.isCompleted()).toBeTruthy();
      })
      it("returns false if the second ball hasn't been thrown", function() {
        expect(frame.isCompleted()).toBeFalsy();
      })
    })
  })

  describe("When spare", function() {
    describe("#readyToCalculateScore", function() {
      it("returns false if it's a spare", function() {
        frame.setSecondRoll(7)
        expect(frame.readyToCalculateScore()).toBeFalsy();
      })
    })
    describe("#anyBonusPoints", function() {
      it("returns spare if spare", function() {
        frame.setSecondRoll(7)
        expect(frame.anyBonusPoints()).toEqual('spare')
      })
    })
  })

  describe("When strike", function() {
    describe("#readyToCalculateScore", function() {
      it("returns false if it's a strike", function() {
        var frame_strike;
        frame_strike = new Frame(10);
        expect(frame_strike.readyToCalculateScore()).toBeFalsy();
      })
    })

    describe("#anyBonusPoints", function() {
      it("returns strike if it's a strike", function() {
        var frame_strike;
        frame_strike = new Frame(10);
        expect(frame_strike.anyBonusPoints()).toEqual('strike')
      })
    })
  })
})
