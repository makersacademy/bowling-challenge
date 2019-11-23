describe ('Game', function(){

  var game;

  beforeEach(function(){
    game = new Game();
  });

  it ('can calculate a gutter game', function(){
    rollMany(20, 0);
    expect(game.score()).toBe(0)
  });


  function rollMany(rolls, pins){
     for(var i = 0; i < rolls; i ++) {
       game.roll(pins)
     };
   };
 });
