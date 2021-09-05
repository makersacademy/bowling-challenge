describe ("Score", () => {
    beforeEach( () => {
        score = new Score();
    });

    describe ('firstBowlPins', () => {
        it ('shows number of pins knocked down by first bowl', () => {
            score.firstBowl(5);
            expect(score.firstBowlPins).toEqual(5);
        });
    });   
    describe ('secondBowlPins', () => {
            it ('shows number of pins knocked down by second bowl', () => {
                score.secondBowl(9);
                expect(score.secondBowlPins).toEqual(9);
            });
    });

    describe ('isStrike', () => {
        it ('checks if bowl is a strike', () => {
        score.firstBowl(10);
        score.isStrike();
        expect(score.strike).toEqual(true);
        });
    });

    describe ('isSpare', () => {
        it ('checks if bowl is a spare', () => {
        score.firstBowl(3);
        score.secondBowl(7);
        score.isSpare();
        expect(score.spare).toEqual(true);
        });
    });









});