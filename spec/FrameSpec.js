describe('A frame of bowling', function() {

  it('adds two rolls together', function() {
    frame = new Frame([1,3]);
    expect(frame.total()).toEqual(4);
  });
});
