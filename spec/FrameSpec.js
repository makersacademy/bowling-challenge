describe("Frame", function() {
  var frame;

  beforeEach(function(){
    frame = new Frame();
  });

  it("Creates an incomplete frame", function(){
    expect(frame.isComplete).toBe(false);
  })

  it("Takes the result of the first roll", function(){
    frame.addScore(5);
    expect(frame.firstRoll).toEqual(5);
  });

  it("Takes the result of the second roll", function(){
    frame.addScore(5);
    frame.addScore(6);
    expect(frame.secondRoll).toEqual(6);
  });

});
