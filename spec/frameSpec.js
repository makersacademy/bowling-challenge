describe("Frame", function() {

  var frame;

  beforeEach(function() {
    frame = new Frame();
    role = new Role();
  });

  it("should be initialized with undefined number", function () {
    expect(frame.number).toEqual(undefined);
  });

  it("has functionality to add roles", function() {
    frame.add(role);
    expect(frame.roles[0]).toEqual(role);
  });
});
