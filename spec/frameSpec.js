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
        
        it('recognises when first bowl is a strike', () => {
            frame.firstBowl(10);
            frame.isStrike();
            expect(frame.strike).toEqual(true)
        });
        it('recognises when second bowl is a spare', () => {
            frame.firstBowl(3);
            frame.secondBowl(7);
            frame.isSpare();
            expect(frame.spare).toEqual(true)
        });
    
    });

















});