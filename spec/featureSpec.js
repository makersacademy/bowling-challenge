describe("Feature test:", function() {
  var scoreCard;
  var frame;

  beforeEach(function() {
    scoreCard = new ScoreCard();
    frame = new Frame();
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
    it("User can input 20 rolls and get a total", function() {
      //Arrange
      let randomNumber1 = Math.floor(Math.random() * 10 + 1);
      let randomNumber2 = Math.floor(Math.random() * 10 + 1);

      //Act
      frame.roll(randomNumber1);
      frame.roll(randomNumber2);

      for (let i = 0; i < 10; i++) {
        scoreCard.addFrameRolls(frame.rolls);
      }

      //Assert
      let total = (randomNumber1 + randomNumber2) * 10;
      expect(scoreCard.totalScore()).toEqual(total);
    });
  });
});
