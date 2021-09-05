describe ("Score", () => {
    beforeEach( () => {
        score = new Score();
    });

    it ('starts with a score of 0', () => {
        expect(score.score).toEqual(0);
    })

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

    describe('calculateScore', () => {
        it ('adds the first and second bowls', () => {
            score.firstBowl(7);
            score.secondBowl(2);  
            score.calculateScore();
            expect(score.score).toEqual(9); 
        });

        it ('saves the score if a strike', () => {
            score.firstBowl(10);
            score.isStrike();  
            score.calculateScore();
            expect(score.savedScore).toEqual(10);
        })
        it ('saves the score if a spare', () => {
            score.firstBowl(5);
            score.secondBowl(5);
            score.isSpare();  
            score.calculateScore();
            expect(score.savedScore).toEqual(10);
        })
    });
       









});