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
      expect(scorer.frames[0].firstRoll).toEqual(1);
      scorer.addScore(2);
      expect(scorer.frames[0].secondRoll).toEqual(2);
    });

    it("adds two rolls and makes a new frame", function() {
      scorer.addScore(1);
      scorer.addScore(2);
      expect(scorer.frames.length).toEqual(2);
    })

    it("recognises the final frame and sets its special", function() {
      for(var i = 0; i < 9; i++) {
        scorer.addScore(10);
      }
      expect(scorer.frames[9].special).toEqual('final')
    })

    it("can't add more than 10 frames after adding 12 strikes", function() {
      for(var i = 0; i < 12; i++) {
        scorer.addScore(10);
      }
      expect(scorer.frames[9].isFinished).toBe(true);
      expect( function() { scorer.addScore(1) }).toThrow('game over!')
    })
  });
})
