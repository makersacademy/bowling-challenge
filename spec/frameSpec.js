describe('Frame', () => {

    beforeEach( () => {
        frame = new Frame(1);
    });

    describe('firstBowl', () => {
        it('should add first bowl', () => {
            frame.firstBowl(1);
            expect(frame.score.firstBowlPins).toEqual(1)
        });
    });
    describe('secondBowl', () => {
        it('should add second bowl', () => {
            frame.secondBowl(1);
            expect(frame.score.secondBowlPins).toEqual(1)
        });
    });

















});