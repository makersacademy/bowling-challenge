describe('Frame', function() {

  beforeEach(function() {
    frame = new Frame(0);
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

  it('can bowl a strike', function(){
    frame.bowl(10);
    expect(frame.score).toEqual(10);
    expect(frame.counter).toEqual(0);
  });

  it('can bowl a spare', function() {
    frame.bowl(5);
    frame.bowl(5);
    expect(frame.score).toEqual(10);
    expect(frame.counter).toEqual(1);
  });

  it('knows when it is not last', function() {
    expect(frame.last).toEqual(0);
  });

  it('knows when it is last', function() {
    frame = new Frame(2);
    expect(frame.last).toEqual(2);
  });

});