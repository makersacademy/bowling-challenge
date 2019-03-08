// var Frame = require('../src/frame');

describe('Frame', function () {

  var frame;

  beforeEach(function() {
    frame = new Frame()
  });

  it('saves the score of roll1 in a hash in an array', function() {
    frame.roll1(1, 5)
    expect(frame.scoreCard[0]).toEqual({'roll1': 5, 'roll2': null, 'special': null, 'total': null})
  });

  it('saves the score of roll2 in a hash in an array', function() {
    frame.roll2(1, 5)
    expect(frame.scoreCard[0]).toEqual({'roll1': null, 'roll2': 5, 'special': null, 'total': null})
  });

  it('if strike, saves "strike" and does not allow input for second roll', function() {
    frame.roll1(1, 10)
    expect(frame.scoreCard[0]).toEqual({'roll1': 10, 'roll2': 0, 'special': 'strike', 'total': null})
  });

  it('if spare, saves "spare"', function() {
    frame.roll1(2, 3)
    frame.roll2(2, 7)
    expect(frame.scoreCard[1]).toEqual({'roll1': 3, 'roll2': 7, 'special': 'spare', 'total': null})
  });


});
