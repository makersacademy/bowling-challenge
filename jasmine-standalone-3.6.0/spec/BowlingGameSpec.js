describe("BowlingGame", function() {
  var bowlingGame;

  beforeEach(function(){
    bowlingGame = new BowlingGame;
  });

  describe("playFrame", function() {
    it("adds inputted rolls to the frame", function(){
      bowlingGame.playFrame(3, 4);
      expect(bowlingGame.getGameScore()).toEqual(7);
    });

    it("works with a strike", function() {
      bowlingGame.playFrame(10);
      expect(bowlingGame.getGameScore()).toEqual(10);
    });

    it("works with a spare", function() {
      bowlingGame.playFrame(4, 6);
      expect(bowlingGame.getGameScore()).toEqual(10);
    });

    it("works with a gutter roll", function() {
      bowlingGame.playFrame(0, 0);
      expect(bowlingGame.getGameScore()).toEqual(0);
    });

    it("works with a gutter game", function() {
      for (var i = 0; i < 10; i++) {
        bowlingGame.playFrame(0, 0);
      }
      expect(bowlingGame.getGameScore()).toEqual(0);
    });

    it("adds first throw of latest frame to total score of the previous frame if the previous frame was a spare", function() {
      bowlingGame.playFrame(4, 6);
      bowlingGame.playFrame(5, 2);
      expect(bowlingGame.getGameScore()).toEqual(22);
    });

    it("does not add first throw of latest frame to total score of the previous frame unless the previous frame was a spare", function() {
      bowlingGame.playFrame(4, 5);
      bowlingGame.playFrame(5, 3);
      expect(bowlingGame.getGameScore()).not.toEqual(22);
    });

    it("adds total score of latest frame to total score of the previous frame if the previous frame was a strike", function() {
      bowlingGame.playFrame(10);
      bowlingGame.playFrame(5, 2);
      expect(bowlingGame.getGameScore()).toEqual(24);
    });

    it("does not add total score of latest frame to total score of the previous frame unless the previous frame was a strike", function() {
      bowlingGame.playFrame(7, 3);
      bowlingGame.playFrame(5, 2);
      expect(bowlingGame.getGameScore()).not.toEqual(24);
    });

    it("adds first throw of latest frame to total score of 2 frames previous if the 2 previous frames were both strikes", function() {
      for (var i = 0; i < 2; i++) {
        bowlingGame.playFrame(10);
      }
      bowlingGame.playFrame(5, 2);
      expect(bowlingGame.getGameScore()).toEqual(49);
    });

    it("does not add first throw of latest frame to total score of 2 frames previous unless the 2 previous frames were both strikes", function() {
      bowlingGame.playFrame(10);
      bowlingGame.playFrame(5, 5);
      bowlingGame.playFrame(5, 2);
      expect(bowlingGame.getGameScore()).not.toEqual(49);
    });

    it("throws an error if 10 frames have already been played", function() {
      for (var i = 0; i < 10; i++) {
        bowlingGame.playFrame(6, 3);
      }
      expect(function() { bowlingGame.playFrame(6, 3); }).toThrowError(`You have already played ${bowlingGame.INDEX_OF_FINAL_FRAME + 1} frames`)
    })
  });

  describe("areBonusRollsNeeded", function() {
    it("returns true if the 10th frame is a spare", function() {
      for (var i = 0; i < 9; i++) {
        bowlingGame.playFrame(6, 3);
      }
      bowlingGame.playFrame(6, 4);
      expect(bowlingGame.areBonusRollsNeeded()).toEqual(true)
    });

    it("returns true if the 10th frame is a strike", function() {
      for (var i = 0; i < 9; i++) {
        bowlingGame.playFrame(6, 3);
      }
      bowlingGame.playFrame(10);
      expect(bowlingGame.areBonusRollsNeeded()).toEqual(true)
    });

    it("returns true if the 9th & 10th frames are strikes", function() {
      for (var i = 0; i < 8; i++) {
        bowlingGame.playFrame(6, 3);
      }
      for (var i = 0; i < 2; i++) {
        bowlingGame.playFrame(10);
      }
      expect(bowlingGame.areBonusRollsNeeded()).toEqual(true)
    });

    it("returns false if the 10th frame neither a strike nor a spare", function() {
      for (var i = 0; i < 9; i++) {
        bowlingGame.playFrame(10);
      }
      bowlingGame.playFrame(6, 3);
      expect(bowlingGame.areBonusRollsNeeded()).toEqual(false)
    });
  });

  describe("addFinalBonusScores", function() {
    it("if the final frame is a spare, it gives you 1 extra bonus roll and it gets added to the total game score", function() {
      for (var i = 0; i < 9; i++) {
        bowlingGame.playFrame(6, 3);
      }
      bowlingGame.playFrame(6, 4);
      spyOn(bowlingGame,'areBonusRollsNeeded').and.returnValue(true);
      bowlingGame.addFinalBonusScores(5);
      expect(bowlingGame.getGameScore()).toEqual(96);
    });

    it("if the final frame is a strike, it gives you 2 extra bonus rolls and they get added to the total game score", function() {
      for (var i = 0; i < 9; i++) {
        bowlingGame.playFrame(6, 3);
      }
      bowlingGame.playFrame(10);
      spyOn(bowlingGame,'areBonusRollsNeeded').and.returnValue(true);
      bowlingGame.addFinalBonusScores(5, 1);
      expect(bowlingGame.getGameScore()).toEqual(97);
    });

    it("if the final 2 frames are strikes, it gives you 2 extra bonus rolls and the first roll is added twice to total game score and second roll added once", function() {
      for (var i = 0; i < 8; i++) {
        bowlingGame.playFrame(6, 3);
      }
      for (var i = 0; i < 2; i++) {
        bowlingGame.playFrame(10);
      }
      spyOn(bowlingGame,'areBonusRollsNeeded').and.returnValue(true);
      bowlingGame.addFinalBonusScores(5, 1);
      expect(bowlingGame.getGameScore()).toEqual(113);
    });

    it("will throw an error if you're not entitled to a bonus roll", function() {
      spyOn(bowlingGame,'areBonusRollsNeeded').and.returnValue(false);
      expect(function() { bowlingGame.addFinalBonusScores(6, 3); }).toThrowError("You are not entitled to a bonus roll")
    });
  });

// describe("isPreviousFrameSpare", function() {
//   it("will return true if previous roll was a spare", function() {
//     bowlingGame.playFrame(4, 6);
//     bowlingGame.playFrame(3, 4);
//     expect(bowlingGame._isPreviousFrameSpare()).toEqual(true);
//     // maybe use spies with this method later on when testing adding a bonus, same with below tests in describe block
//   });
//
//   it("will return false if previous roll was neither spare nor strike", function() {
//     bowlingGame.playFrame(4, 3);
//     bowlingGame.playFrame(3, 4);
//     expect(bowlingGame._isPreviousFrameSpare()).toEqual(false);
//   });
//
//   it("will return false if previous roll was a strike", function() {
//     bowlingGame.playFrame(10);
//     bowlingGame.playFrame(3, 4);
//     expect(bowlingGame._isPreviousFrameSpare()).toEqual(false);
//   });
// });
//
// describe("isPreviousFrameStrike", function() {
//   it("will return true if previous roll was a strike", function() {
//     bowlingGame.playFrame(10);
//     bowlingGame.playFrame(3, 4);
//     expect(bowlingGame._isPreviousFrameStrike()).toEqual(true);
//   });
//
//   it("will return false if previous roll was a spare", function() {
//     bowlingGame.playFrame(5, 5);
//     bowlingGame.playFrame(3, 4);
//     expect(bowlingGame._isPreviousFrameStrike()).toEqual(false);
//   });
//
//   it("will return false if previous roll neither spare nor strike", function() {
//     bowlingGame.playFrame(5, 2);
//     bowlingGame.playFrame(3, 4);
//     expect(bowlingGame._isPreviousFrameStrike()).toEqual(false);
//   });
// });
});
