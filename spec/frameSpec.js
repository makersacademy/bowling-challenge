describe("Frame", function() {

  it("Can play a frame and persist score", function() {
    frame = new Frame();
    frame.add_bowl(3);
    frame.add_bowl(3);
    expect(frame.bowled).toEqual([3,3]);
  });

  it("Can play a frame and persist a diff score", function() {
    frame = new Frame();
    frame.add_bowl(2);
    frame.add_bowl(7);
    expect(frame.bowled).toEqual([2,7]);
  });

  it("Can tell a spare", function() {
    frame = new Frame();
    frame.add_bowl(5);
    frame.add_bowl(5);
    expect(frame.result()).toContain("Spare!");

    frame = new Frame();
    frame.add_bowl(6);
    frame.add_bowl(4);
    expect(frame.result()).toContain("Spare!");
  });

  it("Can tell a strike", function() {
    frame = new Frame();
    frame.add_bowl(10);
    frame.add_bowl(0);
    expect(frame.result()).toEqual('Strike!');
  });

  it("Can tell if no spare", function() {
    frame = new Frame();
    frame.add_bowl(4);
    frame.add_bowl(4);
    expect(frame.result()).toBeNull();

    frame = new Frame();
    frame.add_bowl(0);
    frame.add_bowl(9);
    expect(frame.result()).toBeNull();
  });

  it("returns an error if i bowl too many times", function() {
    frame = new Frame();
    frame.add_bowl(10);
    frame.add_bowl(0);
    expect(function() {
      frame.add_bowl(2)
    }).toThrowError("You've bowled twice already this frame!");
  });

});
