/* eslint-disable prefer-arrow-callback */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-undef */
// eslint-disable-next-line no-undef
// eslint-disable-next-line prefer-arrow-callback
describe('Bowling', function () {
  let bowling;

  beforeEach(function () {
    bowling = new Bowling();
  });

      it('starts as an empty scorecard', function () {
      expect(bowling._rolls).toEqual([]);
      });

      it('can score a gutter game', function () {
        for (let i = 0; i < 20; i++) {
        bowling.roll(0);
        }
        expect(bowling.score()).toEqual(0);
      });

      it('can score a whole game of ones', function () {
        rollMany(1, 20);
        expect(bowling.score()).toEqual(20);
      });

      // eslint-disable-next-line no-var
      // eslint-disable-next-line vars-on-top
      var rollMany = function (pinsDown, rolls) {
          for (let i = 0; i < rolls; i++) {
            bowling.roll(pinsDown);
      }
    };

    it('can score a spare', function () {
      bowling.roll(5);
      bowling.roll(5);
      bowling.roll(3);
      for (let i = 0; i < 17; i++) {
      bowling.roll(0);
      }
      expect(bowling.score()).toEqual(16);
    });

    it('can score a strike', function () {
      bowling.roll(10);
      bowling.roll(3);
      bowling.roll(1);
      rollMany(0, 16);
      expect(bowling.score()).toEqual(18);
    });
  
}); // last brackets
