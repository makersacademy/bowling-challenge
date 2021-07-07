describe('Frame', function() {

    var frame;

    beforeEach(function() {
        frame = new Frame;
    });

    it('should add the roll score to the roll', function() {
        frame.roll(3);
        frame.roll(2);
        final = [3, 2];
        expect(frame.scores).toEqual(final);
    });

    it('should have a default of two rolls', function() {
        frame.roll(3);
        frame.roll(3);
        expect(function() {
            frame.roll(3);
        }).toThrow(new Error('No more rolls this frame.'));
    });

    it('has only one roll total if the first roll is 10 (a strike)', function() {
        frame.roll(10);
        expect(frame._numberOfRolls).toEqual(1);
        expect(frame.scores.length).toEqual(1);
        expect(function() {
            frame.roll(3);
        }).toThrow(new Error('No more rolls this frame.'));
        expect(frame._numberOfRolls).toEqual(1);
        expect(frame.scores.length).toEqual(1);
    });

    it('IsAStrike if first roll is 10', function() {
        frame.roll(10);
        expect(frame.IsAStrike()).toBe(true);
        expect(frame.IsASpare()).toBe(false);
    });

    it('has a default strike bonus of 0', function() {
        expect(frame.sumStrikeBonusRollsScores()).toEqual(0);
    });

    describe('#sumStrikeBonusRollsScores', function() {

        it('returns the sum of the strike bonuses', function() {
            frame._strikeBonusRollsScores = [2, 5];
            expect(frame.sumStrikeBonusRollsScores()).toEqual(7);
        });

    });

    it('IsASpare if it is not a strike and totals to 10', function() {
        frame.roll(0);
        frame.roll(10);
        expect(frame.IsAStrike()).toBe(false);
        expect(frame.IsASpare()).toBe(true);
    });

});
