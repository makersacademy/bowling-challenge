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

    test('if strike rolled frame added to framesArray', () => {
      scorecard.addRoll(10);
      expect(scorecard.framesArray.length).toEqual(1);
      expect(scorecard.framesArray[0]).toEqual([10]);  
      expect(scorecard._frame).toEqual([]);
    })

    test('if frame is 2 rolls long it is added to framesArray', () => {
      scorecard.addRoll(2);
      scorecard.addRoll(4);
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
    });

    test('10th frame has 3 strikes', () => {
      for (let i = 0; i < 12; i++) {
        scorecard.addRoll(10);
      }
      expect(scorecard.framesArray.length).toEqual(10);
      expect(scorecard.framesArray[9]).toEqual([10,10,10]);
    });

    test('10th frame has 3 rolls if spare',() => {
      for (let i = 0; i < 9; i++) {
        scorecard.addRoll(10);
      }
      scorecard.addRoll(5);
      scorecard.addRoll(5);
      scorecard.addRoll(5);
      scorecard.addRoll(5);
      expect(scorecard.framesArray.length).toEqual(10);
      expect(scorecard.framesArray[9]).toEqual([5,5,5]);
    });

    test('10th frame adds 2 rolls if not strike or spare', () => {
      for (let i = 0; i < 9; i++) {
        scorecard.addRoll(10);
      }
      scorecard.addRoll(5);
      scorecard.addRoll(3);
      expect(scorecard.framesArray.length).toEqual(10);
      expect(scorecard.framesArray[9]).toEqual([5,3]);
    });
  });
});