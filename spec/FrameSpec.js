describe("Frame", function() {
  var frame;

  beforeEach(function() {
    frame = new Frame();
  });

  it("starts with a bowl index of 1", function() {
    expect(frame.bowlIndex).toEqual(1);
  });

  describe("#bowl", function() {

    beforeEach(function() {
      frame.bowl(2);
    });

    it("pushes the pins score into the bowls array", function() {
      expect(frame.bowls).toContain(2);
    });

    it("increases the bowl index by 1", function() {
      expect(frame.bowlIndex).toEqual(2)
    });
  });

});
