describe('BowlingScoreCard', function(){
    var scoreCard;
    var frames;

    beforeEach(function(){
        scoreCard = new BowlingScoreCard();
        frames = scoreCard.getFrames();
    });

    it('should start with 0 frames', function(){
        frames = scoreCard.getFrames();
        expect(frames.length).toEqual(0);
    });

    it('set up game with 10 frames', function(){
        scoreCard.setFrames();
        expect(frames.length).toEqual(10);
    });

    describe('roll method', function(){

    });



});
