describe('Game', function(){
  var game
  var frame

  beforeEach(function() {
    game = new Game();
    // game.addFrame(frame);
    frame = jasmine.createSpyObj('frame', [7,3,4]);
  });

  it('starts the game with an empty array', function(){
    expect(game.frames.length).toEqual(0);
  })

  it('counts the number of played frames', function(){
    game.addFrame(frame);
    console.log(game.frames)
    console.log(game.frameCount)
    expect(game.frameCount()).toEqual(1);
  })

  it('starts with a score of 0', function(){
    expect(game.score()).toEqual(0);
   })

  it('updates the score after a frame', function(){
    game.addFrame(frame)
    console.log(frame)
    console.log(game.score)
    expect(game.score()).toEqual(7);
  })

  // it('starts with a score of 0', function(){
  //   expect(game.score()).toEqual(0);
  // })
  //
  // it('returns the score of the first frame', function(){
  //   frame.bowlOne(7);
  //   frame.bowlTwo(2);
  //   frame.calculate();
  //   game.addFrame();
  //   expect(game.score()).toEqual(9);
  // })
  //
  // it('adds the score of the second frame to the game score', function(){
  //   game.score = 9
  //   frame.bowlOne(3);
  //   frame.bowlTwo(4);
  //   frame.calculate();
  //   game.addFrame();
  //   expect(game.score).toEqual(16);
  // })
  //
  // it('starts the game with an array of ten frames', function(){
  //   expect(game.frames.length).toEqual(10);
  // })
  //
  // it('adds a frame to the game once complete', function(){
  //   frame.bowlOne(3);
  //   frame.bowlTwo(4);
  //   game.addFrame();
  //   console.log(game.frames)
  //   expect(game.frames).toEqual(0)
  // })
  //
  // it('returns current frame', function(){
  //   frame.bowlOne(3);
  //   console.log(frame)
  //   console.log(game.currentFrame)
  //   expect(game.currentFrame()).toEqual([])
  // })
})
