describe ('bowling', function() {
  var bowling;

  beforeEach(function() {
    bowling = new Bowling;
  });

  describe('shows a starting total', function() {
    it('shows a default starting total of 0', function() {
      expect(bowling.total).toEqual(0);
    });
  });
});
