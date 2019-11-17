describe("Calculator", function() {

  beforeEach(function() {
    calculator = new Calculator([[1, 4], [9, 1], [10, 0], [3, 6], [10, 0], [10, 0], [10, 0]]);
  })

  it("if a player doesn't bowl a strike or a spare, the score for the frame is the sum of the two rolls", function() {
    expect(calculator.normalScore(calculator._frames[0])).toEqual(5);
  })

  it("if a player bowls a spare, the score for that frame includes the next roll as a bonus", function() {
    expect(calculator.spareScore(calculator._frames[1], calculator._frames[2])).toEqual(20);
  })

});
