describe('Game', function(){

  let game;

  beforeEach(function(){
    game = new Game();
  });


  it('is a Gutter game - total score of 0', function(){
    for(var i = 1; i <=20; i++){
      game.roll(0)
    }
    expect(game.score()).toEqual(0);
  });


//------------------------------------------------------


  it('is gives the score from wikipedia example - total score of 133', function(){
    game.roll(1);
    game.roll(4);

    game.roll(4);
    game.roll(5);

    game.roll(6);
    game.roll(4);

    game.roll(5);
    game.roll(5);

    game.roll(10);

    game.roll(0);
    game.roll(1);

    game.roll(7);
    game.roll(3);

    game.roll(6);
    game.roll(4);

    game.roll(10);

    game.roll(2);
    game.roll(8);
    game.roll(6);
    expect(game.score()).toEqual(133);
  });

//--------------------------------------------------
 
  it('is gives the correct random game score - total score of 87', function(){
    
    game.roll(2);
    game.roll(8);
    //12
    game.roll(2);
    game.roll(2);
    //16
    game.roll(10);
    //34
    game.roll(2);
    game.roll(6);
    //42
    game.roll(5);
    game.roll(3);
    //50
    game.roll(4);
    game.roll(3);
    //57
    game.roll(6);
    game.roll(4);
    //68
    game.roll(1);
    game.roll(0);
    //69
    game.roll(8);
    game.roll(1);
    //78
    game.roll(6);
    game.roll(3);
    //87
    expect(game.score()).toEqual(87);
  });


//------------------------------------------------------

it('is a Perfect game - total score of 300', function(){

  for(var i = 1; i <=12; i++){
    game.roll(10)
  }
  expect(game.score()).toEqual(300);
});


});