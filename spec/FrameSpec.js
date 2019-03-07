describe('Frame', function() {

  it('scores 8 for rolling 5,3', function() {
    var frame = new Frame(5,3);
    expect(frame.score).toEqual(8);
  });

});