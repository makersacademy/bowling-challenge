describe('frame', function() {
    beforeEach(function() {
        frame = new Frame();
    });

    it('has a total that starts at 0', function() {
        expect(frame.getTotal()).toEqual(0);
    });

    it('saves the score of the first bowl', function() {
        frame.firstBowl(3);
        expect(frame.bowl1).toEqual(3);
    });

    it('saves the score of the second bowl', function() {
        frame.secondBowl(4);
        expect(frame.bowl2).toEqual(4);
    })

    it('has a total that is the sum of its bowls', function() {
        frame.firstBowl(3);
        frame.secondBowl(4);
        expect(frame.getTotal()).toEqual(7);
    });

    it('awaits only 1 bonus if a spare (bowl1 + bowl2 = 10)', function() {
        frame.firstBowl(9);
        frame.secondBowl(1);
        expect(frame.isAwaitingBonus()).toEqual(true);
        frame.addBonus(2);
        expect(frame.isAwaitingBonus()).toEqual(false);
    });

    it('stores a bonus', function() {
        frame.firstBowl(10);
        frame.addBonus(2);
        expect(frame.bonus).toEqual(2);
    });

    it('awaits 2 bonuses if a strike (bowl1 = 10)', function() {
        frame.firstBowl(10);
        frame.addBonus(1);
        expect(frame.isAwaitingBonus()).toEqual(true);
    });

    it('prevents a 2nd bowl if 1st bowl is a strike', function() {
        frame.firstBowl(10);
        expect(frame.secondBowlAllowed).toEqual(false);
    });

    it('allows a 2nd bowl if 1st bowl is not a strike', function() {
        frame.firstBowl(10);
        expect(frame.secondBowlAllowed).toEqual(false);
    });
});