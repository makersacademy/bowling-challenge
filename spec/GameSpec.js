describe("Game", function() {

  beforeEach(function() {
    game = new Game();
    frame = new Frame();
  });

  it('should store frames of the game', function(){
    game.newFrame(frame)
    expect(game.frames).toContain(frame)
  });

  it('throws error if more than 10 frames', function(){
    for(var i = 1; i < 11; i++ ) {
      game.newFrame(frame);
    }
    expect(function(){
      game.newFrame(frame);
    }).toThrowError('You done here yeah!');
  });

})
