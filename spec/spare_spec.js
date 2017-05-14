describe('Bowling, scoring a spare:', function() {
  var theDude;
  var _hook;
  beforeEach(function() {
    theDude = new Bowling();
    spyOn(theDude, '_hook').and.returnValue(5);
    theDude.newGame();
    theDude.throw();
    theDude.throw();
  });

  describe('it doesn\'t store the frame total till after the next roll', function() {
    it('it returns nothing', function() {
      expect(theDude._scoreCard[0][2]).toEqual(undefined);
    });
  });
  describe('another 5 after the spare', function() {
    beforeEach(function() {
      theDude.throw();
    });
    it('adds the points to the total and stores it', function() {
      expect(theDude._scoreCard[0]).toEqual([5,5,15],[5]);
    })
  });
});
