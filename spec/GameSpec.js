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

});
