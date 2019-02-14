describe('Scorecard', function() {

  beforeEach(function(){
    scorecard = new Scorecard();
  });

  describe('#frameNumber', function() {
    it('begins on frame number 1', function() {
      expect(scorecard.frameNumber).toEqual(1)
    });
  });
});
