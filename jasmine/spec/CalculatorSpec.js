describe("Calculator", function() {

  beforeEach(function() {
    calculator = new Calculator([[1, 4], [9, 1], [10, 0], [3, 6], [10, 0], [10, 0], [7, 2], [4, 5], [2, 2], [10, 10, 10]]);
  })

  it("if a player doesn't bowl a strike or a spare, the score for the frame is the sum of the two rolls", function() {
    expect(calculator.normalScore(calculator._frames[0])).toEqual(5);
  })

  it("if a player bowls a spare, the score for that frame includes the next roll as a bonus", function() {
    expect(calculator.spareScore(calculator._frames[1], calculator._frames[2])).toEqual(20);
  })

  it("if a player bowls a strike, they get the next two rolls as a bonus score if the next roll is NOT a strike", function() {
    expect(calculator.strikeScore(calculator._frames[2], calculator._frames[3])).toEqual(19);
  })

  it("if a player bowls a strike, they get the next two rolls as a bonus, even if the next roll is a strike", function() {
    expect(calculator.strikeScore(calculator._frames[4], calculator._frames[5], calculator._frames[6])).toEqual(27);
  })

  it("a user can enter the results from a whole game and see the final score", function() {
    expect(calculator.classify()).toEqual(151);
  });

});
