describe("Frame", function(){
  var frame;

  beforeEach(function(){
    frame = new Frame();
  });

  it("Should record rolls", function(){
    frame.setRoll(1, 5);
    expect(frame.getRoll(1)).toEqual(5);
  })
})
