describe('Frame', function() {
  let frame;

  beforeEach(function() {
    frame = new Frame();
  })

  it('is initially empty', function() {
    expect(frame.scores).toEqual([]);
  })

  it('records a single roll', function() {
    frame.roll(1);
    expect(frame.scores).toEqual([1]);
  })

  it('records two rolls', function() {
    frame.roll(1);
    frame.roll(2);
    expect(frame.scores).toEqual([1, 2]);
  })

  it('detects invalid first roll', function() {
    expect(function() {frame.roll(11)}).toThrow(new Error("Invalid roll"))
  })

  it('detects invalid second roll', function() {
    frame.roll(5);
    expect(function() {frame.roll(6)}).toThrow(new Error("Invalid roll"))
  })
})
