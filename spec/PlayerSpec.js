describe('Player unit test', function() {
    var player;

    beforeEach(function() {
        player = new Player();
    });

    it('Should get player score', function() {
        expect(player.getScore(2)).toEqual(2);
    });

    it('Should have a frame record', function() {
        expect(player.getFrameRecord()).toEqual([]);
    });
});