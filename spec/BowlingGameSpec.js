describe('BowlingGame', function(){

    var game; 
    var frame;

    beforeEach(function(){
        game = new BowlingGame();
        frame = jasmine.createSpyObj('frame', ['reset']);
    });

    describe('#currentTurn', function(){
        it('records the pinfall of a throw', function(){
            frame = new Frame();
            [frame.throwOne, frame.throwTwo] = [ 2, 2 ]
            game.currentTurn(2);
            game.currentTurn(2);
            expect(game._frames).toEqual([frame]);
        })
    });

    describe('#getScoreSoFar', function(){
        it('returns the accumulated score', function(){
            game.currentTurn(3);
            expect(game.getScoreSoFar()).toEqual(3)
            game.currentTurn(6);
            expect(game.getScoreSoFar()).toEqual(9)
        });
    });

   
    describe('#getTotalScore', function(){
        it('calculates the total score', function(){
            [frame.throwOne, frame.throwTwo] = [ 3, 4 ];
            game.saveFrame(frame);
            game.getTotalScore();
            expect(game._totalScore).toEqual(7);
        })     
    });

     describe('Game rules...', function (){   
        describe('gutter game', function() {
            it('returns 0 with no pins felled', function(){
                game.currentTurn(0)
                game.currentTurn(0)
                expect(game._totalScore).toEqual(0);
            })
        });

        describe('Pins still standing', function(){
            it('adds 4 and 5', function(){
                frame = new Frame();
                [frame.throwOne, frame.throwTwo] = [ 4, 5 ]
                game.currentTurn(4);
                game.currentTurn(5);
                expect(game._frames).toEqual([frame]);
                game.getTotalScore();
                expect(game._totalScore).toEqual(9);
            })
        });

        //ToDo:
        // describe('SPARE: all pins felled in two throws', function () { 
        //     it('includes bonus points from next 1 throw', function() {
        //         for (let i = 0; i < 5; i++){
        //             game.currentTurn(5);
        //         }
        //         game.getTotalScore();
        //         expect(game._totalScore).toEqual(150);
        //     });
        // });

        // describe('STRIKE: all pins felled in first throw', function () { 
        //     it('includes bonus points from next two throws', function() {
        //         game.currentTurn(10);
        //         game.currentTurn(5);
        //         game.currentTurn(4);
        //         game.getTotalScore();
        //         expect(game._totalScore).toEqual(150);
        //     });
        // });

        // describe('10th FRAME: all pins felled in first throw', function () { 
        //     it('includes points from a bonus throw', function() {
        //          //setup frame 10
        //         game.currentTurn(10);
        //         game.currentTurn(5);
        //         game.currentTurn(4);
        //         game.getTotalScore();
        //         expect(game._totalScore).toEqual(150);
        //     });
        // });
    });

});

    

