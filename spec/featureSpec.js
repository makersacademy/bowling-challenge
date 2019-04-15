/* eslint-disable no-undef */
describe("Feature test:", function() {
  var frame;
  var scoreCard;
  beforeEach(function() {
    frame = new Frame();
    scoreCard = new ScoreCard(frame);
  });

  describe("new game", function() {
    it("has an empty frame sheet", function() {
      expect(scoreCard.frameSheet).toEqual([]);
    });
    it("has total score equal to 0", function() {
      expect(scoreCard.gameTotal).toEqual = 0;
    });
  });

  describe("gutter game", function() {
    it("returns a total score of 0 after 10 frames", function() {
      for (let i = 0; i < 20; i++) {
        scoreCard.addRoll(0);
      }
      expect(scoreCard.gameTotal()).toEqual(0);
    });
  });

  describe("illegal moves", function() {
    it("rollsSheet only accepts 10 frames if no special case", function() {
      for (let i = 0; i < 20; i++) {
        scoreCard.addRoll(0);
      }
      expect(function() {
        scoreCard.addRoll(2);
      }).toThrowError("No more rolls");
    });
  });

  describe("Normal game: no strikes, no spares", function() {
    it("Score card accepts 20 rolls and returns a total", function() {
      for (let i = 0; i < 20; i++) {
        scoreCard.addRoll(2);
      }
      expect(scoreCard.gameTotal()).toEqual(40);
    });
  });

  describe("Game with strikes and spares", function() {
    it("Adds strike and spare bonuses", function() {
      scoreCard.addRoll(10);
      scoreCard.addRoll(10);
      scoreCard.addRoll(10);
      scoreCard.addRoll(10);
      scoreCard.addRoll(10);
      scoreCard.addRoll(10);
      scoreCard.addRoll(10);
      scoreCard.addRoll(10);
      scoreCard.addRoll(10);
      scoreCard.addRoll(3);
      scoreCard.addRoll(3);

      expect(scoreCard.gameTotal()).toEqual(255);
    });
  });
});
