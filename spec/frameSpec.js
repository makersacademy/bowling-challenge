describe("Frame", function() {

  var frame;

  beforeEach(function() {
    frame = new Frame();
    role = new Role();
  });

  it("has functionality to add roles", function() {
    frame.add(role);
    expect(frame.roles[0]).toEqual(role);
  });
});
