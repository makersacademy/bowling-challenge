describe('Bowling Scoresheet', function () {

  var scoresheet;

  beforeEach(function () {
    scoresheet = new Scoresheet();
  });

  describe('Scoresheet begins with correct values', function () {

    it('Array roll should be empty', function () {
      expect(scoresheet.rollArray).toEqual([]);
    });

    it('Array score should be empty', function () {
      expect(scoresheet.scoreArray).toEqual([]);
    });

    it('Total rolls should be 0', function () {
      expect(scoresheet.rollCounter).toEqual(0);
    });

    it('Frame counter should be 1', function () {
      expect(scoresheet.frameCounter).toEqual(1);
    });
  });

  describe('Scoresheet accept score', function () {
    it('Score Given function to have been called', function () {
      spyOn(scoresheet, 'pinsDropped').and.returnValue(10);
      expect(scoresheet.pinsDropped(10)).toEqual(10);
    });
  });


  describe('Strike , Spare or None', function () {

    it('Player scores strike on roll 1', function () {
      scoresheet.pinsDropped(10);
      console.log(scoresheet.scoreArray);
      expect(scoresheet.isStrike()).toBeTruthy();
    });

    it('Player scores a spare on roll 2, 5 pins per roll', function () {
      scoresheet.pinsDropped(5);
      scoresheet.pinsDropped(5);
      console.log(scoresheet.scoreArray);
      expect(scoresheet.isSpare()).toBeTruthy();
    });

    it('Player scores a spare on roll 2, 1 pin and 9 pins in two rolls', function () {
      scoresheet.pinsDropped(1);
      scoresheet.pinsDropped(9);
      console.log(scoresheet.scoreArray);
      expect(scoresheet.isSpare()).toBeTruthy();
    });

    it("Player doesn't score either a spare or strike", function () {
      scoresheet.pinsDropped(4);
      scoresheet.pinsDropped(3);
      console.log(scoresheet.scoreArray);
      expect(scoresheet.scoreArray).toEqual([4,3]);
    });
  });

});
