describe("Frame", function() {

  it("initializes each frame with a shots array", function(){
    spyOn(Math, "random").and.returnValue(0.5);
    frame = new Frame;
    expect(frame.shots).toEqual([5, 3])
  });

  it("shoots second shot if first was not a strike", function(){
    spyOn(Math, "random").and.returnValue(0.5)
    frame = new Frame;
    expect(frame.shots).toEqual([5, 3]);
  })

});
