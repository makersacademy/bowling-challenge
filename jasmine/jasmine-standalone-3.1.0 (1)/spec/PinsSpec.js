describe('Pins', function() {
  var pins;
  pins = new Pins;

  describe('pins', function() {
    it('has ten pins by default', function() {
    expect(pins.default).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
    });
  });
});
