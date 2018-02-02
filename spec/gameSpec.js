describe('Game', function() {

  var game;

  beforeEach(function() {
    game = new Game
    frame = jasmine.createSpyObj('frame',['score'])
  });

  it('starts with an empty set of frames', function(){
    expect(game.getFrames()).toEqual([]);
  });

  it('can add a frame', function(){
    game.addFrame(frame)
    expect(game.getFrames()).toContain(frame)
  });

  it('can add up frame scores', function(){
    for (let i = 0; i < 10; i++) {
      game.addFrame(frame)
    }
    frame.score.and.returnValue(1);
    expect(game.score()).toEqual(10);
  });

});