describe('A frame', function(){

  var frame;

  beforeEach(function(){
    frame = new Frame();
  });

  it('starts with 10 pins', function(){
    expect(frame.currPins()).toEqual(10);
  });

  it('returns the knocked down number of pins', function(){
    spyOn(frame, 'knockedPins').and.returnValues(4);
    expect(frame.remainingPins()).toEqual(6);
  });

});
