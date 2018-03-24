describe('NumberOfPins', function() {
  var numberOfPins;
  beforeEach(function() {
    numberOfPins = new NumberOfPins
  });

  describe('numberOfPins', function() {
    it('has a dafault array', function() {
      expect(numberOfPins.DEFAULT_BUTTONS).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
    });
  });
});
