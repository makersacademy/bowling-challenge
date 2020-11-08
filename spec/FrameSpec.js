describe("Frame", function () {
  var frame;

  beforeEach(function () {
    frame = new Frame
  })

  describe("#pins", function () {
    it("can store two rolls and return their total", function () {
      frame.roll(3)
      frame.roll(4)
      expect(frame.pins()).toEqual(7)
    })
  })

  describe("#isStrike", function () {
    it("knows if it was a strike", function () {
      frame.roll(10)
      expect(frame.isStrike()).toEqual(true)
    })
    it("knows if it wasn't a strike", function () {
      frame.roll(3)
      frame.roll(3)
      expect(frame.isStrike()).toEqual(false)
    })
  })

  describe("#isSpare", function () {
    it("Knows if it was a spare", function () {
      frame.roll(7)
      frame.roll(3)
      expect(frame.isSpare()).toEqual(true)
    })

    it("Knows if it wasn't a spare", function () {
      frame.roll(3)
      frame.roll(4)
      expect(frame.isSpare()).toEqual(false)
    })

    it("Knows a strike isn't a spare", function () {
      frame.roll(10)
      expect(frame.isSpare()).toEqual(false)
    })
  })

  describe("#nextRoll1", function () {
    it("on a standard frame gets the first roll from the next frame", function () {
      var standardFrame = new Frame([7, 2], 7)
      var nextFrame1 = new Frame([6, 2], 8)
      expect(standardFrame.nextRoll1(nextFrame1)).toEqual(6)
    })
    it("on the 10th frame gets the first bonus roll", function () {
      lastFrame = new Frame([7, 3], 10)
      lastFrame.roll(9)
      expect(lastFrame.nextRoll1()).toEqual(9)
    })
  })

  describe("#nextRoll2", function () {
    var standardFrame
    var ninthFrame
    var tenthFrame
    beforeEach(function () {
      standardFrame = new Frame([10], 4)
      ninthFrame = new Frame([10, 9])
      tenthFrame = new Frame([10], 10)
      tenthFrame.roll(4)
      tenthFrame.roll(6)
    })
    it("On a standard frame, when next frame isn't a strike, gets second roll from next frame", function () {
      nextFrame1 = new Frame([4, 5], 5)
      nextFrame2 = new Frame([3, 2], 6)
      expect(standardFrame.nextRoll2(nextFrame1, nextFrame2)).toEqual(5)
    })
    it("On a standard frame, when next frame is a strike, gets first roll from frame after next", function () {
      nextFrame1 = new Frame([10], 5)
      nextFrame2 = new Frame([3, 2], 6)
      expect(standardFrame.nextRoll2(nextFrame1, nextFrame2)).toEqual(3)
    })
    it("On 9th frame, when 10th frame is a strike, gets first bonus roll of 10th frame", function () {
      expect(ninthFrame.nextRoll2(tenthFrame)).toEqual(4)
    })
    it("On the 10th frame, gets the second bonus roll", function () {
      expect(tenthFrame.nextRoll2()).toEqual(6)
    })
  })

  describe("#bonus", function () {
    var frame
    var nextFrame1
    var nextFrame2
    beforeEach(function () {
      frame = new Frame
      spyOn(frame, 'nextRoll1').and.returnValue(3)
      spyOn(frame, 'nextRoll2').and.returnValue(4)
    })
    it("for strike, sums next two rolls", function () {
      frame.roll(10)
      expect(frame.bonus(nextFrame1, nextFrame2)).toEqual(7)
    })
    it("for spare, return value of next roll", function () {
      frame.roll(8)
      frame.roll(2)
      expect(frame.bonus(nextFrame1, nextFrame2)).toEqual(3)
    })
    it("will otherwise return 0", function () {
      frame.roll(3)
      frame.roll(2)
      expect(frame.bonus(nextFrame1, nextFrame2)).toEqual(0)
    })
  })

  describe('#score', function () {
    var nextFrame1
    var nextFrame2
    it("returns the sum of the pins and the bonus", function () {
      spyOn(frame, 'pins').and.returnValue(10)
      spyOn(frame, 'bonus').and.returnValue(7)
      expect(frame.score(nextFrame1, nextFrame2)).toEqual(17)
    })
  })

  describe("#isComplete", function () {
    var frame
    describe("for first nine frames", function () {
      beforeEach(function () {
        frame = new Frame([], 1)
      })
      it("returns true after two rolls", function () {
        frame.roll(7)
        frame.roll(2)
        expect(frame.isComplete()).toEqual(true)
      })
      it("returns false after one roll", function () {
        frame.roll(5)
        expect(frame.isComplete()).toEqual(false)
      })
      it('returns true after a strike', function () {
        frame.roll(10)
        expect(frame.isComplete()).toEqual(true)
      })
    })
    describe("for the tenth frame", function () {
      beforeEach(function () {
        frame = new Frame([], 10)
      })
      it("returns true after two standard rolls", function () {
        frame.roll(7)
        frame.roll(2)
        expect(frame.isComplete()).toEqual(true)
      })
      it("returns false after a spare", function () {
        frame.roll(7)
        frame.roll(3)
        expect(frame.isComplete()).toEqual(false)
      })
      it("returns true after a strike and two bonus rolls", function () {
        frame.roll(10)
        frame.roll(3)
        frame.roll(4)
        expect(frame.isComplete()).toEqual(true)
      })
      it("returns true after a spare and one bonus roll", function () {
        frame.roll(7)
        frame.roll(3)
        frame.roll(4)
        expect(frame.isComplete()).toEqual(true)
      })
    })
  })

})