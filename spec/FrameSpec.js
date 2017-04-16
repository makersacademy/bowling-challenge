describe('Frame', function() {

  beforeEach(function() {
    frame = new Frame();
  });

  describe('Play a frame', function() {
    it('logs a gutterball', function() {
      logRollResults([0])
      expect(frame.total()).toEqual(0);
    });

    it('logs two gutterballs', function() {
      logRollResults([0,0])
      expect(frame.total()).toEqual(0);
    });

    it('logs a frame total of 5', function() {
      logRollResults([5])
      expect(frame.total()).toEqual(5);
    });

    it('logs a frame total of 6 and 4', function() {
      logRollResults([6,4])
      expect(frame.total()).toEqual(10);
    });
  });

  var logRollResults = function(testResults) {
    for(var i = 0; i < testResults.length; i++) {
      frame.logRollResult(testResults[i]);
    };
  };

});