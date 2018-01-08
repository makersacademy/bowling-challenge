describe("Game", function() {
  var game;
  var frame;

  beforeEach(function(){
    game = new Game();
    frame = new Frame();
  });

  it("shows the number of down pins after the first roll", function(){
    var downPins = 3;
    game.play()
    game.roll1(downPins);
    var frame = game.frames[0];

    expect(frame.scoreRoll1).toEqual(3);
  });

  it("shows the number of down pins after the second roll", function(){
    game.play();
    game.roll1(2);
    game.roll2(5);
    var frame = game.frames[0];

    expect(frame.scoreRoll2).toEqual(5);
  });

  it("creates a new frame", function(){
    game.play();

    expect(game.frames.length).toEqual(10);
  })

  it("calculates strike bonus", function(){
    game.play();
    game.roll1(10);
    game.roll1(10);
    game.roll1(4);
    var frame = game.frames[0];

    expect(frame.finalScore).toEqual(20);
  })

  it("calculates spare bonus", function(){
    game.play();
    game.roll1(5);
    game.roll2(5);
    game.roll1(4);
    game.roll2(4);
    var frame = game.frames[0];

    expect(frame.finalScore).toEqual(14);
  })

  it("trows an error if the sum of down pins roll1 and down pins roll2 is greater than 10", function(){
    game.play();
    game.roll1(5);

    expect(function() {
      game.roll2(6);
    }).toThrowError("Number is not valid, insert a number <= 5");
  })

  it("checks if there is an extra roll when in the last frame there are 2 consecutively strikes", function(){
    game.play();
    game.frames.forEach(function(frame) {
      game.roll1(10);
    })
    game.extraRoll1(10);
    game.extraRoll2(10);
    game.calculateBonusLastFrame();

    expect(game.lastFrameScore).toEqual(30)
  })

  it("should calculate the total score", function(){
    game.play();

    game.roll1(10);
    game.roll1(10);
    game.roll1(10);
    game.roll1(10);
    game.roll1(10);
    game.roll1(10);
    game.roll1(10);
    game.roll1(10);
    game.roll1(10);
    game.roll1(10);

    game.extraRoll1(10);
    game.extraRoll2(10);
    game.calculateBonusLastFrame();
    game.calculateTotalScore();
    expect(game.totalScore).toEqual(210)


  })

})
