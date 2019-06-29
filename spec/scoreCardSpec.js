'use strict';

describe('ScoreCard', function() {
  var scoreCard;

  beforeEach(function() {
    scoreCard = new ScoreCard();
  });

  it('starts with an empty frames array', function() {
    expect(scoreCard.frames).toEqual([])
  })
})
