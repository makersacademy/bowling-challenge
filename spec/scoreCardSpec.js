describe('ScoreCard', function() {
    var scoreCard;

    beforeEach(function() {
        scoreCard = new ScoreCard();
    });

    describe('Defaults', function() {
        it('does not have frames by default', function() {
            expect(scoreCard.frames.length).toEqual(0)
        });
    });
});