describe('Game',function(){

  var game;
  var frame;

  beforeEach(function(){
    frameClass = jasmine.createSpy('frameClass')
    frame = new frameClass
    game = new Game(frameClass);
  });

  describe('Frames', function(){
    it('can add a frame',function(){
      game.addFrame()
      expect(game.frames).toContain(frame)
    });
    it('can only have ten frames',function(){
      for(i=0;i<11;i++) {
        game.addFrame();
      };
      expect(game.frames.length).toEqual(10)
    });
    it('starts with 10 frames',function(){
      expect(game.frames.length).toEqual(10)
    });
  })

  it('initialises with game score of 0', function() {
    expect(game.score).toEqual(0)
  })

  it('initialises with current frame as 0', function() {
    expect(game.currentFrame).toEqual(0)
  })

  // it('stores the number of pins scored on the first roll', function() {
  //   game.roll(2);
  //   jasmine.createSpyObj(frame,['saveRoll'])
  //   expect(frame1.saveRoll).toHaveBeenCalled()
  // });

  // it('stores the number of pins scored on the second roll', function() {
  //   game.addFrame();
  //   game.roll(3);
  //   game.roll(4);
  //   expect(game.frames[0].secondroll).toEqual(4)
  // });

  // describe('#calculate',function(){
  //   it('should return the total score', function(){
  //     game.calculate()
  //     expect(game.score)
  //   })
  // })
});
