describe('The Frame', function() {
  var frame;
  beforeEach(function() {
    frame = new Frame;
  })
  it('have a holding place for ball1 and ball2', function() {
    expect(frame.ball1).toEqual(null);
    expect(frame.ball2).toEqual(null);
  });



})
