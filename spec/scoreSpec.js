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











});