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

  describe("Bonus tracking", function() {
    it("keeps track of bonus after 1 strike", function() {
      scoreCard.addRoll(10);
      expect(scoreCard.frameSheet[0]).toEqual([10]);
      scoreCard.addRoll(5);
      scoreCard.addRoll(2);
      expect(scoreCard.frameSheet[0][0]).toEqual(17);
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
    });

    it("adds bonus to first frame after 2 strikes and a normal roll", function() {
      scoreCard.addRoll(10); //strike 1
      expect(scoreCard.frameSheet[0]).toEqual([10]);
      scoreCard.addRoll(10); //strike 2
      expect(scoreCard.frameSheet[0]).toEqual([10]);
      expect(scoreCard.frameSheet[1]).toEqual([10]);
      scoreCard.addRoll(5);
      scoreCard.addRoll(5);
      expect(scoreCard.frameSheet[0]).toEqual([25]);
    });

    it("adds bonus to the second frame after 2 strikes and 2 normal rolls", function() {
      scoreCard.addRoll(10); //strike 1
      scoreCard.addRoll(10); //strike 2
      scoreCard.addRoll(5);
      scoreCard.addRoll(2);
      expect(scoreCard.frameSheet[0]).toEqual([25]); //current frame after completion
      expect(scoreCard.frameSheet[1]).toEqual([17]); //current frame after completion
    });

    it("adds first roll to previous frame if previous frame is a spare", function() {
      scoreCard.addRoll(5);
      scoreCard.addRoll(5);
      scoreCard.addRoll(5);
      scoreCard.addRoll(4);
      expect(scoreCard.frameSheet[0]).toEqual(15);
      expect(scoreCard.frameSheet[1]).toEqual([5, 4]);
    });

    it("accepts a maximum of 12 consecutive strikes", function() {
      for (let i = 0; i < 12; i++) {
        scoreCard.addRoll(10);
      }
      expect(function() {
        scoreCard.addRoll(10);
      }).toThrowError("No more rolls");
    });

    it("perfect score is 300", function() {
      for (let i = 0; i < 12; i++) {
        scoreCard.addRoll(10);
      }
      expect(scoreCard.gameTotal()).toEqual(300);
    });
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
