describe ('Frame', function () {

  var frame;

  beforeEach(function () {

    frame = new Frame

    });

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

    it ('throws an error for more than two rolls', function() {
      frame.pins(1);
      frame.pins(2);
      expect(function() {frame.pins(2)}).toThrowError('Two rolls only!')
    });
  });
