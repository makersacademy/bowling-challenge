describe("Frame", function() {

  var frame;

  beforeEach(function() {
    frame = new Frame();
  });

  it("can have two rolls", function(){
    frame.roll1(3);
    frame.roll2(5);
    expect(frame.frameScore()).toEqual(8)
  });

  it("can have a strike", function(){
    frame.roll1(10);
    expect(frame.strike()).toEqual(true);
  });

  it("can have a spare", function(){
    frame.roll1(5);
    frame.roll2(5);
    expect(frame.spare()).toEqual(true)
  });

  it("can not have a strike", function(){
    frame.roll1(3);
    frame.roll2(4);
    expect(frame.strike()).toEqual(false);
  })

    it("can not have a spare", function(){
    frame.roll1(3);
    frame.roll2(4);
    expect(frame.spare()).toEqual(false);
  })

});
