describe('Bowling Scoresheet', function () {

  var scoresheet;

  beforeEach(function () {
    scoresheet = new Scoresheet();
  });

  describe('Scoresheet begins with correct values', function () {

    it('Total rolls should be empty', function () {
      expect(scoresheet.rollArray).toEqual([]);
    });

    it('Total score should be empty', function () {
      expect(scoresheet.scoreArray).toEqual([]);
    });

    it('Frame counter should be 1', function () {
      expect(scoresheet.frameCounter).toEqual(1);
    });
  });

});
