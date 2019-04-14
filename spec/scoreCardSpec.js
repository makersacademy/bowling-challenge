/* eslint-disable no-undef */
describe("ScoreCard: ", function() {
  var scoreCard;
  var frame;

  beforeEach(function() {
    frame = new Frame();
    scoreCard = new ScoreCard(frame); //stub here needed later
  });

  it("has an empty frameSheet object", function() {
    expect(scoreCard.frameSheet).toEqual([]);
  });

  it("adds a frame to the frameSheet", function() {
    scoreCard.addRoll(3);
    scoreCard.addRoll(5);
    expect(scoreCard.frameSheet.length).toEqual(1);
    expect(scoreCard.frameSheet[0]).toEqual([3, 5]);
  });

  it("raises an error if adding a 3 frame to a non strike frame", function() {
    scoreCard.addRoll(3);
    scoreCard.addRoll(5);
    expect(scoreCard.frameSheet.length).toEqual(1);
  });

  it("starts a new frame if first frame is complete", function() {
    scoreCard.addRoll(3);
    scoreCard.addRoll(5);
    expect(scoreCard.frameSheet.length).toEqual(1);
    scoreCard.addRoll(0);
    scoreCard.addRoll(0);
    expect(scoreCard.frameSheet.length).toEqual(2);
  });

  fdescribe("Bonus tracking", function() {
    it("keeps track of bonus after 1 strike", function() {
      scoreCard.addRoll(10);
      expect(scoreCard.frameSheet[0]).toEqual([10]);
      scoreCard.addRoll(5);
      scoreCard.addRoll(2);
      expect(scoreCard.bonusTracker).toEqual(7);
    });

    it("adds the bonus to the correct frame if no strike in next frame", function() {
      scoreCard.addRoll(10);
      expect(scoreCard.frameSheet[0]).toEqual([10]);
      scoreCard.addRoll(5);
      scoreCard.addRoll(2);
      expect(scoreCard.frameSheet[0][0]).toEqual(17);
      expect(scoreCard.gameTotal()).toEqual(24);
      expect(scoreCard.gameTotal()).not.toEqual(27);
    });

    it("adds the bonus to the correct frame withouth updating previous frame's score if strike in next frame", function() {
      scoreCard.addRoll(10);
      expect(scoreCard.frameSheet[0]).toEqual([10]);
      scoreCard.addRoll(10);
      expect(scoreCard.frameSheet[0]).toEqual([10]); // check that bonus is not included
      expect(scoreCard.frameSheet[1]).toEqual([10]); // check that strike is registered
      expect(scoreCard.bonusTracker).toEqual(10); //check bonus is 10
    });

    it("keeps track of 2 strikes bonus", function() {
      scoreCard.addRoll(10); //strike 1
      expect(scoreCard.frameSheet[0]).toEqual([10]);
      scoreCard.addRoll(10); //strike 2
      expect(scoreCard.frameSheet[0]).toEqual([10]); // check that bonus is not included
      expect(scoreCard.frameSheet[1]).toEqual([10]); // check that strike is registered
      expect(scoreCard.bonusTracker).toEqual(10); //check bonus is 10
      // no strike - no spare rolls
      scoreCard.addRoll(5);
      scoreCard.addRoll(2);
      expect(scoreCard.frameSheet[2]).toEqual([5, 2]); //current frame after completion
      //WORKS UP TO HERE
      expect(scoreCard.frameSheet[0][0]).toEqual(27); //frame n-2 updated with bonus 10+10+7
      expect(scoreCard.frameSheet[0][1]).toEqual(17); //frame n-1 updated with bonus 10+7
    });

    it("keeps track of spare bonus", function() {});

    it("accepts a maximum of 12 consecutive strikes", function() {});
  });

  describe("Normal game: no strikes, no spares", function() {
    it("Score card accepts 20 rolls and returns a total", function() {
      for (let i = 0; i < 20; i++) {
        scoreCard.addRoll(4);
      }
      expect(scoreCard.gameTotal()).toEqual(80);
      expect(scoreCard.gameTotal()).not.toEqual(1);
    });

    it("returns current total of the game", function() {
      scoreCard.addRoll(3);
      scoreCard.addRoll(5);
      expect(scoreCard.gameTotal()).toEqual(8);
    });

    it("game only accepts 10 frames if no special case", function() {
      for (let i = 0; i < 20; i++) {
        scoreCard.addRoll(4);
      }
      expect(scoreCard.frameSheet.length).toEqual(10);
    });
  });

  describe("Gutter game", function() {
    it("returns total score of 0 after 10 frame", function() {
      for (let i = 0; i < 20; i++) {
        scoreCard.addRoll(0);
      }
      expect(scoreCard.gameTotal()).toEqual(0);
      expect(scoreCard.gameTotal()).not.toEqual(1);
    });
  });
});
