describe('Frame', function(){
    var frame;

    beforeEach(function(){
        frame = new Frame();
        frame.setFirstScore(3);
        spyOn(Math, 'floor').and.returnValue(1);
    });
    
    describe('randomScore method', function(){

        it('should return random value between 1 and 10',function(){
            expect(frame.randomScore(10)).toEqual(2);
        });

    });

    describe('score method', function(){

        it('should store random value between 1 and 10 into secondScore', function(){
            expect(frame.getFirstScore()).toEqual(3);
            frame.score();
            expect(frame.getSecondScore()).toEqual(2);
        });

    });


    describe('complete method', function () {

        it('should return true when frame is complete from strike', function () {
            frame.setFirstScore(10);
            expect(frame.complete()).toEqual(true);
        });
        it('should return true when frame is complete from spare', function () {
            frame.setFirstScore(1);
            frame.setSecondScore(9);
            expect(frame.complete()).toEqual(true);
        });

    });


    describe('should return true or false', function(){

        it('score/roll is a strike', function(){
            frame.setFirstScore(10);
            frame.setSecondScore(10);
            expect(frame.isStrike()).toEqual(true);
        });
    
        it('score/roll is a spare', function(){
            frame.setFirstScore(1);
            frame.setSecondScore(9);
            expect(frame.isSpare()).toEqual(true);
        });

        it('score/roll is a miss', function(){
            frame.setSecondScore(0);
            expect(frame.isMiss()).toEqual(true);
        });    

    });

    it('should return the total of a frame',function(){
        frame.total = 5;
        expect(frame.getTotal()).toEqual(5);
    });

    describe('total method', function(){

        it('should return total score of 5 for frame', function(){
            frame.score();
            expect(frame.totalScore()).toEqual(5);
        });

        it('should return total score of 10 for frame', function(){
            Math.floor.and.returnValue(6);
            frame.score();
            expect(frame.totalScore()).toEqual(10);
        });

        it('should return total score of 10 for frame', function(){
            frame.setFirstScore(10);
            expect(frame.totalScore()).toEqual(10);
        });

    });

});
