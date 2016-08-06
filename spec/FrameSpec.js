describe("Frame", function(){

  var frame;

  beforeEach(function(){
    frame = new Frame();
  });

  it('sets default roll to 1', function(){
    expect(frame.roll).toEqual(1);
  });

  it('sets default knockedPins to 0', function(){
    expect(frame.knockedPins).toEqual(0);
  });

  it('sets default frameScore to 0', function(){
    expect(frame.frameScore).toEqual(0);
  });


});
