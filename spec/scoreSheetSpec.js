describe('Bowling Scoresheet', function () {

  var scoresheet;

  beforeEach(function () {
    scoresheet = new Scoresheet();
  });

  describe('Scoresheet begins with correct values', function () {

    it('Pins droppped should be 0', function () {
      expect(scoresheet.pinsDropped).toEqual(0);
    });

    it('Total rolls should be 0', function () {
      expect(scoresheet.rollCounter).toEqual(0);
    });

    it('Array roll should be empty', function () {
      expect(scoresheet.rollArray).toEqual([]);
    });

    it('Array score should be empty', function () {
      expect(scoresheet.scoreArray).toEqual([[]]);
    });

    it('Frame counter should be 1', function () {
      expect(scoresheet.frameCounter).toEqual(1);
    });
  });

  describe('Calculating Score', function () {
    it('Return total score for neither a strike or a spare', function () {
      scoresheet.calculatingScore(6);
      scoresheet.calculatingScore(3);
      expect(scoresheet.totalScore()).toEqual(9);
    });
  });

  describe('Strike , Spare or None', function () {

    it('Player scores strike on roll 1', function () {
      scoresheet.calculatingScore(10);

      expect(function functionName() {scoresheet.isStrike();} ).toBeTruthy();
    });

    it('Player scores a spare on roll 2; 5 pins per roll', function () {
      scoresheet.calculatingScore(5);
      scoresheet.calculatingScore(5);

      expect(function functionName() {scoresheet.isSpare();} ).toBeTruthy();
    });

    it('Player scores a spare on roll 2; 0 pins and 10 pins on second roll', function () {
      scoresheet.calculatingScore(0);
      scoresheet.calculatingScore(10);

      expect(function functionName() {scoresheet.isSpare();} ).toBeTruthy();
    });

    it('Player scores neither a spare or strike; 3 pins per roll', function () {
      scoresheet.calculatingScore(3);
      scoresheet.calculatingScore(3);

      expect(scoresheet.totalScore()).toEqual(6);
    });
  });

  // describe('Total Score so far', function () {
  //   it('Should print provide total score after one frame', function () {
  //     scoresheet.pinsDropped(4);
  //     scoresheet.pinsDropped(5);
  //
  //     console.log(scoresheet.scoreArray);
  //     expect(scoresheet.scoreCalculated).toEqual(9);
  //   });
  //
  //   it('Should print total score after each frame', function () {
  //     scoresheet.pinsDropped(10);
  //
  //     scoresheet.pinsDropped(1);
  //     scoresheet.pinsDropped(9);
  //
  //     scoresheet.pinsDropped(5);
  //     scoresheet.pinsDropped(1);
  //     console.log(scoresheet.scoreArray);
  //     //expect(scoresheet.scoreCalculated).toEqual(41);
  //   });
  // });

});
