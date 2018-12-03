describe('Frame', function(){
    var frame;

    beforeEach(function(){
        frame = new Frame();
        frame.setFirstScore(3);
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
            spyOn(Math, 'random').and.returnValue(1);
            expect(frame.randomScore()).toEqual(7);
        });

    });

    describe('score method', function(){

        it('should store random value between 1 and 10 into secondScore', function(){
            spyOn(Math, 'floor').and.returnValue(1);
            expect(frame.getFirstScore()).toEqual(3);
            frame.score();
            expect(frame.getSecondScore()).toEqual(2);
        });

    });

    it('should return whether or not score is a strike or not', function(){
        spyOn(Math, 'floor').and.returnValue(9);
        frame.score();
        expect(frame.isStrike()).toEqual(true);
    });

});
