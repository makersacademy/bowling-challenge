// user should be able to enter the roll and see the current score.

describe('Features', function(){
    var bowling; 
    var player;
    var frame;
    

    beforeEach(function(){
        frame = new Frame();
        bowling = new BowlingGame();
        // player = new Player(frame);
    });
    describe("BowlingGame", function(){
        it('should display a current score', function(){
            expect(bowling.getCurrentScore()).not.toBeUndefined;
        })
    });
// when user enters pin down for a roll, score should be updated to reflect the roll.
    describe('it should update the total score to 5 after first two rolls of 1 & 4', function(){
        it('should add 5 to the total score after first two rolls of 1 &  after each roll', function(){
            bowling.currentMove(1);
            frame = new Frame();
            bowling.currentMove(4);
            frame.firstRoll = 1;
            frame.secondRoll = 4;
            expect(bowling._frames).toEqual([frame]);
            bowling.calculateScore();
            expect(bowling._totalScore).toEqual(5);
        })
    });

    // describe('spare move', function(){
    //     it('when total is 10 pins in two rolls it is a spare', function(){
    //         bowling.currentMove(6);
    //         bowling.currentMove(4);
    //         // frame.firstRoll = 1;
    //         // frame.secondRoll = 4;
    //         expect(bowling._frames).toEqual([frame]);
    //         //bowling.calculateScore();
    //         bowling.currentMove(5);
    //         bowling.currentMove(3);
    //         bowling.calculateScore();
    //         expect(bowling._totalScore).toEqual(23);
    //     })
    // })

});