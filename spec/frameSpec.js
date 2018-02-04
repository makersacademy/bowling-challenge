describe('Frame', function() {

  var frame;

  beforeEach(function() {
    frame = new Frame
  });

  it('starts with an empty set of rolls', function(){
    expect(frame.rolls).toEqual([]);
  });

  it('can add a roll', function(){
    frame.addRoll(5)
    expect(frame.rolls).toContain(5)
  });

});