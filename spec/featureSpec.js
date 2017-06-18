describe("Bowling", function(){

  var game;

  beforeEach(function(){
    game = new Game();
    frame = new Frame(1,1);
    strike = new Frame(10);
    spare = new Frame(5,5);
    gutter = new Frame(0,0);
    finalFrameStrike = new FinalFrame(10,10,10);
    finalFrameSpare = new FinalFrame(5,5,5);
    finalFrameDutch = new FinalFrame(10,5,5);
  });

  it("Has a score of 0 by default", function(){
    expect(game.getTotalScore()).toEqual(0);
  });

  it("Starting a frame logs a new frame", function(){
    game.addFrame(frame);
    expect(game.getPlayedFrames()[0]).not.toBe(undefined);
  });

  it("Total score is calculated by the sum of each frames score", function(){
    game.addFrame(frame);
    expect(game.getTotalScore()).toEqual(game.getPlayedFrames()[0].getScore());
  });

  it("Won't add a new frame if it is created with an illegal score", function(){
    expect(function() { game.addFrame(new Frame(6, 6)) }).toThrow(new Error("Illegal Score: Can't be greater than 10"))
    expect(game.playedFrames.length).toEqual(0)
  });

  it("Can play a perfect game", function(){
    for(i = 0; i < 9 ; i ++) {
      game.addFrame(strike)
    }
      game.addFrame(finalFrameStrike)
    expect(game.getTotalScore()).toEqual(300);
  })

  it("Can play an all spare game", function(){
    for(i = 0; i < 9 ; i ++) {
      game.addFrame(spare)
    }
      game.addFrame(finalFrameSpare)
    expect(game.getTotalScore()).toEqual(150);
  })

  it("Can play a dutch 200 game", function(){
    for(i = 0; i < 4 ; i ++) {
      game.addFrame(spare)
      game.addFrame(strike)
    }
      game.addFrame(spare)
      game.addFrame(finalFrameDutch)
    expect(game.getTotalScore()).toEqual(200);
  })


});
