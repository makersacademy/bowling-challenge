describe("Roll", function() {
  it("A roll records a score for the frame", function() {
    roll = new Roll(3,1);
    frame = new Frame();
    $(document).ready(function() {
      $('#roll').click();
    });
    expect(frame._pinScore).toEqual(3);
  });
});
