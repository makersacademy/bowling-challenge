describe('Frame', function(){
    var frame;

    beforeEach(function(){
        frame = new Frame();
        frame.setFirstScore(2);
    });

    it('should store first score value',function(){
        frame.setFirstScore(2);
        firstScore = frame.getFirstScore();
        expect(firstScore).toEqual(2);
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
            spyOn(Math, 'random').and.returnValue(1);
            expect(frame.randomScore()).toEqual(7);
        });

    });

});
