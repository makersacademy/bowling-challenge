describe('Bowlers', function() {
    var bowlers;
    beforeEach(function() {
        bowlers = new Bowlers();
    });

    it('should be able to receive the name of a player', function() {
        bowlers.add('Foo');
        expect(bowlers.all).toEqual(['Foo']);
    });
});