describe("Game", function(){
  var game, frame;

  beforeEach(function(){
    frame = new Frame;
    game = new Game;
    spyOn(game, 'createFrame').and.returnValue(frame);
    spyOn(frame, 'addScore');
    game.bowl(5);
  });

  it('creates a new frame when you bowl first ball', function(){
    expect(game.frames[0].addScore).toHaveBeenCalledWith(5);
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

  it('creates a new frame when the previous one is a strike', function(){
    frame["isStrike"] = true;
    game.bowl(4);
    expect(game.frames.length).toEqual(2);
  });

  describe("More complex game", function(){
    var game2, firstFrame, secondFrame;

    beforeEach(function(){
      firstFrame, secondFrame = new Frame;
      game2 = new Game;
      spyOn(game, 'createFrame').and.returnValues(firstFrame, secondFrame);
      spyOn(firstFrame, 'addScore');
      spyOn(secondFrame, 'addScore')
      game.bowl(5);
    });


  });

});
