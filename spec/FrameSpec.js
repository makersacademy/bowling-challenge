describe("Frame", function() {
  var frame;

  beforeEach(function(){
    frame = new Frame();
  });

  it("shows the number of down pins after the first roll", function(){
    var downPins = 3;
    frame.roll1(downPins);
    expect(frame.scoreRoll1).toEqual(3);
  });

})
