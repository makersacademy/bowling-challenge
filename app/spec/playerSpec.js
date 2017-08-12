'use strict';

describe('Player', function() {
  var player, scoreCard, scoreCard2;
  beforeEach(function() {
    scoreCard = jasmine.createSpyObj('scoreCard', ['process', 'results', 'getRound', 'isComplete'])
    player = new Player(scoreCard)
  });
  it('created with a scorecard', function() {
    expect(player.scoreCard).toEqual(scoreCard);
  });
  it('asks scoreCard to store the score', function() {
    player.bowl(10, 0);
    expect(scoreCard.process).toHaveBeenCalledWith(10, 0);
  });
  it('player has finished when scorecard is complete', function() {
    scoreCard.isComplete.and.returnValue(true);
    player.bowl(10, 0);
    expect(player.finished).toEqual(true);
  });

});
