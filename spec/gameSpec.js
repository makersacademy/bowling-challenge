describe ('Game',function(){

  var game;
  var frame;

  beforeEach(function(){
    game = new Game();
    frame = new Frame();
  });

  it('Reports a gutter game',function(){
    game.gameScore = 0
    expect(game.isGutter()).toBe (true)
  });

  it('Keeps a running tab of each frame', function(){
    spyOn(Math, 'random').and.returnValue(10/10);
    game.Bowl();
    expect(game.frames).toEqual ([[10,0]])
  });



});
