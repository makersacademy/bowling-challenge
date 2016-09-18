describe('A frame', function(){

  var frame;

  beforeEach(function(){
    frame = new Frame();
  });

  it('starts with 10 pins', function(){
    expect(frame.currPins()).toEqual(10);
  });

});
