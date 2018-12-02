describe('Frame', function(){
    var frame;

    beforeEach(function(){
        frame = new Frame();
    });

    it('should store first score value',function(){
        frame.setFirst(2);
        firstScore = frame.getFirst();
        expect(firstScore).toEqual(2);
    });



});
