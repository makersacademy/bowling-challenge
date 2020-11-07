describe('Frame',function () {
  var frame;

  beforeEach(function() {
    frame = new Frame();
  });

  it('is initialize with 10 pins left',function() {

    expect(frame.pinsLeft).toEqual(10)
  });

  describe('#roll', function() {

    it('deducts number of pinsLeft by number of pinsKnockedDown', function() {
      frame.roll(1);

      expect(frame.pinsLeft).toEqual(9)
    });

    it('adds Roll to the array of rolls', function () {

      frame.roll(1);

      expect(frame.rolls.length).toEqual(1)
    });

    it('adds max two rolls per frame',function () {
      frame.roll(1);
      frame.roll(1);
      frame.roll(1);
      expect(frame.rolls.length).toEqual(2)
    });
    it('add roll only if number of pinsKnockedDown given is not greater then number of pins left',function () {
      frame.roll(11);

      expect(frame.rolls.length).toEqual(0)
    });

    it('add second roll  to the frame only if number of pinsKnockedDown given is not greater then number of pins left in the frame',function () {
      frame.roll(1);
      frame.roll(11);
      expect(frame.rolls.length).toEqual(1)
    });
  });

});
