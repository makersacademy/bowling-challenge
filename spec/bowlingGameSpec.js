describe("bowlingGame", function() {
  var game;

  beforeEach(function() {
  game = new BowlingGame();
  });

  describe("#bowl", function() {
    it("player can bowl and return a score", function() {
      game.bowl(7);
      expect(game.totalScore).toEqual(7);
    });

    it("player can bowl a strike and return a 10 score", function() {
      game.bowl(10);
      expect(game.totalScore).toEqual(10);
    });

    it("player can bowl a gutter ball and return a 0 score", function() {
      game.bowl(0);
      expect(game.totalScore).toEqual(0);
      });

    it("if player bowls a strike the frame number is incremented", function() {
      game.bowl(10);

      expect(game.frameNumber).toEqual(1);
    });

    it("player can get a spare by knocking over all the pins in two attempts", function() {
      game.bowl(5);
      game.bowl(5);
      game.bowl(5);
      expect(game.frameNumber).toEqual(1);
    });

    it("player gets awarded a strike bonus if he gets 3 strikes in a row(score + 2 next rolls)", function() {
      game.bowl(10);
      game.bowl(10);
      game.bowl(10);
      expect(game.gameFrames[0].finalFrameScore).toEqual(30);
    });

    it("player gets awarded a spare bonus if he knocks down all the pins in two attempts (bonus: next roll) ", function() {
      game.bowl(5);
      game.bowl(5);
      game.bowl(5);
      game.bowl(5);
      expect(game.gameFrames[0].finalFrameScore).toEqual(15);
    });

    it("play can roll a perfect game of 300", function() {
      game.bowl(10);
      game.bowl(10);
      game.bowl(10);
      game.bowl(10);
      game.bowl(10);
      game.bowl(10);
      game.bowl(10);
      game.bowl(10);
      game.bowl(10);
      game.bowl(10);
      game.bowl(10);
      game.bowl(10);
      expect(game.totalScore).toEqual(300);
    });

    it("play can roll a gutter game of 0 total score", function() {
      game.bowl(0);
      game.bowl(0);
      game.bowl(0);
      game.bowl(0);
      game.bowl(0);
      game.bowl(0);
      game.bowl(0);
      game.bowl(0);
      game.bowl(0);
      game.bowl(0);
      expect(game.totalScore).toEqual(0);
    });


    it("game ends in tenth round if no spare or strike is scored", function() {
      game.bowl(10);
      game.bowl(10);
      game.bowl(10);
      game.bowl(10);
      game.bowl(10);
      game.bowl(10);
      game.bowl(10);
      game.bowl(10);
      game.bowl(10);
      game.bowl(5);
      game.bowl(3);


      expect(game.hasEnded).toEqual(true);
    });

    it("game ends after 12th if 10th and 11th is a strike", function() {
      game.bowl(10);
      game.bowl(10);
      game.bowl(10);
      game.bowl(10);
      game.bowl(10);
      game.bowl(10);
      game.bowl(10);
      game.bowl(10);
      game.bowl(10);
      game.bowl(10);
      game.bowl(10);
      game.bowl(10);
      game.bowl(10);

      expect(game.hasEnded).toEqual(true);
    });

    it("game ends after 11th if 10th is a spare", function() {
      game.bowl(10);
      game.bowl(10);
      game.bowl(10);
      game.bowl(10);
      game.bowl(10);
      game.bowl(10);
      game.bowl(10);
      game.bowl(10);
      game.bowl(10);
      game.bowl(10);
      game.bowl(5);
      game.bowl(5)
      game.bowl(5)
      game.bowl(5)

      expect(game.hasEnded).toEqual(true);
    });



  });



});
