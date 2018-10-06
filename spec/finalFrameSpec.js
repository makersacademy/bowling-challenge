describe('FinalFrame', function() {
  var fframe;

  beforeEach(function() {
    fframe = new FinalFrame();
  });

  it('has an array of rolls', function() {
    expect(fframe.rolls).toEqual([])
  });

  it('adds to the rolls when the player rolls', function() {
    fframe.roll(3)
    expect(fframe.rolls).toEqual([3])
  })
});
