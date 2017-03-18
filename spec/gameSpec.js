describe('Frame', function() {
  var frame;

  it('returns a random number between 0 and 10', function(){
    frame = new Frame();
    expect(frame.roll()).toBeLessThan(11);
  });

  xit('adds present frame hits to overall score', function(){
    expect(frame.currentScore()).toEqual(frame.score + frame.roll())
  });






});
