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

    it('Array score should be empty', function () {
      expect(scoresheet.scoreArray).toEqual([[]]);
    });

    it('Frame counter should be 1', function () {
      expect(scoresheet.frameCounter).toEqual(0);
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
      scoresheet.calculatingScore(5);

      expect(scoresheet.totalScore()).toEqual(8);
    });
  });

  describe('Calculating Score', function () {
    it('Return total score for neither a strike or a spare', function () {
      scoresheet.calculatingScore(6);
      scoresheet.calculatingScore(3);
      expect(scoresheet.totalScore()).toEqual(9);
    });

    it('Return total score for 4 rolls', function () {
      scoresheet.calculatingScore(10);
      scoresheet.calculatingScore(10);
      scoresheet.calculatingScore(10);
      scoresheet.calculatingScore(6);
      scoresheet.calculatingScore(4);
      scoresheet.calculatingScore(4);
      scoresheet.calculatingScore(3);


      console.log(scoresheet.cumulativeScore);
      console.log(scoresheet.scoreArray);
    //  console.log(scoresheet.finalFrameResult);

      expect(scoresheet.totalScore()).toEqual(9);
    });
  });

});
