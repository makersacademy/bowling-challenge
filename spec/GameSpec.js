describe("Game", function(){
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
    var frame = game.frames[0]
    expect(frame.scoreRoll1).toEqual(3);
  });

  it("shows the number of down pins after the second roll", function(){

    game.play()
    game.roll1(2)
    game.roll2(5);
    var frame = game.frames[0]

    expect(frame.scoreRoll2).toEqual(5);
  });

  it("creates a new frame", function(){
    game.play();
    expect(game.frames.length).toEqual(10);
  })

  it("calculates strike bonus", function(){
    game.play();
    game.roll1(10)
    game.roll1(4)
    game.roll2(4)
    var frame = game.frames[0]
    expect(frame.finalScore).toEqual(18);
  })

  it("calculates spare bonus", function(){
    game.play();
    game.roll1(5)
    game.roll2(5)
    game.roll1(4)
    game.roll2(4)
    var frame = game.frames[0]
    expect(frame.finalScore).toEqual(14);
  })
})
