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
  });

});
