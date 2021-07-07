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
        let playerNames = ["Foo", "Bar", "Baz", "Qux", "Quux", "Corge", "Uier", "Grault", "Garply"]
        for(i = 0; i < 9; i++) { bowlers.add(playerNames[i]) }
        expect(bowlers.all.length).toEqual(8)
    })

    it('should only accept unique player names', function() {
        bowlers.add('Foo')
        bowlers.add('Foo')
        expect(bowlers.all).toEqual(['Foo'])
    })
})