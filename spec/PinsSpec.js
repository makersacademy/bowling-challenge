describe(Pins, function() {
  var pins;
  const PINS = 10;

  beforeEach(function() {
    pins = new Pins();
  });

  describe('get', function(){
    it('gets the remainig pins', function() {
      expect(pins.get()).toEqual(PINS);
    });
  });

  describe('update', function() {
    it('updates the count of the pins', function() {
      pins.update(5);
      expect(pins.get()).toEqual(5);
    });
  });

  describe('reset', function() {
    it('resets the number of pins to the original number', function() {
      pins.update(5);
      pins.reset();
      expect(pins.get()).toEqual(PINS);
    });
  });
});
