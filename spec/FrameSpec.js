describe("Frame", function() {
  var frame;
  var frame2
  var game;

  beforeEach(function(){
    frame = new Frame();
    game = new Game();
  });



  it("checks if the result of the first roll is a Strike", function(){
    game.play()
    game.roll1(10);
    var frame = game.frames[0]
    expect(frame.isStrike).toBeTruthy();
  })


  it("checks if the sum of the result of the first roll and second roll is a Spare", function(){
    game.play()
    game.roll1(3);
    game.roll2(7);
    var frame = game.frames[0]
    expect(frame.isSpare).toBeTruthy();
  })

  it("calculates the total score of the two rolls", function(){
    game.play()
    game.roll1(3);
    game.roll2(4);
    var frame = game.frames[0]
    expect(frame.finalScore).toEqual(7);
  })



})
