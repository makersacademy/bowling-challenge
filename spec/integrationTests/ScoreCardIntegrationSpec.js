describe('ScoreCard', function() {

  var scoreCard;

  beforeEach(function() {
    scoreCard = new ScoreCard();
  });

  it('returns the total score for a basic game', function() {
    do_one_game_without_strikes_or_spares(scoreCard._game)
    expect(scoreCard.total()).toEqual(
      (1+2+3+4+5)*4
    )
  });

});
