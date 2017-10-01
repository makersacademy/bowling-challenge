'use strict';

describe ("Scorecard", function() {

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

});
