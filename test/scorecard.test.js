const Scorecard = require('../lib/scorecard.js')

describe('Scorecard', () => {
  let scorecard;
  beforeEach(() => {
    scorecard = new Scorecard();
  });

  test('Scorecard initializes with an empty array and frame', () => {
    expect(scorecard.framesArray).toEqual([]);
    expect(scorecard._frame).toEqual([]);
  });

  describe('.addRoll', () => {
    test('adds a roll to the frame', () => {
      scorecard.addRoll(2)
      expect(scorecard._frame).toEqual([2]);
    })

    test('if strike rolled frame added to framesArray', () => {
      scorecard.addRoll(10)
      expect(scorecard.framesArray.length).toEqual(1);
      expect(scorecard.framesArray[0]).toEqual([10]);  
      expect(scorecard._frame).toEqual([]);
    })

    test('if frame is 2 rolls long it is added to framesArray', () => {
      scorecard.addRoll(2)
      scorecard.addRoll(4)
      expect(scorecard.framesArray.length).toEqual(1);
      expect(scorecard.framesArray[0]).toEqual([2,4]); 
      expect(scorecard._frame).toEqual([]);
    });

    test('if frame is 1 roll long and not strike it is not added', () => {
      scorecard.addRoll(2)
      expect(scorecard._frame).toEqual([2]);
      expect(scorecard.framesArray.length).toEqual(0);
    });

    test('adding multiple frames', () => {
      for (let i = 0; i < 5; i++) {
        scorecard.addRoll(10);
      }
      for (let i = 0; i < 4; i++) {
        scorecard.addRoll(5);
        scorecard.addRoll(5);
      }
      expect(scorecard.framesArray.length).toEqual(9);
    })
  });

});