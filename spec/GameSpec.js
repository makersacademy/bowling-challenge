describe("Game", function() {
  var game;

  beforeEach(function() {
    game = new Game();
  })

  it("Stores 10 frames", function() {
    expect(game.frames.length).toEqual(10)
  })

  it("Begins with a player score equal to 0", function() {
    expect(game.score).toEqual(0)
  })

  describe("#roll", function() {
    it("Returns a number between 0 and the number of standing pins from the existing frame", function() {
      // spyOn(Math, 'floor').and.returnValue(5)
      expect(game.roll(5)).toEqual(5)
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

    it("Adds to the player's score", function() {
      game.roll(5)
      game.roll(1)
      game.roll(10)
      expect(game.score).toEqual(16)
    })

  })





})
