describe ('Frame', function () {

  var frame;

  beforeEach(function () {

    frame = new Frame

    });

  describe ('Scoring', function () {
    it ('returns 0 for two gutter balls', function() {
      frame.enterPins(0);
      frame.enterPins(0);
      expect(frame.getScore()).toEqual(0);
    });

    it ('returns score for two scoring rolls', function() {
      frame.enterPins(1);
      frame.enterPins(2);
      expect(frame.getScore()).toEqual(3);
    });

    it ('scores 0 if a strike is thrown', function() {
      frame.enterPins('X');
      expect(frame.getScore()).toEqual(0);
    });
  });

  describe ('Strikes and spares', function () {
    it ('knows if a strike has been scored', function() {
      frame.enterPins('X')
      expect(frame.hasStrike()).toEqual(true);
    });
    it ('knows if a spare has been scored', function() {
      frame.enterPins(5)
      frame.enterPins('/')
      expect(frame.hasSpare()).toEqual(true);
    });
    it ('adds only the first roll a spare has been scored', function() {
      frame.enterPins(5)
      frame.enterPins('/')
      expect(frame.getScore()).toEqual(5);
    });
  });


  describe ('Edge cases', function () {
    it ('cannot enter a score more than 9', function() {
      expect(frame.enterPins(10)).toEqual('Incorrect input!')
    });

    it ('cannot enter an incorrect value', function() {
      expect(frame.enterPins('blah')).toEqual('Incorrect input!')
    });

    it ('cannot enter a total greater than 10', function() {
      frame.enterPins(6);
      expect(frame.enterPins(5)).toEqual('Maximum score is 9 or spare!')
    });

    it ('cannot enter total equal to 10', function() {
      frame.enterPins(5);
      expect(frame.enterPins(5)).toEqual('Maximum score is 9 or spare!')
    });

    it ('cannot enter a score after a strike', function() {
      frame.enterPins('X');
      expect(frame.enterPins(5)).toEqual('Frame closed!')
    });

    it ('cannot enter a spare as first roll', function() {
      expect(frame.enterPins('/')).toEqual('First roll cannot be a spare!')
    });

    it ('cannot enter a strike as second roll', function() {
      frame.enterPins(5);
      expect(frame.enterPins('X')).toEqual('Second roll cannot be a strike!')
    });

    it ('cannot enter more than 2 rolls in a standard frame', function() {
      frame.enterPins(1);
      frame.enterPins(2);
      expect(frame.enterPins(2)).toEqual('Frame closed!')
    });
  });
});
