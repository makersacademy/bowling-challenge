describe ('Frame', function () {

  var frame;

  beforeEach(function () {

    frame = new Frame

    });

  describe ('Scoring', function () {
    it ('returns 0 for two gutter balls', function() {
      frame.pins(0);
      frame.pins(0);
      expect(frame.getScore()).toEqual(0);
    });

    it ('returns score for two scoring rolls', function() {
      frame.pins(1);
      frame.pins(2);
      expect(frame.getScore()).toEqual(3);
    });

    it ('scores 0 if a strike is thrown', function() {
      frame.pins('X');
      expect(frame.getScore()).toEqual(0);
    });
  });

  describe ('Strikes and spares', function () {
    it ('knows if a strike has been scored', function() {
      frame.pins('X')
      expect(frame.strike()).toEqual(true);
    });
    it ('knows if a spare has been scored', function() {
      frame.pins(5)
      frame.pins('/')
      expect(frame.spare()).toEqual(true);
    });
    it ('adds only the first roll a spare has been scored', function() {
      frame.pins(5)
      frame.pins('/')
      expect(frame.getScore()).toEqual(5);
    });
  });

  describe ('Edge case errors', function () {
    it ('throws an error if adding a score more than 9', function() {
      expect(function() {frame.pins(10)}).toThrowError('Maximum score is 9 or strike!')
    });

    it ('throws an error if an incorrect value is entered', function() {
      expect(function() {frame.pins('ralph')}).toThrowError('Incorrect input!')
    });

    it ('throws an error if total is greater than 10', function() {
      frame.pins(6);
      expect(function() {frame.pins(6)}).toThrowError('Maximum score is 9 or spare!')
    });

    it ('throws an error if total is equal to 10', function() {
      frame.pins(5);
      expect(function() {frame.pins(5)}).toThrowError('That was a spare')
    });

    it ('throws an error if adding a score after a strike', function() {
      frame.pins('X');
      expect(function() {frame.pins(2)}).toThrowError('Frame closed!')
    });

    it ('throws an error if a spare is added as first roll', function() {
      expect(function() {frame.pins('/')}).toThrowError('First roll cannot be a spare!')
    });

    it ('throws an error if a strike is added as second roll', function() {
      frame.pins(5);
      expect(function() {frame.pins('X')}).toThrowError('Second roll cannot be a strike, enter /')
    });

    it ('throws an error for more than two rolls', function() {
      frame.pins(1);
      frame.pins(2);
      expect(function() {frame.pins(2)}).toThrowError('Two rolls only!')
    });
  });
});
