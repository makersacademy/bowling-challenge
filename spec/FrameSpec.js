describe("Frame", function(){

  var frame;

  beforeEach(function(){
    frame = new Frame();
  })

  it("saves the result of two rolls", function(){
    expect(frame.rollOne).toEqual(0-10);
  })

})
