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

    describe('spare move', function(){
        it('when total is 10 pins in two rolls it is a spare', function(){
            bowling.currentMove(6); 
            bowling.currentMove(4);
            bowling.currentMove(5);
            bowling.currentMove(3);
            bowling.calculateScore();
            expect(bowling._totalScore).toEqual(23);
        })
    })
    describe('strike move', function(){
        it('when 10 pins down in first roll it is a strike', function(){
            bowling.currentMove(10); 
            //bowling.currentMove(0);
            bowling.currentMove(5);
            bowling.currentMove(3);
            bowling.calculateScore();
            expect(bowling._totalScore).toEqual(26);
        })
    })

    describe('spare move in 10th frame', function(){
        it('when spare moves happen in the last frame extraRoll is added', function(){
            bowling.currentMove(1); 
            bowling.currentMove(4);
            bowling.currentMove(4);
            bowling.currentMove(5);
            bowling.currentMove(6);
            bowling.currentMove(4);
            bowling.currentMove(5);
            bowling.currentMove(5);
            bowling.currentMove(10);
            bowling.currentMove(0);
            bowling.currentMove(1);
            bowling.currentMove(7);
            bowling.currentMove(3);
            bowling.currentMove(6);
            bowling.currentMove(4);
            bowling.currentMove(10);
            bowling.currentMove(2);
            bowling.currentMove(8);
            bowling.addExtraRoll(9, 6);
            bowling.calculateScore();
            expect(bowling._totalScore).toEqual(133);
        })
    })

    describe('spare move in 10th frame', function(){
        it('when spare moves happen in the last frame extraRoll is added', function(){
            bowling.currentMove(1); 
            bowling.currentMove(4);
            bowling.currentMove(4);
            bowling.currentMove(5);
            bowling.currentMove(6);
            bowling.currentMove(4);
            bowling.currentMove(5);
            bowling.currentMove(5);
            bowling.currentMove(10);
            bowling.currentMove(0);
            bowling.currentMove(1);
            bowling.currentMove(7);
            bowling.currentMove(3);
            bowling.currentMove(6);
            bowling.currentMove(4);
            bowling.currentMove(10);
            bowling.currentMove(10);
            //bowling.currentMove(8);
            bowling.addExtraRoll(9, 6);
            bowling.calculateScore();
            expect(bowling._totalScore).toEqual(133);
        })
    })

    describe('perfect game', function(){
        it('perfect game gives max score of 300', function(){
            bowling.currentMove(10);
            bowling.currentMove(10);
            bowling.currentMove(10);
            bowling.currentMove(10);
            bowling.currentMove(10);
            bowling.currentMove(10);
            bowling.currentMove(10);
            bowling.currentMove(10);
            bowling.currentMove(10);
            bowling.currentMove(10);
            bowling.addExtraRoll(9, 10);
            bowling.addExtraRoll(9, 10);
            bowling.calculateScore();
            expect(bowling._totalScore).toEqual(300);

        })
    })
});