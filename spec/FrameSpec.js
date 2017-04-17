describe("Frame", function() {

  var frame;

  beforeEach(function() {
    frame = new Frame();
  });

  it ('returns the number of hit pins', function() {
    spyOn(Math, 'random').and.returnValue(0.634);
    expect(frame.pinsHit()).toEqual(6);
  });

  it ('knows the number of hit and not hit pins after the first roll', function() {
    spyOn(Math, 'random').and.returnValue(0.634);
    frame.roll()
    expect(frame.pinsHitByFirstRoll).toEqual(6);
    expect(frame.pinsLeft).toEqual(4)
  });

  it ('knows the number of of hit and not hit pins after the second roll', function() {
    spyOn(Math, 'random').and.returnValue(0.4);
    frame.roll()
    frame.roll()
    expect(frame.pinsHitByFirstRoll).toEqual(4);
    expect(frame.pinsHitBySecondRoll).toEqual(2);
    expect(frame.pinsLeft).toEqual(4);
  });

  it ('number of hit pins can not be more than 10', function() {
    frame.roll()
    frame.roll()
    expect(frame.pinsHitByFirstRoll+frame.pinsHitBySecondRoll).toBeLessThan(11);
  });

  it ('after two rolls it says that there is no more rolls', function() {
    frame.roll()
    frame.roll()
    expect(frame.roll()).toEqual("No more rolls");
  });

  it ('after strike it says that there is no more rolls', function() {
    spyOn(Math, 'random').and.returnValue(0.999);
    frame.roll()
    expect(frame.pinsHitByFirstRoll).toEqual(10);
    expect(frame.roll()).toEqual("No more rolls");
  });

  it ('knows if it is strike', function() {
    spyOn(Math, 'random').and.returnValue(0.999);
    frame.roll()
    expect(frame.pinsHitByFirstRoll).toEqual(10);
    expect(frame.isStrike()).toBe(true);
  });

  it ('knows if it is not strike', function() {
    spyOn(Math, 'random').and.returnValue(0.332);
    frame.roll()
    expect(frame.pinsHitByFirstRoll).toEqual(3);
    expect(frame.isStrike()).toBe(false);
  });

  it ('knows if it is spare', function() {
    spyOn(Math, 'random').and.returnValue(0.9);
    frame.roll()
    expect(frame.pinsHitByFirstRoll).toEqual(9);
    frame.roll()
    expect(frame.pinsHitBySecondRoll).toEqual(1);
    expect(frame.isSpare()).toBe(true);
  });

  it ('knows if it is not spare', function() {
    spyOn(Math, 'random').and.returnValue(0.3);
    frame.roll()
    expect(frame.pinsHitByFirstRoll).toEqual(3);
    frame.roll()
    expect(frame.pinsHitBySecondRoll).toEqual(2);
    expect(frame.isSpare()).toBe(false);
  });

  it ('knows how many pins hit in frame', function() {
    spyOn(Math, 'random').and.returnValue(0.3);
    frame.roll()
    expect(frame.pinsHitByFirstRoll).toEqual(3);
    frame.roll()
    expect(frame.pinsHitBySecondRoll).toEqual(2);
    expect(frame.totalHitInFrame()).toEqual(5);
  });

  it ('can be played', function(){
    spyOn(Math, 'random').and.returnValue(0.3);
    frame.play();
    expect(frame.pinsHitByFirstRoll).toEqual(3);
    expect(frame.pinsHitBySecondRoll).toEqual(2);
  });

  it ('can be played when strike', function(){
    spyOn(Math, 'random').and.returnValue(0.999);
    frame.play();
    expect(frame.pinsHitByFirstRoll).toEqual(10);
    expect(frame.pinsHitBySecondRoll).toEqual(null);
  });

});


