describe("Game", function() {
  var game;

  beforeEach(function() {
    game = new Game();
  })

  it("Stores 10 frames", function() {
    expect(game.frames.length).toEqual(10)
  })

  it("Knows which frame is the 10th", function() {
    expect(game.frames[game.frames.length - 1].isLastFrame).toBe(true)
  })

  it("Keeps track of the bonus index associated with a spare", function() {
    game.roll(6)
    game.roll(4)
    expect(game.bonusIndexes).toEqual([2])
  })

  it("Keeps track of the bonus index associated with a strike", function() {
    game.roll(10)
    expect(game.bonusIndexes).toEqual([1,2])
  })

  describe("#roll", function() {
    it("Returns a number between 0 and the number of standing pins from the existing frame", function() {
      // spyOn(Math, 'floor').and.returnValue(5)
      game.roll(5)
      expect(game.rolls).toEqual([5])
    })

    it("Reduces the number of standing pins in the current frame", function() {
      // spyOn(Math, 'floor').and.returnValue(5)
      game.roll(5)
      expect(game.currentFrame().standingPins).toEqual(5)
    })

    it("Adds the score to the current Frame", function() {
      // spyOn(Math, 'floor').and.returnValue(5)
      game.roll(5)
      expect(game.currentFrame().rolls.length).toEqual(1)
    })

    it("Stores the value of the roll", function() {
      game.roll(6)
      expect(game.rolls).toEqual([6])
    })
  })
})
