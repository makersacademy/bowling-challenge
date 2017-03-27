describe('Frame', function() {
  var frame;

  beforeEach(function(){
    frame = new Frame();
  });

  describe('A roll', function() {

    it('returns a random number between 0 and 10', function() {
      expect(frame.roll()).toBeLessThan(11);
    });

    it('returns the number of pins standing', function() {
      expect(frame.PINS).toEqual(frame.pinsRemaining() + hit);
    });

  });


  

});
