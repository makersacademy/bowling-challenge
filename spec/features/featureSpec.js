// WIP - to be replaced by html functionality later

describe("GAME (SinglePlayer)", function() {
  describe("Calculate normal scores", function() {
    let player2 = new Player("Name2");

    it("Save first roll score", function() {
      player2.enterRoll(3);
      expect(player2.currentFrame.rolls[0].score).toEqual(3);
    });

    it("Save second roll score", function() {
      player2.enterRoll(2);
      expect(player2.frames[0].rolls[1].score).toEqual(2);
    });

    it("Save first roll, second frame", function() {
      player2.enterRoll(4);
      expect(player2.currentFrame.rolls[0].score).toEqual(4);
    });

    it("Returns first frame score", function(){
      lastCompleteFrameIndex = player2.frames.length-1
      lastCompleteFrame = player2.frames[lastCompleteFrameIndex]
      expect(lastCompleteFrame.score).toEqual(5)
    })

    it("Returns running total of completed frames", function(){
      expect(player2.totalScore).toEqual(5)
    })

  })

  describe("Calculate bonus scores", function() {
    spare = new Player("Spare");
    strike = new Player("Strike");

    it("Adds bonus points after spare", function(){
      spare.enterRoll(5)
      spare.enterRoll(5)
      spare.enterRoll(3)
      spare.enterRoll(2)
      expect(spare.totalScore).toEqual(18)
    })

    it("Adds bonus points after strike", function(){
      strike.enterRoll(10)
      strike.enterRoll(5)
      strike.enterRoll(3)
      expect(strike.totalScore).toEqual(26)
    })

  });
});
