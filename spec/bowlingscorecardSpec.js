describe('BowlingScoreCard', function(){
    var scoreCard;
    var frames;

    beforeEach(function(){
        spyOn(Math, 'floor').and.returnValue(1);
        scoreCard = new BowlingScoreCard();
        frames = scoreCard.getFrames();
    });

    it('should start with 0 frames', function(){
        frames = scoreCard.getFrames();
        expect(frames.length).toEqual(0);
    });


});
