'use strict';

describe('ScoreCard', function() {
  var scoreCard;
  beforeEach(function() {
    var rounds = [];
    for(var i = 0; i < 10; i++) {
      var round = jasmine.createSpyObj('round', ['store', 'isRoundOver'])
      rounds.push(round);
    }
    scoreCard = new ScoreCard(rounds);
  });
  it('created with an empty results array', function() {
    expect(scoreCard.results.length).toEqual(10);
  });
  it('asks round to store the score', function() {
    scoreCard.process(10, 0);
    expect(scoreCard.results[0].store).toHaveBeenCalledWith(10);
  });
  it('does not ask round to store if scorecard is complete', function() {
    scoreCard.results[9].isRoundOver.and.returnValue(true);
    scoreCard.process(10, 9);
    expect(scoreCard.results[0].store).not.toHaveBeenCalled();
  });
});
