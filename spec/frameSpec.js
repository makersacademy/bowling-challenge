describe("Frame", function() {

  var frame;

  beforeEach(function() {
    frame = new Frame();
    role1 = new Role();
    role2 = new Role();
    role1.addPoints(3);
    role2.addPoints(5);
  });

  it("should be initialized with undefined number", function () {
    expect(frame.number).toEqual(undefined);
  });

  it("has functionality to add roles", function() {
    frame.add(role1);
    expect(frame.roles[0]).toEqual(role1);
  });

  it("should have functionality to calculate the score of the frame", function () {
    frame.add(role1);
    frame.add(role2);
    frame.calculateScore()
    console.log(frame);
    expect(frame.score).toEqual(8);
  });
});
