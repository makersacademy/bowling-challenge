describe('Frame', function() {

  var frame;

  beforeEach(function(){
    frame = new Frame();
  });

  it('initializes with a minimum score of 0', function() {
    expect(frame.MIN_SCORE).toEqual(0);
  });

  it('initializes with a maximum score of 10', function() {
    expect(frame.MAX_SCORE).toEqual(10);
  });

  it('initializes with a first roll of 0', function() {
    expect(frame.firstRoll).toEqual(null);
  });

  it('initializes with a second roll of 0', function() {
    expect(frame.secondRoll).toEqual(null);
  });

  describe('#recordRoll', function() {
    it('records the number of pins knocked down in the first roll', function() {
      frame.recordRoll(5);
      expect(frame.firstRoll).toEqual(5);
    });

    it('records the number of pins knocked down in the second roll', function() {
      frame.recordRoll(5);
      frame.recordRoll(2);
      expect(frame.secondRoll).toEqual(2);
    });

    it('doesn\'t record more than two rolls', function() {
      frame.recordRoll(5);
      frame.recordRoll(2);
      frame.recordRoll(3);
      expect(frame.firstRoll).toEqual(5);
      expect(frame.secondRoll).toEqual(2);
    });

    it('throws an error if the roll is bigger than 10', function() {
      expect(function() {
        frame.recordRoll(11)
      }).toThrowError('Cannot knock down more than 10 pins');
    });
  });

  describe('#getScore', function() {
    it('gets the score for the current frame', function() {
      frame.recordRoll(5);
      frame.recordRoll(2);
      expect(frame.getScore()).toEqual(7);
    });

    it('throws an error if the sum of the two rolls is bigger than 10', function() {
      frame.recordRoll(5);
      frame.recordRoll(6);
      expect(function() {
        frame.getScore();
      }).toThrowError('The sum cannot be bigger than 10');
    });
  });

  describe('#isStrike', function() {
    it('checks whether the first roll is a 10', function() {
      frame.recordRoll(10);
      expect(frame.isStrike()).toEqual(true);
      expect
    });
  });

  describe('#isSpare', function() {
    it('checks whether the two rolls add up to 10', function() {
      frame.recordRoll(4);
      frame.recordRoll(6);
      expect(frame.isSpare()).toEqual(true);
      expect
    });
  });
});
