describe('ScoreCard', function() {

    var scoreCard;

    beforeEach(function() {
        scoreCard = new ScoreCard();
    });

    it('returns the total score for a basic game', function() {
        doOneGameWithoutStrikesOrSpares(scoreCard._game);
        expect(scoreCard.total()).toEqual(
            (1+2+3+4+5)*4
        );
    });

    it('returns the total score for a game with strikes and spares', function() {
        doOneGameWithStrikesAndSpares(scoreCard._game);
        expect(scoreCard.total()).toEqual(
          1+9+10+3+7+4+4+9+0+0+10+0+0+6+4+10+5+4+10+3+7+4+0+10+5+4
        );
    });
});
