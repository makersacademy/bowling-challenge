'use strict';

describe('ScoreCard', function() {
  var scoreCard;

  beforeEach(function() {
    scoreCard = new ScoreCard();
  });

  it('starts with an empty frames array', function() {
    expect(scoreCard.frames).toEqual([])
  })

  it('starts with roll 1 and roll 2 vars', function() {
    expect(scoreCard.roll1).toEqual(0)
    expect(scoreCard.roll2).toEqual(0)
  })
})
