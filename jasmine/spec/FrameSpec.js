describe('Frame', function(){
  var frame;

  beforeEach(function(){
    frame = new Frame();
  });
  it('begins a new frame', function() {
    expect(frame).toEqual(frame);
  });
});
