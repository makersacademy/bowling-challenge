
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


});