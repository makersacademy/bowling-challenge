describe('Frame', function() {

  beforeEach(function() {
    frame = new Frame();
  });

  it('should have its own score', function() {
    expect(frame.score).toEqual(0);
  });

  it('should be able to knock down pins', function() {
    frame.bowl(3);
    expect(frame.pinsLeft).toEqual(7);
  });

  it('should be able to increase its score', function() {
    frame.bowl(3);
    frame.bowl(6);
    expect(frame.score).toEqual(9);
  });

  it('should be able to record the number of bowls made', function() {
    frame.bowl(3);
    expect(frame.frameTally).toEqual(1);
  });

});