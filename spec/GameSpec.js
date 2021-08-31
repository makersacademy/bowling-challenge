describe("Game", function() {
  let game;

  beforeEach(function() {
    game = new Game();
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

    it("knows total score", function() {
      rolls = [1, 4, 4, 5, 6, 4, 5, 5, 10, 0, 1, 7, 3, 6, 4, 10, 2, 8, 6]
      rolls.forEach( (pins) => {
        game.inputRoll(pins)
      })
      expect(game.totalScore()).toEqual(133)
    })

    it("calculates cumulative scores", function() {
      game.inputRoll(1)
      game.inputRoll(9)
      game.inputRoll(8)
      expect(game.cumulScores.frame_2).toEqual(26)
      game.inputRoll(0)
      game.inputRoll(4)
      expect(game.cumulScores.frame_2).toEqual(26)
    })



  })

  it("knows it's frame 1 to start with", function () {
      expect(game.frameNumber).toEqual(1)
    })

    it("knows it's frame 2 after frame 1 is completed", function () {
      game.inputRoll(1)
      game.inputRoll(9)
      expect(game.frameNumber).toEqual(2)
    })

    it("is not ended to start with", function () {
      expect(game.isEnded).toEqual(false)
    })

    it("is ended after frame 10 is complete", function () {
      rolls = [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10]
      rolls.forEach( (pins) => {
        game.inputRoll(pins)
      })
      expect(game.isEnded).toEqual(true)
    })

    describe("knows how many pins are standing", function () {
      it("10 pins left at the start of the game", function () {
        expect(game.remainingPins()).toEqual(10)
      })

      it("10 pins left at the start of a frame", function () {
        game.inputRoll(10)
        expect(game.remainingPins()).toEqual(10)
      })

      it("there are 3 pins left if roll 7", function () {
        game.inputRoll(7)
        expect(game.remainingPins()).toEqual(3)
      })

      describe("with special 10th frame rules", function () {
        beforeEach(function () {
          rolls = [10, 10, 10, 10, 10, 10, 10, 10, 10]
          rolls.forEach( (pins) => {
            game.inputRoll(pins)
          })
        })

        it("an extra 10 pins if a spare", function () {
          game.inputRoll(3)
          game.inputRoll(7)
          expect(game.remainingPins()).toEqual(10)
        })

        it("an extra 10 pins if a strike", function () {
          game.inputRoll(10)
          expect(game.remainingPins()).toEqual(10)
        })

        it("an extra 10 pins if two strikes", function () {
          game.inputRoll(10)
          game.inputRoll(10)
          expect(game.remainingPins()).toEqual(10)
        })

        it("normal remainder after first non-strike roll", function () {
          game.inputRoll(3)
          expect(game.remainingPins()).toEqual(7)
        })
      })
    })

})
