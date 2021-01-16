describe("BowlingGame", function() {
  var bowlingGame;

  beforeEach(function(){
    bowlingGame = new BowlingGame;
  });

  describe("addRolls", function() {
    it("adds inputted rolls to the frame", function(){
      bowlingGame.addRolls(3, 4);
      expect(bowlingGame.getGameScore()).toEqual(7);
    });

    it("works with a strike", function() {
      bowlingGame.addRolls(10);
      expect(bowlingGame.getGameScore()).toEqual(10);
    });

    it("works with a spare", function() {
      bowlingGame.addRolls(4, 6);
      expect(bowlingGame.getGameScore()).toEqual(10);
    });

    it("works with a gutter roll", function() {
      bowlingGame.addRolls(0, 0);
      expect(bowlingGame.getGameScore()).toEqual(0);
    });

    it("works with a gutter game", function() {
      for (var i = 0; i < 10; i++) {
        bowlingGame.addRolls(0, 0);
      }
      expect(bowlingGame.getGameScore()).toEqual(0);
    });
  });

  describe("isPreviousFrameSpare", function() {
    it("will return true if previous roll was a spare", function() {
      bowlingGame.addRolls(4, 6);
      bowlingGame.addRolls(3, 4);
      expect(bowlingGame.isPreviousFrameSpare()).toEqual(true);
      // maybe use spies with this method later on when testing adding a bonus, same with below tests in describe block
    });

    it("will return false if previous roll was neither spare nor strike", function() {
      bowlingGame.addRolls(4, 3);
      bowlingGame.addRolls(3, 4);
      expect(bowlingGame.isPreviousFrameSpare()).toEqual(false);
    });

    it("will return false if previous roll was a strike", function() {
      bowlingGame.addRolls(10);
      bowlingGame.addRolls(3, 4);
      expect(bowlingGame.isPreviousFrameSpare()).toEqual(false);
    });
  });

  describe("isPreviousFrameStrike", function() {
    it("will return true if previous roll was a strike", function() {
      bowlingGame.addRolls(10);
      bowlingGame.addRolls(3, 4);
      expect(bowlingGame.isPreviousFrameStrike()).toEqual(true);
    });

    it("will return false if previous roll was a spare", function() {
      bowlingGame.addRolls(5, 5);
      bowlingGame.addRolls(3, 4);
      expect(bowlingGame.isPreviousFrameStrike()).toEqual(false);
    });

    it("will return false if previous roll neither spare nor strike", function() {
      bowlingGame.addRolls(5, 2);
      bowlingGame.addRolls(3, 4);
      expect(bowlingGame.isPreviousFrameStrike()).toEqual(false);
    });
  });
// for the below describe block, need to try to use spies to mock for previous frames being strikes and spares
  describe("addBonusScores", function() {
    it("adds first throw of latest frame to total score of the previous frame if the previous frame was a spare", function() {
      bowlingGame.addRolls(4, 6);
      bowlingGame.addRolls(5, 2);
      bowlingGame.addBonusScores();
      expect(bowlingGame.getGameScore()).toEqual(22);
    });

    it("does not add first throw of latest frame to total score of the previous frame unless the previous frame was a spare", function() {
      bowlingGame.addRolls(4, 5);
      bowlingGame.addRolls(5, 3);
      bowlingGame.addBonusScores();
      expect(bowlingGame.getGameScore()).not.toEqual(22);
    });

    it("adds total score of latest frame to total score of the previous frame if the previous frame was a strike", function() {
      bowlingGame.addRolls(10);
      bowlingGame.addRolls(5, 2);
      bowlingGame.addBonusScores();
      expect(bowlingGame.getGameScore()).toEqual(24);
    });

    it("does not add total score of latest frame to total score of the previous frame unless the previous frame was a strike", function() {
      bowlingGame.addRolls(7, 3);
      bowlingGame.addRolls(5, 2);
      bowlingGame.addBonusScores();
      expect(bowlingGame.getGameScore()).not.toEqual(24);
    });

    it("adds first throw of latest frame to total score of 2 frames previous if the 2 previous frames were both strikes", function() {
      bowlingGame.addRolls(10);
      bowlingGame.addBonusScores();
      bowlingGame.addRolls(10);
      bowlingGame.addBonusScores();
      bowlingGame.addRolls(5, 2);
      bowlingGame.addBonusScores();
      expect(bowlingGame.getGameScore()).toEqual(49);
    });

    it("does not add first throw of latest frame to total score of 2 frames previous unless the 2 previous frames were both strikes", function() {
      bowlingGame.addRolls(10);
      bowlingGame.addBonusScores();
      bowlingGame.addRolls(5, 5);
      bowlingGame.addBonusScores();
      bowlingGame.addRolls(5, 2);
      bowlingGame.addBonusScores();
      expect(bowlingGame.getGameScore()).not.toEqual(49);
    });
  });

  describe("areBonusRollsNeeded", function() {
    it("returns true if the 10th frame is a spare", function() {
      for (var i = 0; i < 9; i++) {
        bowlingGame.addRolls(6, 3);
        bowlingGame.addBonusScores();
      }
      bowlingGame.addRolls(6, 4);
      bowlingGame.addBonusScores();
      expect(bowlingGame.areBonusRollsNeeded()).toEqual(true)
    });

    it("returns true if the 10th frame is a strike", function() {
      for (var i = 0; i < 9; i++) {
        bowlingGame.addRolls(6, 3);
        bowlingGame.addBonusScores();
      }
      bowlingGame.addRolls(10);
      bowlingGame.addBonusScores();
      expect(bowlingGame.areBonusRollsNeeded()).toEqual(true)
    });

    it("returns true if the 9th & 10th frames are strikes", function() {
      for (var i = 0; i < 8; i++) {
        bowlingGame.addRolls(6, 3);
        bowlingGame.addBonusScores();
      }
      for (var i = 0; i < 2; i++) {
        bowlingGame.addRolls(10);
        bowlingGame.addBonusScores();
      }
      expect(bowlingGame.areBonusRollsNeeded()).toEqual(true)
    });

    it("returns false if the 10th frame neither a strike nor a spare", function() {
      for (var i = 0; i < 9; i++) {
        bowlingGame.addRolls(10);
        bowlingGame.addBonusScores();
      }
      bowlingGame.addRolls(6, 3);
      bowlingGame.addBonusScores();
      expect(bowlingGame.areBonusRollsNeeded()).toEqual(false)
    });
  });

  describe("addFinalBonusScores", function() {
    it("if the final frame is a spare, it gives you 1 extra bonus roll and it gets added to the total game score", function() {
      for (var i = 0; i < 9; i++) {
        bowlingGame.addRolls(6, 3);
        bowlingGame.addBonusScores();
      }
      bowlingGame.addRolls(6, 4);
      bowlingGame.addBonusScores();
      bowlingGame.addFinalBonusScores(5);
      expect(bowlingGame.getGameScore()).toEqual(96);
    });

    it("if the final frame is a strike, it gives you 2 extra bonus rolls and they get added to the total game score", function() {
      for (var i = 0; i < 9; i++) {
        bowlingGame.addRolls(6, 3);
        bowlingGame.addBonusScores();
      }
      bowlingGame.addRolls(10);
      bowlingGame.addBonusScores();
      bowlingGame.addFinalBonusScores(5, 1);
      expect(bowlingGame.getGameScore()).toEqual(97);
    });

    it("if the final 2 frames are strikes, it gives you 2 extra bonus rolls and the first roll is added twice to total game score and second roll added once", function() {
      for (var i = 0; i < 8; i++) {
        bowlingGame.addRolls(6, 3);
        bowlingGame.addBonusScores();
      }
      for (var i = 0; i < 2; i++) {
        bowlingGame.addRolls(10);
        bowlingGame.addBonusScores();
      }
      bowlingGame.addFinalBonusScores(5, 1);
      expect(bowlingGame.getGameScore()).toEqual(113);
    });
  });

});
