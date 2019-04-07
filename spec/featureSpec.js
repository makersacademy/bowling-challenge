describe("Feature test:", function() {
  var frame;
  var scoreCard;
  var game;

  beforeEach(function() {
    frame = new Frame();
    scoreCard = new ScoreCard();
    game = new Game(scoreCard);
  });

  describe("new game", function() {
    it("has an empty score card", function() {
      expect(game.start()).toBe(true); //works
      expect(game.seeRolls()).toEqual([]);
    });
  });

  describe("gutter game", function() {
    it("returns a total score of 0 after 10 frames", function() {
      frame.roll(0);
      frame.roll(0);
      for (let i = 0; i < 10; i++) {
        scoreCard.addFrameRolls(frame.rolls);
      }
      expect(scoreCard.seeRolls().length).toEqual(10);
      expect(scoreCard.totalScore()).toEqual(0);
    });
  });

  describe("illegal moves", function() {
    it("rollsSheet only accepts 10 frames", function() {
      frame.roll(0);
      frame.roll(0);
      for (let i = 0; i < 10; i++) {
        scoreCard.addFrameRolls(frame.rolls);
      }
      expect(function() {
        scoreCard.addFrameRolls(frame.rolls);
      }).toThrowError("Illegal move");
    });
  });

  describe("Normal game: no strikes, no spares", function() {
    it("Score card accepts 20 rolls and returns a total", function() {
      frame.roll(2);
      frame.roll(7);

      for (let i = 0; i < 10; i++) {
        scoreCard.addFrameRolls(frame.rolls);
      }

      let total = (2 + 7) * 10;
      expect(scoreCard.totalScore()).toEqual(total);
    });
  });
});
