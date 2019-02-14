describe('Bowlers', function() {
    var bowlers;
    beforeEach(function() {
        bowlers = new Bowlers()
    })

    it('should be able to receive the name of a player', function() {
        bowlers.add('Foo')
        expect(bowlers.all).toEqual(['Foo'])
    })

    it('should accept no more than 8 players', function() {
        for(i = 0; i < 9; i++) { bowlers.add('Foo') }
        expect(bowlers.all.length).toEqual(8)
    })
})