describe('A frame', function(){

  var frame;

  beforeEach(function(){
    frame = new Frame();
  });

  it('starts with 10 pins', function(){
    expect(frame._standingPins).toEqual(10);
  });

  it('generates a random number of knockedPins', function(){
    spyOn(Math, 'random').and.returnValue(0.5);
    frame.knockedPins();
    expect(frame._pinsKnocked).toEqual(5);
  });

  it('can return the standing pins after knocking pins over', function() {
    spyOn(Math, 'random').and.returnValue(0.7);
    frame.knockedPins();
    expect(frame.remainingPins()).toEqual(3);
  });



});
