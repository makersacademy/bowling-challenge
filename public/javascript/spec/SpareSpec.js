describe('spare', function() {
    var spare

    beforeEach(function(){
        spare = new Spare('12', 8)
    })

    it('returns the id that was passed in on creation', function(){
        expect(spare.getId()).toEqual('12')
    })

    it('sets score2 when update score is called and can return total', function(){
        spare.updateScore(8);
        expect(spare.total()).toEqual(16)
    })




})