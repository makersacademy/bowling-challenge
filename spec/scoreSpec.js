
describe ("Score", () => {

  beforeEach( () => {
    score = new Score();
  });

  it('starts with a score of 0', () => {
    expect(score.score).toEqual(0);
  })

    describe('firstBowlPins', () => {
      it ('returns the number of pins knocked over on the first bowl', () => {
        score.firstBowl(5);
        expect(score.firstBowlPins).toEqual(5);
      });
    });

    describe('secondBowlPins', () => {
      it ('returns the number of pins knocked over on the second bowl', () => {
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

    describe('calculateScore', () => {
      it ('adds the first and second bowls if not a strike or spare', () => {
        score.firstBowl(4);
        score.secondBowl(3);
        score.calculateScore();
        expect(score.score).toEqual(7);
      });

      it('stores the score if a strike', () => {
        score.firstBowl(10);
        score.isStrike();
        score.calculateScore();
        expect(score.storedScore).toEqual(10);
      });

      it ('stores the score if a spare', () => {
        score.firstBowl(3);
        score.secondBowl(7);
        score.isSpare();
        score.calculateScore();
        expect(score.storedScore).toEqual(10);
      })
    });



});