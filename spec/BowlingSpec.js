'use strict';

describe("Bowling", function() {
  var game;
  var frame;
  var roll;

  beforeEach(function() {
    game = new Bowling()
  })

  describe("isSpare", function() {
    it("returns true if the frame is a spare", function() {
      frame = [5, 5]
      expect(game.isSpare(frame)).toBe(true)
    })
    
    it("returns false if the frame is not a spare", function() {
      frame = [4,1]
      expect(game.isSpare(frame)).toBe(false)
    })
  })

  describe("isStrike", function() {
    it("returns true if the frame is a strike", function() {
      frame = [10]
      expect(game.isStrike(frame)).toBe(true)
    })

    it("returns false if the frame is not a strike", function() {
      frame = [3, 5]
      expect(game.isStrike(frame)).toBe(false)
    })
  })

  describe("isGutterGame", function() {
    it("returns true if the total game score is 0 across 20 rolls", function() {
      game.game = [[0,0], [0,0], [0,0], [0,0], [0,0], [0,0], [0,0], [0,0], [0,0], [0,0]]
      expect(game.isGutterGame(game.game)).toBe(true)
    })

    it("returns flase if the total game score is > 0", function() {
      game.game = [[4,5], [0,0], [0,0], [0,0], [0,0], [0,0], [0,0], [0,0], [0,0], [10,0]]
      expect(game.isGutterGame(game.game)).toBe(false)
    })
  })

  describe("isTenthFrame", function() {
    it("returns true if the number of frames already played is 9", function() {
      game.game = [[4,5], [0,0], [0,0], [0,0], [0,0], [0,0], [0,0], [0,0], [0,0]]
      expect(game.isTenthFrame(game.game)).toBe(true)
    })

    it("returns false if the number of frames != 9", function() {
      game.game = []
      expect(game.isTenthFrame(game.game)).toBe(false)
    })
  })

  describe("addToScore", function() {
    it("adds the score of a frame to the total score", function() {
      frame = [4, 3]
      game.addToScore(frame)
      expect(game.score).toBe(7)
    })
  })
  
  describe("isSecondRoll", function() {
    it("returns true if there is already a number recorded in the frame", function() {
      frame = [3]
      expect(game.isSecondRoll(frame)).toBe(true)
    })

    it("returns false if there is no recorded number in the frame", function() {
      frame = []
      expect(game.isSecondRoll(frame)).toBe(false)
    })

    it("returns false if there are two recorded numbers in the frame", function() {
      frame = [3,5]
      expect(game.isSecondRoll(frame)).toBe(false)
    })
  })

  describe("addRoll", function() {
    it("Adds the roll to the frame", function() {
      roll = 4
      game.addRoll(roll)
      expect(game.frame).toEqual([4])
    })

    it("adds another roll to a frame where a number already exists", function() {
      roll = 5
      game.frame = [4]
      game.addRoll(roll)
      expect(game.frame).toEqual([4, 5])
    })
  })

  describe("addFrameToGame", function() {
    it("adds the frame to the array of frames in this.game", function() {
      frame = [3,5]
      game.addFrameToGame(frame)
      expect(game.game).toEqual([[3,5]])
    })

    it("adds the frame in sequential order", function() {
      game.game = [[3,5], [8,1]]
      frame = [1,4]
      game.addFrameToGame(frame)
      expect(game.game).toEqual([[3,5], [8,1], [1,4]])
    })
  })

  describe("updateFrameCount", function() {
    it("Updates the frame count", function() {
      frame = [1,4]
      game.addFrameToGame(frame)
      game.updateFrameCount()
      expect(game.frameCount).toBe(1)
    })
  })

  describe("resetFrame", function() {
    it("Rests the frame to be an empty array", function() {
      game.frame = [1,4]
      game.resetFrame()
      expect(game.frame).toEqual([])
    })
  })
});

  // describe("isPerfectGame", function() {
  //   it("returns true if the player has got 12 strikes", function() {
  //     game.game = [[10], [10], [10], [10], [10], [10], [10], [10], [10], [10], [10], [10]]
  //     expect(game.isPerfectGame(game.game)).toBe(true)
  //   })
  // })