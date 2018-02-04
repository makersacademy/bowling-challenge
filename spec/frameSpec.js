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

  it('can add up', function(){
    frame.addRoll(2)
    frame.addRoll(3)
    expect(frame.score()).toEqual(5)
  });

  it('knows it is a spare', function(){
    frame.addRoll(5)
    frame.addRoll(5)
    expect(frame.isSpare).toEqual(true)
  });

  it('knows it is a strike', function(){
    frame.addRoll(10)
    expect(frame.isStrike).toEqual(true)
  });

  

});