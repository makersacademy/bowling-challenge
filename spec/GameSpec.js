describe('Game', function(){

  let game;

  beforeEach(function(){
    game = new Game();
  });

  it('keeps track of correct number of frames', function(){
    game.roll(2);
    game.roll(4);
    game.roll(10);
    game.roll(3);
    expect(game.frameNumber()).toEqual(3);
  })



});