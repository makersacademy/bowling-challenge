describe('Game',function(){

  var game;
  var frame;

  beforeEach(function(){
    frame = jasmine.createSpyObj('frame',['firstroll','secondroll','isComplete','saveRoll'])
    game = new Game(frame);
  });

  it('can add a frame',function(){
    game.addFrame(frame)
    expect(game.frames).toContain(frame)
  });

  it('can only have ten frames',function(){
    for(i=0;i<11;i++) {
      game.addFrame(frame);
    };
    expect(game.frames.length).toEqual(10)
  });

  describe('#start',function(){
    it('loads the game with 10 frames',function(){
      game.start()
      expect(game.frames.length).toEqual(10)
    });
  })

  it('initialises with game score of 0', function() {
    expect(game.score).toEqual(0)
  })

  it('initialises with current frame as 0', function() {
    expect(game.currentFrame).toEqual(0)
  })

  it('stores the number of pins scored on the first roll', function() {
    game.start()
    game.roll(2);
    expect(game.frames[0].saveRoll).toHaveBeenCalled()
  });

  it('stores the number of pins scored on the second roll', function() {
    game.start();
    game.roll(3);
    game.roll(4);
    expect(game.frames[0].saveRoll).toHaveBeenCalledTimes(2)
  });

  describe('#calculate',function(){
    it('should return the total score when it has all numbers', function(){
      game.start()
      frame.firstroll.and.returnValue(3)
      frame.secondroll.and.returnValue(3)
      frame.isComplete.and.returnValue(true)
      game.calculate()
      expect(game.calculate()).toBe(60)
    })
    it('should return the total score when it has all numbers', function(){
      game.start()
      frame.firstroll.and.returnValue(3)
      frame.secondroll.and.returnValue(4)
      frame.isComplete.and.returnValue(true)
      game.calculate()
      expect(game.calculate()).toBe(70)
    })
  })
});
