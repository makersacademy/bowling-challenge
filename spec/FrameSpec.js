describe('Frame', function() {
  var number = 1;
  var OneScore = Number;
  var TwoScore = Number;
  var TotalScore = 0;
  var Strike = false;

  beforeEach(function() {
    frame = new Frame();
  });

  it('gives you the frame number', function() {
    expect(frame.number).toEqual(1);

  });

  it('adds a score for the first roll', function() {
    frame.firstRoll(5);
    expect(frame.OneScore).toEqual(5);
  });

  it('should throw an exception if the first roll score is greater than 10', function() {

    expect(function() {
      frame.firstRoll(11);
    }).toThrowError('Please enter a number equal to, or less than, 10');
  });

  it('records a strike if the first roll equals 10', function() {
    frame.firstRoll(10);
    expect(frame.Strike).toEqual(true);
  });

  it('adds a score for the second roll', function() {
    frame.secondRoll(5);
    expect(frame.TwoScore).toEqual(5);
  });

  it('enters a score of Zero for the second roll if the first roll is a strike', function() {
    frame.Strike == true;
    expect(frame.TwoScore).toEqual(0);
  });

  it('adds a total frame score for both rolls ', function() {
    frame.firstRoll(5);
    frame.secondRoll(5);
    expect(frame.TotalScore).toEqual(10);
  });
});
