
describe ("Score", () => {

  beforeEach( () => {
    score = new Score();
  });

    describe('firstBowlPins', () => {
      it ('returns the number of pins knocked over on the first bowl', () => {
        score.firstBowl(5);
        expect(score.firstBowlPins).toEqual(5);
      });
    });

    describe('secondBowlPins', () => {
      it ('returns the number of pins knocked over on the first bowl', () => {
        score.secondBowl(5);
        expect(score.secondBowlPins).toEqual(5);
      });
    });

    describe('isStrike', () => {
      it ('checks if the bowl is a strike', () => {
        score.firstBowl(10);
        score.isStrike();
        expect(score.strike).toEqual(true);
      });
    });

    describe('isSpare', () => {
      it ('checks if the bowl is a spare', () => {
        score.firstBowl(2);
        score.secondBowl(8);
        score.isSpare();
        expect(score.spare).toEqual(true);
      });
    });


});