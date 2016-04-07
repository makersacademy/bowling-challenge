describe('Game',function(){

  var game;
  var frame;

  beforeEach(function(){
    frame = new jasmine.createSpy('Frame',['secondroll'])
    game = new Game(frame);
  });

  // it('should have an array of 10 frames',function(){
  //   expect(game.frames.length).toEqual(10)
  // });

  it('can add a frame',function(){
    game.addFrame()
    expect(game.frames).toContain(new frame())
  });

  it('can only have ten frames',function(){
    for(i=0;i<11;i++) {
      game.addFrame();
    };
    expect(game.frames.length).toEqual(10)
  });

  it('stores the number of pins scored on the first roll', function() {
    game.addFrame();
    game.roll(3);
    expect(game.frames[0].firstroll).toEqual(3)
  });

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
