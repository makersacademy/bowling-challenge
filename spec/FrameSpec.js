describe("Frame", function() {
  var frame;
  var frame2
  var game;

  beforeEach(function(){
    frame = new Frame();
    game = new Game();
  });

  it("shows the number of down pins after the first roll", function(){
    var downPins = 3;
    frame.roll1(downPins);
    expect(frame.scoreRoll1).toEqual(3);
  });

  it("checks if the result of the first roll is a Strike", function(){
    frame.roll1(10);
    expect(frame.isStrike).toBeTruthy();
  })

  it("shows the number of down pins after the second roll", function(){
    var downPins = 7;
    frame.roll2(downPins);
    expect(frame.scoreRoll2).toEqual(7);
  });

  it("checks if the sum of the result of the first roll and second roll is a Spare", function(){
    frame.roll1(3);
    frame.roll2(7);
    expect(frame.isSpare).toBeTruthy();
  })

  it("calculates the total score of the two rolls", function(){
    frame.roll1(3);
    frame.roll2(4);
    frame.getScoreRolls();
    expect(frame.scoreRolls).toEqual(7);
  })

})
