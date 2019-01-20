describe('Frame', function() {

  var frame1;

  beforeEach(function() {
    frame1 = new Frame(1);
  });

  it('returns frame number', function() {
    expect(frame1.framenumber).toBe(1);
  });

  it('starts with roll number zero', function() {
    expect(frame1.rollnumber).toBe(0);
  });

});
