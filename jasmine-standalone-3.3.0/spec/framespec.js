describe('Frame', function () {

  beforeEach(function() {
    frame = new Frame();
  });

  describe('Play a frame', function() {
    it('logs a gutterball', function() {
      bowlResults([0])
      expect(frame.total()).toEqual(0);
    });

    it('logs two gutterballs', function() {
      bowlResults([0, 0])
      expect(frame.total()).toEqual(0);
    });

    it('logs a frame total of 5', function() {
      bowlResults([5])
      expect(frame.total()).toEqual(5);
    });

    it('logs a frame total of 6 and 4', function() {
      bowlResults([6, 4])
      expect(frame.total()).toEqual(10);
    });
  });

  var bowlResults = function (testResults) {
    for (var i = 0; i < testResults.length; i++) {
      frame.bowlResult(testResults[i]);
    };
  };
});
