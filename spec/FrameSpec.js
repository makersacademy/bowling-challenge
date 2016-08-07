describe ("Frame", function(){
  var frame

  beforeEach(function(){
    frame = new Frame();
  });

  it("frame begins with ball 1", function(){
    expect(frame.getBallNumber()).toEqual(1);
  });

  it("frame begins with 10 pins", function(){
    expect(frame.getPinsLeft()).toEqual(10);
  });

});
