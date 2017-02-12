describe("Frame", function() {
  var frame;

  beforeEach(function() {
    frame = new Frame();
  });

  it("exists", function() {
    expect(function(){new Frame()}).not.toThrow();
  });


});
