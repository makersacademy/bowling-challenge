describe("Game", function(){
  var game;
  var frame;
  beforeEach(function(){
    frame = new Frame;
    game = new Game;
    spyOn(game, 'createFrame').and.returnValue(frame);
    spyOn(frame, 'addScore');
    game.bowl(5);
  });

  it('creates a new frame when you bowl first ball', function(){
    expect(game.frames[0].addScore).toHaveBeenCalledWith(5);
  });

  it('doesn\'t create a new frame until the previous frame is complete', function(){

  });

});
