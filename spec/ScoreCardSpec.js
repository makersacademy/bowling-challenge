'use strict';

describe ("Scorecard", function() {

  var scoreCard;                                //high scope scoreCard variable

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

});
