describe('frame', function() {

  var testframe;

  beforeEach(function() {
    testframe = new frame();
  });

  describe('Roll Score', function() {
    it('has a two roll scores by default', function() {
      expect(testframe.firstRollScore(5)).toEqual(5);
      expect(testframe.secondRollScore(3)).toEqual(3);
    });
  });
});
