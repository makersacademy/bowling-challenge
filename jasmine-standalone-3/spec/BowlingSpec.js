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
            frame.extraRoll = 0;
            bowling.addFrame(frame);
            // bowling._frames = frame;
            bowling.calculateScore();
            expect(bowling._totalScore).toEqual(5);
        })     
    });

    describe('#isRollValid', function(){
        it('decides whether the pin number entered is valid', function(){
            bowling.currentMove(6);
            frame = new Frame();
            expect( function() { bowling.currentMove(5) }).toThrowError('only 10 pins per frame!');
        })
    });

    describe('#gameOver',function(){
        it('terminates the game after 10 frames', function(){
            bowling._frames.length = 10;
            bowling.currentMove(5);
            expect(bowling.gameOver()).toBe(true);
        })
    });

});