describe("Frame", function() {
  var frame;

  beforeEach(function() {
    frame = new Frame();
  });

  it("starts with a bowl index of 1", function() {
    expect(frame.bowlIndex).toEqual(1);
  });

  describe("#bowl", function() {
    it("pushes the pins score into the bowls array", function() {
      frame.bowl(2);
      expect(frame.bowls).toContain(2);
    });
  });

});
