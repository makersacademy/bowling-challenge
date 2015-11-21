describe("Game", function() {
  var game;

  beforeEach(function() {
    game = new Game();
  })

  it("Stores 10 frames", function() {
    expect(game.frames.length).toEqual(10)
  })

  describe("#roll", function() {
    it("Returns a number between 0 and the number of standing pins from the existing frame", function() {
      spyOn(Math, 'floor').and.returnValue(5)
      expect(game.roll()).toEqual(5)
    })

    it("Reduces the number of standing pins in the current frame", function() {
      spyOn(Math, 'floor').and.returnValue(5)
      game.roll()
      expect(game.lastFrame.standingPins).toEqual(5)
    })

    it("Adds the score to the current Frame", function() {
      spyOn(Math, 'floor').and.returnValue(5)
      game.roll()
      expect(game.lastFrame.rolls.length).toEqual(1)
    })

  })





  })
