describe("Frame", function() {
  var frame;

  beforeEach(function() {
    frame = new Frame();
  })

  it("Starts with 10 pins", function() {
    expect(frame.standingPins).toEqual(10)
  })

  it("Is not over at the point of initialisation", function() {
    expect(frame.isOver()).toBe(false)
  })

  it("Ends after 2 consecutive rolls", function() {
    frame.updateFrame(5)
    frame.updateFrame(5)
    expect(frame.isOver()).toBe(true)
  })

  it("Ends after a strike", function() {
    frame.updateFrame(10)
    expect(frame.isOver()).toBe(true)
  })


})
