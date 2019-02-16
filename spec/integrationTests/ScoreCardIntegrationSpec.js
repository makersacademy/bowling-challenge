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

});
