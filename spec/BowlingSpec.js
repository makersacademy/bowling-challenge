'use strict';

describe("Bowling", function() {
  var game;
  var frame;

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
  
});

