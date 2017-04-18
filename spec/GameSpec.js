describe ('Game', function(){

  var game;

  beforeEach(function(){
    spyFrame = jasmine.createSpyObj('spyFrame', ['isComplete', 'roll', 'score', 'isSpare', 'isStrike']);
    game = new Game();
  })

  it ('should be initialized with an empty frames array', function(){
    expect(game._frames).toEqual([]);
  });

  it ('should have a currentFrameIndex property of -1', function(){
    expect(game.currentFrameIndex).toEqual(-1);
  });


  describe ('addFrame', function(){

    it ('should add a frame to the _frames array', function(){
      game.addFrame(spyFrame);
      expect(game._frames).toContain(spyFrame);
    });

    it ('should increment the current Frame by one ', function(){
      game.addFrame(spyFrame);
      expect(game.currentFrameIndex).toEqual(0);
    });

    it ('should return "Game Over" if the number of frames is greater than 10', function(){
      for (i = 0; i < 10; i++){
        game.addFrame(spyFrame);
      }
      expect(game.addFrame(spyFrame)).toEqual("Game Over");
    });

  });


  describe ('roll', function(){

    var pins = 5;

    it ('should check if the current frame is complete', function(){
      game.addFrame(spyFrame);
      game.roll(pins);
      expect(spyFrame.isComplete).toHaveBeenCalled();
    });

    it ('should add another frame if the current frame is complete', function(){
      spyFrame.isComplete.and.returnValue(true);
      game.addFrame(spyFrame);
      game.roll(pins);
      expect(game._frames.length).toEqual(2);
    });

    it ('should call the roll function on the current frame if it is not complete', function(){
      spyFrame.isComplete.and.returnValue(false);
      game.addFrame(spyFrame);
      game.roll(pins);
      expect(spyFrame.roll).toHaveBeenCalledWith(pins);
    });

    it ('should add a FinalFrame if its the last frame of the game', function(){
      spyFrame.isComplete.and.returnValue(true);
      for (i = 0; i < 9; i++) {
      game.addFrame(spyFrame);
      }
      game.roll(pins)
      lastFrame = game._frames[(game._frames.length) - 1]
      expect(lastFrame._rollThree).toBeDefined();
    });

  });

  describe ('score', function(){

    it ('returns the scores of the frames played', function(){
      spyFrame.score.and.returnValue(6);
      for (i = 0; i < 5; i++) {
        game.addFrame(spyFrame);
      }
      expect(game.score()).toEqual(30);
    });


  });





});
