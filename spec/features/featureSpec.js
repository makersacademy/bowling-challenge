// WIP - to be replaced by html functionality later

describe("GAME (SinglePlayer)", function() {
  describe("Calculate roll", function() {
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

  });

  // describe("Bonus points", function() {
  //
  // }


  // });
});
