describe('BowlingScoreCard', function(){
    var scoreCard;
    var frames;

    beforeEach(function(){
        scoreCard = new BowlingScoreCard();
        frames = scoreCard.getFrames();
    });

    it('set up game with 10 frames', function(){
        expect(frames.length).toEqual(0);
        scoreCard.setFrames();
        expect(frames.length).toEqual(10);
    });

    describe('currrentFrameIndex method', function(){

        it('gets the index of the current frame of the game',function(){
            scoreCard.setFrames();
            expect(scoreCard.currrentFrameIndex()).toEqual(0);
        });

    });

});
