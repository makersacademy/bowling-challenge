describe('Bowling', function () {
  let bowling;

  beforeEach(function () {
    bowling = new Bowling();
  });

  describe('the constructor creates the required vars', function () {
    it('has a variable total', function () {
      expect(bowling.total).toEqual(0);
    });
  });
});
