describe('BowlingGame', function(){
    var bowling; 
    var frame;
    beforeEach(function(){
        frame = jasmine.createSpyObj('frame', ['reset']);
        //frame = jasmine.createSpyObj('frame',['isStormy']);

        bowling = new BowlingGame();
    });
    describe('#getCurrentScore', function(){
        it('returns the current score of the user', function(){
            expect(bowling.getCurrentScore()).not.toBeUndefined;
        });
    });
    describe('#currentMove', function(){
        it('records the pins down score of first and second rolls of a frame', function(){
            bowling.currentMove(1);
            frame = new Frame();
            bowling.currentMove(4);
            frame.firstRoll = 1;
            frame.secondRoll = 4;
            expect(bowling._frames).toEqual([frame]);
        })
    });
    describe('#calculateScore', function(){
        it('calculates the total score', function(){
            frame.firstRoll = 1;
            frame.secondRoll = 4;
            bowling.addFrame(frame);
            // bowling._frames = frame;
            bowling.calculateScore();
            expect(bowling._totalScore).toEqual(5);
        })     
    });

});