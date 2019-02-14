describe('Frame', function() {
    var frame;
    beforeEach(function(){
        frame = new Frame()
    })

    it('should accept a score and store it', function(){
        frame.addScore(10)
        expect(frame.throws).toEqual([10])
    })

    it('should accept two scores', function(){
        frame.addScore(5)
        frame.addScore(5)
        expect(frame.throws).toEqual([5,5])
    })

    it('should not accept more than two scores', function(){
        frame.addScore(5)
        frame.addScore(5)
        frame.addScore(5)
        expect(frame.throws).toEqual([5,5])
    })
})