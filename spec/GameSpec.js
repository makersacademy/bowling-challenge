describe("Game", function(){
  var game, frame, game2;

  beforeEach(function(){
    frame = new Frame;
    frame2 = new Frame;
    game = new Game;
    game2 = new Game;
    spyOn(game, 'createFrame').and.returnValues(frame, frame2);
    spyOn(game2, 'createFrame').and.returnValues(frame);
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
    game.bowl(4);
    expect(frame.addScore).toHaveBeenCalledWith(4);
    expect(frame2.addScore).toHaveBeenCalledWith(4);
  });

  it('calculates the score at a current point in the game', function(){
    frame["score"] = 23;
    frame2["score"] = 12;
    frame["isComplete"] = true;
    game.bowl(4);
    expect(game.currentScore()).toEqual(35);
  });

  it('only creates 10 frames', function(){
    frame["score"] = 15;
    frame["isComplete"] = true;
    for (var i = 0; i < 10; i++){
      game2.frames.push(frame)
    }
    expect(game2.isOver()).toBe(true);
  });

});
