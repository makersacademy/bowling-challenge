describe('Spare', function() {
    var strike

    beforeEach(function(){
        strike = new Strike('12')
    })

    it('returns the id that was passed in on creation', function(){
        expect(strike.getId()).toEqual('12')
    })

    it('sets score1 when update score is first called and then score2 when called again', function(){
        strike.updateScore(8);
        strike.updateScore(3);
        expect(strike.getScore2()).toEqual(3)
    })

    it('Adds original score to total', function(){
        strike.updateScore(8);
        strike.updateScore(3);
        expect(strike.total()).toEqual(21)
    })

})