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

  describe ('Edge case errors', function () {
    it ('throws an error if adding a score more than 9', function() {
      expect(function() {frame.pins(10)}).toThrowError('Maximum score is 9 or strike!')
    });

    it ('throws an error if total is greater than 10', function() {
      frame.pins(6);
      expect(function() {frame.pins(6)}).toThrowError('Maximum score is 9 or spare!')
    });

    it ('throws an error if adding a score after a strike', function() {
      frame.pins('X');
      expect(function() {frame.pins(2)}).toThrowError('Frame closed!')
    });

    it ('throws an error for more than two rolls', function() {
      frame.pins(1);
      frame.pins(2);
      expect(function() {frame.pins(2)}).toThrowError('Two rolls only!')
    });
  });
});
