"use strict";

describe('Bowling', function() {

  var scorecard;
  beforeEach(function(){
     scorecard = new BowlingScorecard();
  });

  it("correctly calculates the score (no strikes or spares)", function () {
    scorecard.frame(4, 3);
    scorecard.frame(6, 2);
    scorecard.frame(4, 2);
    scorecard.frame(8, 1);
    scorecard.frame(4, 5);
    scorecard.frame(6, 2);
    scorecard.frame(7, 2);
    scorecard.frame(9, 0);
    scorecard.frame(0, 5);
    scorecard.frame(6, 3);
    // scorecard.calculateScores();
    expect(scorecard.total).toEqual(79);
  });


  it("correctly calculates the score (spare in frame 1, strike in frame 5)", function() {
    scorecard.frame(4, 6);
    scorecard.frame(6, 2);
    scorecard.frame(4, 2);
    scorecard.frame(8, 1);
    scorecard.frame(10, "x");
    scorecard.frame(6, 2);
    scorecard.frame(7, 2);
    scorecard.frame(9, 0);
    scorecard.frame(0, 5);
    scorecard.frame(6, 3);
    expect(scorecard.total).toEqual(97);
  });

  it("correctly calculates the score (spare in frame 1, strikes in frames 5 and 6)", function(){
    scorecard.frame(4, 6)
    scorecard.frame(6, 2)
    scorecard.frame(4, 2)
    scorecard.frame(8, 1)
    scorecard.frame(10, "x")
    scorecard.frame(10, "x")
    scorecard.frame(7, 2)
    scorecard.frame(9, 0)
    scorecard.frame(0, 5)
    scorecard.frame(6, 3)
    // scorecard.calculateScores();
    expect(scorecard.total).toEqual(117)
  });

  it("correctly calculates the score (spare in frame 1, strikes in frames 5 and 6, spare in frame 10)", function() {
    scorecard.checkRoll(4);
    scorecard.checkRoll(6);
    scorecard.checkRoll(6);
    scorecard.checkRoll(2);
    scorecard.checkRoll(4);
    scorecard.checkRoll(2);
    scorecard.checkRoll(8);
    scorecard.checkRoll(1);
    scorecard.checkRoll(10);
    scorecard.checkRoll(10);
    scorecard.checkRoll(7);
    scorecard.checkRoll(2);
    scorecard.checkRoll(9);
    scorecard.checkRoll(0);
    scorecard.checkRoll(0);
    scorecard.checkRoll(5);
    scorecard.checkRoll(6);
    scorecard.checkRoll(4);
    scorecard.checkRoll(7);
    scorecard.checkRoll(0);
   // scorecard.calculateScores();
    expect(scorecard.total).toEqual(125);
  });

  it("correctly calculates the score (perfect game)", function() {
    scorecard.checkRoll(10);
    scorecard.checkRoll(10);
    scorecard.checkRoll(10);
    scorecard.checkRoll(10);
    scorecard.checkRoll(10);
    scorecard.checkRoll(10);
    scorecard.checkRoll(10);
    scorecard.checkRoll(10);
    scorecard.checkRoll(10);
    scorecard.checkRoll(10);
      // console.log("bonus frame")
    scorecard.checkRoll(10);
    scorecard.checkRoll(10);
      // scorecard.calculateScores();
    expect(scorecard.total).toEqual(300);
    });

    it("correctly calculates the score (almost perfect game)", function() {
      scorecard.checkRoll(10);
      scorecard.checkRoll(10);
      scorecard.checkRoll(10);
      scorecard.checkRoll(10);
      scorecard.checkRoll(10);
      scorecard.checkRoll(10);
      scorecard.checkRoll(10);
      scorecard.checkRoll(10);
      scorecard.checkRoll(10);
      scorecard.checkRoll(10);
        // console.log("bonus frame")
      scorecard.checkRoll(0);
      scorecard.checkRoll(0);

        // scorecard.calculateScores();
        expect(scorecard.total).toEqual(270);
      });

      it("correctly calculates the score (rarest score)", function() {
        scorecard.checkRoll(10);
        scorecard.checkRoll(10);
        scorecard.checkRoll(10);
        scorecard.checkRoll(10);
        scorecard.checkRoll(10);
        scorecard.checkRoll(10);
        scorecard.checkRoll(10);
        scorecard.checkRoll(10);
        scorecard.checkRoll(10);
        scorecard.checkRoll(10);
          // console.log("bonus frame")
        scorecard.checkRoll(10);
        scorecard.checkRoll(2);

          // scorecard.calculateScores();
          expect(scorecard.total).toEqual(292);
        });

        it("correctly calculates the score (unusual score)", function() {
            scorecard.checkRoll(9);
            scorecard.checkRoll(1);
            scorecard.checkRoll(10);
            scorecard.checkRoll(10);
            scorecard.checkRoll(10);
            scorecard.checkRoll(10);
            scorecard.checkRoll(10);
            scorecard.checkRoll(10);
            scorecard.checkRoll(10);
            scorecard.checkRoll(10);
            scorecard.checkRoll(10);
            // console.log("bonus frame")
            scorecard.frame(10, 1);
            // scorecard.calculateScores();
            expect(scorecard.total).toEqual(281);
          });


});
