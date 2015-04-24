describe('Frame', function(){

  var frame;

  it('returns the number of pins standing after 1 roll', function(){
    frame = new Frame();
    frame.roll(3);
    expect(frame.pins).toEqual(7);
    
  });


});