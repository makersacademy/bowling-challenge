describe('Game', function() {

  var game;

  beforeEach(function() {
    game = new Game
    spyframe = jasmine.createSpyObj('spyframe',['score'])
  });

  it('starts with an empty set of frames', function(){
    expect(game.getFrames()).toEqual([]);
  });

  it('can add a frame', function(){
    game.addFrame(spyframe)
    expect(game.getFrames()).toContain(spyframe)
  });

  it('a 10-frame game is scored correctly', function(){
    for (let i = 0; i < 10; i++) {
      game.addFrame(new Frame([3,4]))
    }
    expect(game.score()).toEqual(70);
  });

  it('a spare has bonus points added correctly', function(){
    game.addFrame(new Frame([3,7]))
    game.addFrame(new Frame([3,4]))
    expect(game.score()).toEqual(20);
    // should equal 10 + 3 + 7
  });
});
