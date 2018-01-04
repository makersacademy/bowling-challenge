'use strict';

describe("Game", function() {

  var game;

  beforeEach(function() {
    game = new Game();
  })

  it("should initialise with a score of zero", function() {
    expect(game.score).toEqual(0);
  })
  it("should add the score from the frame to the game score", function() {
    game.bowl(3)
    game.bowl(4)
    expect(game.score).toEqual(7)
  })
  it('should start a new frame on the third roll (no strike)', function() {
    game.bowl(2)
    game.bowl(6)
    game.bowl(2)
    expect(game.frameNumber).toEqual(2)
    expect(game.currentFrame.score).toEqual(2)
  })
  it('should start a new frame after a strike', function() {
    game.bowl(10)
    game.bowl(6)
    expect(game.frameNumber).toEqual(2)
    expect(game.currentFrame.score).toEqual(6)
  })
  it("should add the frame to the frames array once it begins", function() {
    game.bowl(2)
    game.bowl(6)
    game.bowl(2)
    expect(game.frames.length).toEqual(2)
  })
  describe("Strikes and spares", function() {
    it("should add the next two bowled scores to a frame with a strike", function() {
      game.bowl(10)
      game.bowl(6)
      game.bowl(3)
      expect(game.score).toEqual(28)
    })
    it("should add the next bowled score to a frame with a spare", function() {
      game.bowl(5)
      game.bowl(5)
      game.bowl(3)
      game.bowl(2)
      expect(game.score).toEqual(18)
    })
    it("should move to the next frame when a strike is scored", function() {
      game.bowl(10)
      expect(game.frameNumber).toEqual(2)
      game.bowl(10)
      expect(game.frameNumber).toEqual(3)
    })
    it("should calculate scores with consecutive strikes", function() {
      game.bowl(10)
      game.bowl(10)
      game.bowl(10)
      game.bowl(10)
      expect(game.score).toEqual(90)
    })
    it("should add ten to a spare score when followed by a strike", function() {
      game.bowl(5)
      game.bowl(5)
      game.bowl(10)
      expect(game.score).toEqual(30)
    })
    it("should count a frame containing rolls of 0 and 10 as a spare", function() {
      game.bowl(0)
      game.bowl(10)
      game.bowl(0)
      game.bowl(2)
      expect(game.score).toEqual(12)
    })
    it("should calculate a mix of spares, strikes and consecutive strikes", function() {
      game.bowl(5)
      game.bowl(5)
      game.bowl(10)
      game.bowl(10)
      game.bowl(10)
      game.bowl(10)
      game.bowl(3)
      game.bowl(2)
      game.bowl(10)
      game.bowl(6)
      game.bowl(1)
      expect(game.score).toEqual(147)
    })
  })
  describe("Final frame", function() {
    it("should allow three rolls in the final frame if the first two are a spare", function() {
      game.frameNumber = 9
      game.bowl(10)
      game.bowl(5)
      game.bowl(5)
      expect(game.currentFrame.isFrameOver).toEqual(false)
    })
    it("should allow three rolls in the final frame if the first is a strike", function() {
      game.frameNumber = 9
      game.bowl(10)
      game.bowl(10)
      game.bowl(10)
      expect(game.frameNumber).toEqual(10)
      expect(game.currentFrame.isFrameOver).toEqual(false)
    })
    it("shouldn't allow the second roll to take the first two rolls over 10 unless the first was a strike", function() {
      game.frameNumber = 9
      game.bowl(1)
      game.bowl(1)
      game.bowl(9)
      game.bowl(2)
      expect(game.score).toEqual(11)
    })
    it("shouldn't allow the second and third rolls to total more than 10 unless the second was a strike", function() {
      game.frameNumber = 9
      game.bowl(1)
      game.bowl(1)
      game.bowl(10)
      game.bowl(9)
      game.bowl(2)
      expect(game.score).toEqual(21)
      expect(game.currentFrame.isFrameOver).toEqual(false)
    })
  })
  it("should correctly score a perfect game", function() {
    game.bowl(10)
    game.bowl(10)
    game.bowl(10)
    game.bowl(10)
    game.bowl(10)
    game.bowl(10)
    game.bowl(10)
    game.bowl(10)
    game.bowl(10)
    game.bowl(10)
    game.bowl(10)
    game.bowl(10)
    expect(game.score).toEqual(300)
  })
  it("shouldn't allow players to bowl once the game is finished", function() {
    game.bowl(10)
    game.bowl(10)
    game.bowl(10)
    game.bowl(10)
    game.bowl(10)
    game.bowl(10)
    game.bowl(10)
    game.bowl(10)
    game.bowl(10)
    game.bowl(10)
    game.bowl(10)
    game.bowl(10)
    game.bowl(10)
    expect(game.score).toEqual(300)
  })
  it("shouldn't allow a second roll of the frame to take the total frame score past 10", function() {
    game.bowl(9)
    game.bowl(2)
    expect(game.score).toEqual(9)
  })

})