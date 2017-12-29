describe("frame", function() {
  it("it should be able record the two bowls", function() {
    var frame = new Frame(1);
    frame.bowl(3,4);
    expect(frame.getScore()).toEqual([3,4]);
  });
});
