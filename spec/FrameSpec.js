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

    it('adds Roll to the array of rolls', function() {

      frame.roll(1);

      expect(frame.rolls.length).toEqual(1)
    });

    it('adds max two rolls per frame',function() {
      frame.roll(1);
      frame.roll(1);
      frame.roll(1);
      expect(frame.rolls.length).toEqual(2)
    });
    it('adds roll to the frame only if number of pinsKnockedDown given is not greater then number of pins left',function () {
      frame.roll(11);

      expect(frame.rolls.length).toEqual(0)
    });

    it('adds second roll  to the frame only if number of pinsKnockedDown given is not greater then number of pins left in the frame',function () {
      frame.roll(1);
      frame.roll(11);
      expect(frame.rolls.length).toEqual(1)
    });

    it('does not add second roll to the frame if number of pinsKnockedDown in the first roll is equal to 10', function () {
      frame.roll(10);
      frame.roll(1);
      expect(frame.rolls.length).toEqual(1)
    });

    it('adds spare', function () {
      frame.roll(2);
      frame.roll(8);
      expect(frame.rolls.length).toEqual(2)
    });

  });

  describe('#frame_score', function() {
    it('calculates score for the frame', function() {
      frame.roll(1);
      frame.roll(2);

      expect(frame.frame_score).toEqual(3)
    });
  });

  describe('#isStrike', function() {
    it('changes this.strike to true if numbers of pins knocked down is equal 10', function() {
      frame.roll(10);

      expect(frame.strike).toEqual(true)
    });
  });

  describe('#isSpare', function() {
    it('changes this.spare to true if number of pins knocked down in two rolls is equal 10', function() {
      frame.roll(2);
      frame.roll(8);
      expect(frame.spare).toEqual(true)
    });
  });

  describe('#add roll', function() {

    var roll = jasmine.createSpyObj('roll', ['pinsKnockedDown']);

    it('adds roll to the frame', function() {

      roll.pinsKnockedDown = 4
      frame.rolls.push(roll)

      expect(frame.rolls.length).toEqual(1)
    });
  });

});
