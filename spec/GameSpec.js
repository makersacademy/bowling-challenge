describe("Game", function(){
  var game, frame;

  beforeEach(function(){
    frame = new Frame;
    game = new Game;
    frame2 = new Frame;
    spyOn(game, 'createFrame').and.returnValues(frame, frame2);
    spyOn(frame, 'addScore');
    spyOn(frame2, 'addScore');
    game.bowl(5);
  });

  it('creates a new frame when you bowl first ball', function(){
    expect(frame.addScore).toHaveBeenCalledWith(5);
  });

  it('doesn\'t create a new frame until the previous frame is complete', function(){
    frame["isComplete"] = false;
    game.bowl(4);
    expect(game.frames.length).toEqual(1);
  });

  it('creates a new frame when the previous one is complete', function(){
    frame["isComplete"] = true;
    game.bowl(4);
    expect(game.frames.length).toEqual(2);
  });

  it('sends the bonus balls to those that need them', function(){
    frame["isComplete"] = true;
    console.log(frame.score);
    game.bowl(4);
    console.log(game.frames);
    expect(frame.addScore).toHaveBeenCalledWith(4);
    expect(frame2.addScore).toHaveBeenCalledWith(4);
  });

  // describe("More complex game", function(){
  //   var game2, firstFrame, secondFrame;
  //
  //   beforeEach(function(){
  //     firstFrame, secondFrame = new Frame;
  //     game2 = new Game;
  //     spyOn(game, 'createFrame').and.returnValues(firstFrame, secondFrame);
  //     spyOn(firstFrame, 'addScore');
  //     spyOn(secondFrame, 'addScore')
  //     game2.bowl(5);
  //   });
  //
  //   it("Adds bonus balls to those that need them", function(){
  //     game2.bowl(7)
  //   });
  //
  //
  // });

});
