describe('Game', function() {
  var game;
  var frame;

  beforeEach(function() {
    game = new Game();
    frame = new Frame()
    // ('frame',['firstRoll', 'secondRoll', 'getTotalScore']);
  
  })

  it('starts at 0 score', function(){
    expect(game.getCurrentScore()).toEqual(0);

  })

  it('starts at 1 frame', function(){
    expect(game.getCurrentFrame()).toEqual(1)

  })

  it('increases 0.5 framecount per bowl', function(){
    game.bowl();
    expect(game.getCurrentFrame()).toEqual(1.5)

  })

  it('adds to total gamescore after frame is finished', function(){
    // spyOn(frame, 'firstRoll').and.returnValue(5)
    // spyOn(frame, 'secondRoll').and.returnValue(0)
    // expect(game.getCurrentScore()).toEqual(5)

  })


  // it('adds random number from 0-10 to score per bowl', function(){
  //   spyOn(game,'knockdown').and.returnValue(5)
  //   // this line needs to be before
  //   game.bowl()
  //   expect(game.getCurrentScore()).toEqual(5)
  // })

  // it('adds cumulatively knockdowns for one frame', function(){
  //   spyOn(game,'knockdown').and.returnValue(5)
  //   game.bowl()
  //   game.bowl()
  //   expect(game.getCurrentScore()).toEqual(10)
  // })




// frame stuff


// spare
  // it('has a score of the frame', function(){
  //   spyOn(game,'knockdown').and.returnValue(4)
  //   spyOn(frame,'score').and.returnValue(8)
  //   game.bowl()
  //   game.bowl()

  //   expect(frame.score).toEqual(8)
  // })




})