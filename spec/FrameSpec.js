describe('Frame', function() {

  var frame;

  beforeEach(function() {
    frame = new Frame();
  });

  it('begins on frame 1', function() {
    expect(frame.getCount()).toEqual(1);
  });

  it('frame number is incremented at the end of every frame', function() {
    frame.next();
    expect(frame.getCount()).toEqual(2);
  });




});
