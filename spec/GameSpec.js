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

  it('calculate the correct score', function(){
    game.roll(2);
    game.roll(4);
    game.roll(6);
    game.roll(3);
    game.roll(2);
    game.roll(1);
    expect(game.score()).toEqual(18);
  })

  it('calculates correct score for a strike', function(){
    game.roll(2);
    game.roll(5);
    game.roll(10);
    game.roll(4);
    game.roll(5);
    expect(game.score()).toEqual(35);
  });

  it('calculates correct score for a strike', function(){
    game.roll(10);
    game.roll(10);
    game.roll(5);
    game.roll(4);
    game.roll(5);
    expect(game.score()).toEqual(58);
  });

  it('calculates correct score for a strike', function(){
    game.roll(10);
    game.roll(10);
    game.roll(10);
    game.roll(9);
    game.roll(1);
    expect(game.score()).toEqual(89);
  });

  it('calclulate the correct score if there is a spare', function(){
    game.roll(4);
    game.roll(3);
    game.roll(7);
    game.roll(3);
    game.roll(5);
    game.roll(3);
    expect(game.score()).toEqual(30);
  })



});