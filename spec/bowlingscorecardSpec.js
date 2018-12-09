
// mock class
class MockFrame { 

}

describe('BowlingScoreCard', function(){
    var scoreCard
    var frames;
    var frame;

    beforeEach(function(){
        scoreCard = new BowlingScoreCard();

        frame = jasmine.createSpyObj('frame', ['getFirstScore',
            'getSecondScore', 'findIndex', 'isStrike',
            'isSpare','totalScore','complete',
            'getTotal', 'score']);

        frame.getSecondScore.and.returnValue(undefined);
        frame.findIndex.and.returnValue([]);
        frame.complete.and.returnValue(false);
        frame.getTotal.and.returnValue(10);
        frame.isStrike.and.returnValue(false);

        spyOn(scoreCard, ['getFrames']);

        frames = [];

        for(var i = 1; i < 11; i++ ){
            frames.push(frame);
        }

        scoreCard.getFrames.and.returnValue(frames);
        frames = scoreCard.getFrames();

        spyOn(Math, 'floor').and.returnValue(1);
    });

    it('set up game with 10 frames', function(){
        expect(scoreCard.frames.length).toEqual(0);
        scoreCard.setFrames(MockFrame);
        expect(scoreCard.frames.length).toEqual(10);
    });

    describe('currentFrameIndex method', function(){

        it('gets the index of the current frame of the game',function(){
            frame.getFirstScore.and.returnValue(undefined);
            expect(scoreCard.currentFrameIndex()).toEqual(0);
        });

    });

    it('get current frame', function(){
        expect(scoreCard.currentFrameIndex()).toEqual(0);
    });

    describe('updatePreviousFrame method', function(){
        it('should call isStrike',function(){
            scoreCard.updatePreviousFrame(frame,frame);
            expect(frame.isStrike).toHaveBeenCalled();
        });
        it('should call isSpare', function(){
            scoreCard.updatePreviousFrame(frame,frame)
            expect(frame.isSpare).toHaveBeenCalled();
        });
        it('should call totalScore', function(){
            frame.isSpare.and.returnValue(true);
            scoreCard.updatePreviousFrame(frame,frame)
            expect(frame.totalScore).toHaveBeenCalled();
        });
        
    });

    describe('roll method', function(){

        it("is defined", function() {
            expect(scoreCard.roll).not.toBeUndefined();
        });

        it("throws error when game is complete", function() {
            frame.complete.and.returnValue(true);
            var testError = () => {scoreCard.roll(21)};
            expect(testError).toThrow("Game is complete!");
        });
        
    });

    describe('total method', function(){

        it("returns game total of 100", function() {
            expect(scoreCard.total()).toEqual(100);
        });

    });

});
