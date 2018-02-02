describe('Game', function() {

  var game;

  beforeEach(function() {
    game = new Game
    frame = jasmine.createSpy('frame')
  });

  it('starts with an empty set of frames', function(){
    expect(game.getFrames()).toEqual([]);
  });

  it('can add a frame', function(){
    game.addFrame(frame)
    expect(game.getFrames()).toContain(frame)
  })

});