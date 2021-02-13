describe("Frame", function() {
  let frame;

  beforeEach(function() {
    frame = new Frame(3);
  })

  it("knows which number frame it is", function() {
    expect(frame.number).toEqual(3)
  })

  it("can have rolls added to it", function() {
    frame.add_roll(3)
    expect(frame.rolls).toContain(3)
  })

})
