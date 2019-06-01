describe('A frame of bowling', function() {

  it('adds two rolls together', function() {
    var frame = new Frame([1,3]);
    expect(frame.total()).toEqual(4);
  });

  it('adds a spare bonus', function() {
    var frame = new Frame([9,1]);
    var next_frame = new Frame([4,1]);
    expect(frame.total(next_frame)).toEqual(14);
  });
});
