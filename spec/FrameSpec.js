describe('Frame', function() {

  it('scores 8 for rolling 5,3', function() {
    var frame = new Frame(5,3);
    expect(frame.score).toEqual(8);
  });

  it('scores 10 for strike', function() {
    var frame = new Frame(10,0);
    expect(frame.isAStrike).toBe(true);
    expect(frame.score).toEqual(10);
  });

  it('scores 10 for a spare', function() {
    var frame = new Frame(5,5);
    expect(frame.isASpare).toBe(true);
    expect(frame.score).toEqual(10);
  });

  it('scores zero for two gutter balls (0,0)', function() {
    var frame = new Frame(0,0);
    expect(frame.score).toEqual(0);
  });

});