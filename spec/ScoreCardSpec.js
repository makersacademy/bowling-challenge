'use strict';

describe ("Scorecard", function() {

  it("New Scorecard", function () {
    var scoreCard = new ScoreCard();
  });

  it("Gutter Game", function() {
    var scoreCard = new ScoreCard();
    for (var i = 0; i < 20; i++) {
      scoreCard.roll(0);
    }
    expect(scoreCard.score()).toBe(0);
  });

  it("Roll all ones", function() {
    var scoreCard = new ScoreCard();
    for (var i = 0; i < 20; i++) {
      scoreCard.roll(1);
    }
    expect(scoreCard.score()).toBe(20);
  });

});
