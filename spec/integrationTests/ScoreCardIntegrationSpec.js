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

    it('doesn\'t think the tenth frame is simultaneously a strike and a spare when it has done only 2 of the 3 rolls', function() {
        var complexGameOmittingFinalRoll = [1, 9, 2, 8, 3, 7, 10, 10, 10, 0, 0, 0, 10, 6, 4, 10, 0]
        scoreCard._game.run(complexGameOmittingFinalRoll)
        expect(scoreCard.allFrames()[9].IsAStrike()).toBe(true)
        expect(scoreCard.allFrames()[9].IsASpare()).toBe(false)
    });
});
