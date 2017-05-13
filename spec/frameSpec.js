'use strict';

describe('Frame', function() {
  var frame

  beforeEach(function() {
    frame = new Frame(1)
  })

  it("sets the id for the frame as whatever is input when creating a new object", function() {
    expect(frame.id).toEqual(1)
  })

  it("adds a roll to the rolls array", function() {
    frame.addRoll(7)
    expect(frame.rolls).toEqual([7])
  })

  it("adds 2 rolls to the rolls array", function() {
    frame.addRoll(7)
    expect(frame.rolls).toEqual([7])
    frame.addRoll(2)
    expect(frame.rolls).toEqual([7,2])
  })

  describe("checkIfFinished", function() {
    it("sets isFinished to false when frame is created", function() {
      expect(frame.isFinished).toEqual(false)
    })

    it("isFinished stays false if you roll a number below 10", function() {
      frame.addRoll(6)
      expect(frame.isFinished).toEqual(false)
    })

    it("isFinished changes to true after player has 2 rolls", function() {
      frame.addRoll(4)
      frame.addRoll(5)
      expect(frame.isFinished).toEqual(true)
    })

    it("isFinsihed is not changed to true after the player has 2 rolls on their 10th frame and they get a spare on the second roll", function() {
      frame = new Frame(10)
      frame.addRoll(5)
      frame.addRoll(5)
      expect(frame.isFinished).toEqual(false)
    })

    it("isFinished is changed to true after player has 2 rolls on their 10th frame and they don't get a spare on the second roll", function() {
      frame = new Frame(10)
      frame.addRoll(5)
      frame.addRoll(4)
      expect(frame.isFinished).toEqual(true)
    })
  })

  describe("changeFrameScore", function() {

    it("increases the frame score by the roll if it isn't a strike", function() {
      frame.addRoll(3)
      expect(frame.frameScore).toEqual(3)
    });

    it("increases the frame score by the total of the 2 rolls if it isn't a spare or strike", function() {
      frame.addRoll(3)
      frame.addRoll(4)
      expect(frame.frameScore).toEqual(7)
    });

    it("increases the frame score by 10 if the player rolls a strike and sets strike to true", function() {
      frame.addRoll(10)
      expect(frame.frameScore).toEqual(10)
      expect(frame.isStrike).toEqual(true)
    });

    it("increases the frame score by the total of the 2 rolls if it is a spare and sets spare to true", function() {
      frame.addRoll(6)
      frame.addRoll(4)
      expect(frame.frameScore).toEqual(10)
      expect(frame.isSpare).toEqual(true)
    });

    it("increases the frame score by the roll if it isn't a strike", function() {
      frame.addRoll(10)
      expect(frame.frameScore).toEqual(10)
      frame.addRoll(6)
      frame.addRoll(4)
      expect(frame.frameScore).toEqual(30)
    });
  })
})
