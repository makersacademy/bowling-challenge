'use strict';

describe ("Scorecard Engine", function() {

  var scoreCard;                                //higher scope scoreCard variable

  beforeEach(function() {
    scoreCard = new ScoreCard();
  })

  var multipleRolls = function(pins,rolls) {
    for (var i = 0; i < rolls; i++) {
      scoreCard.roll(pins);
    }
  };

  it("Gutter Game", function() {
    multipleRolls(0,20);                        //roll zero pins twenty times
    expect(scoreCard.score()).toBe(0);
  });

  it("Roll all ones", function() {
    multipleRolls(1,20);                        //roll 1 pin twenty times
    expect(scoreCard.score()).toBe(20);
  });

  it("Spare", function() {
    scoreCard.roll(6);
    scoreCard.roll(4);
    scoreCard.roll(7);
    multipleRolls(0,17);                        //zero pins and 17 rolls left in the game
    expect(scoreCard.score()).toBe(24);
  });

  it("Strike", function() {
    scoreCard.roll(10);
    scoreCard.roll(6);
    scoreCard.roll(7);
    multipleRolls(0,16)
    expect(scoreCard.score()).toBe(36);
  });

  it("Perfect Game", function() {
    multipleRolls(10,12);
    expect(scoreCard.score()).toBe(300);
  })

  describe("Invalid Number", function() {

    it("does not accept NaN", function() {
      expect(function() { scoreCard.roll("not a number"); }).toThrowError("ERROR! Expected a number between 0 and 10");
    });

    it("does not accept numbers lower than 0", function() {
      expect(function() { scoreCard.roll(-1); }).toThrowError("ERROR! Expected a number between 0 and 10");
    });

    it("does not accept numbers higher than 10", function() {
      expect(function() { scoreCard.roll(11); }).toThrowError("ERROR! Expected a number between 0 and 10");
    });
  });

});
