describe("Game", function() {
  let game, frameSpy;

  beforeEach(function() {
    game = new Game();

    // frameSpy = jasmine.createSpyObj("frameSpy", {
    //   "addRoll": undefined,
    //   "isCompleted": false,
    //   "owedRolls": 2
    //   })

  })

  describe("creates a frame", function() {

    it("and stores it", function() {
      game.createFrame()
      expect(game.frames.length).toEqual(1)
    })

    it("when a roll is input", function() {
      game.inputRoll(4)
      expect(game.frames.length).toEqual(1)
    })

    it("as appropriate", function() {
      game.inputRoll(10)
      game.inputRoll(3)
      expect(game.frames.length).toEqual(2)
    })

  })

  describe("calculates scores:", function() {

    it("sums scores for first frame (no strike/spare)", function() {
      game.inputRoll(4)
      game.inputRoll(3)
      expect(game.scores.frame_1).toEqual(7)
    })

    it("sums scores for second frame (no strike/spare", function() {
      game.inputRoll(4)
      game.inputRoll(3)
      game.inputRoll(2)
      game.inputRoll(3)
      expect(game.scores.frame_2).toEqual(5)
    })

    it("saves how many rolls are owed to a completed frame", function() {
      game.inputRoll(10)
      game.inputRoll(3)
      expect(game.owedRolls.frame_1).toEqual(1)
    })

    it("adds on the next roll if there was a spare", function() {
      game.inputRoll(4)
      game.inputRoll(6)
      expect(game.scores.frame_1).toEqual(10)

      game.inputRoll(2)
      expect(game.scores.frame_1).toEqual(12)
    })

    it("knows final score", function() {
      rolls = [1, 4, 4, 5, 6, 4, 5, 5, 10, 0, 1, 7, 3, 6, 4, 10, 2, 8, 6]
      rolls.forEach( (pins) => {
        game.inputRoll(pins)
      })
      expect(game.finalScore()).toEqual(133)
    })

  })




})
