describe('Game', () => {
  var game;
  var frame;

  beforeEach(() => {
    game = new Game();
    frame = new Frame();
  });

  it('can get a new frame', () => {
    game.getFrame();
    expect(game.frames.length).toBe(2);
  });

  it('allows player to take turns', () => {
    game.takeTurn()
    expect(game.frames[0].turnOne).toBeGreaterThan(0);
      
  });

  it('is able to get score for each frame', () => {
    game.getFrame();
    game.frames[0].turnOne = 2;
    game.frames[0].turnTwo = 5;
    game.countScore(game.frames[0])
    expect(game.frames[0].score).toBe(7);
  });

  it('creates new frame only if last turn is complete', () => {
    spyOn(Math, 'random').and.returnValue(5);
    game.takeTurn();
    game.takeTurn();
    game.takeTurn();
    expect(game.frames.length).toBe(2)
  });


  it('creates new frame when player gets strike', () => {
    spyOn(Math, 'random').and.returnValue(10);
    game.takeTurn();
    game.takeTurn();
    expect(game.frames.length).toBe(2)
  });

  it('has max 10 frames', () => {
    spyOn(Math, 'random').and.returnValue(10);
    let i = 0
    while(i <= 10){ game.takeTurn(); i++ }
    expect(function(){ game.takeTurn() }).toThrowError('10 frames complete start new game');
  });

});