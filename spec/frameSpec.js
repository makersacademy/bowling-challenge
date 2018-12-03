describe('Frame', function(){
    var frame;

    beforeEach(function(){
        frame = new Frame();
        frame.setFirstScore(3);
        spyOn(Math, 'floor').and.returnValue(1);
    });

    it('should store first score value',function(){
        firstScore = frame.getFirstScore();
        expect(firstScore).toEqual(3);
    });

    describe('first score value exists', function(){

        it('should store second score value',function(){
            frame.setSecondScore(2);
            secondScore = frame.getSecondScore();
            expect(secondScore).toEqual(2);
        });

    });
    
    describe('randomScore method', function(){

        it('should return random value between 1 and 10',function(){
            expect(frame.randomScore()).toEqual(2);
        });

    });

    describe('score method', function(){

        it('should store random value between 1 and 10 into secondScore', function(){
            
            expect(frame.getFirstScore()).toEqual(3);
            frame.score();
            expect(frame.getSecondScore()).toEqual(2);
        });

    });

    describe('should return true or false',function(){

        it('score/roll is a strike', function(){
            frame.setSecondScore(10);
            expect(frame.isStrike()).toEqual(true);
        });
    
        it('score/roll is a spare', function(){
            frame.setFirstScore(1);
            expect(frame.isSpare()).toEqual(true);
        });
    
        it('score/roll is a miss', function(){
            frame.setSecondScore(0);
            expect(frame.isMiss()).toEqual(true);
        });    

    });

});
