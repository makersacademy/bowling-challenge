'use strict';

describe("Scorer", function() {
  var scorer;

  beforeEach(function() {
    scorer = new Scorer();
  })

  describe("setupGame", function() {
    it("starts a game and adds a new frame to the mix", function() {
      scorer.setupGame();
      expect(scorer.isGameStarted).toBe(true);
      expect(scorer.frames.length).toEqual(1);
    })
  })

  describe("addScore", function() {
    it("adds a score which is put in an initial frame", function() {
      scorer.addScore(1);
      expect(scorer.currentScore()).toEqual(0);
      expect(scorer.frames[1].firstRoll).toHaveBeenCalledWith(1);
    });
  });
})
