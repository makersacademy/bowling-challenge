describe ('Game', function(){

  var game;

  beforeEach(function(){
    game = new Game();
  });

  it ('calculates a gutter game', function(){
    rollMany(20, 0);
    expect(game.score()).toBe(0)
  });

  it ('can roll all ones', function(){
    rollMany(20, 1);
    expect(game.score()).toBe(20);
  });



  function rollMany(rolls, pins){
     for(var i = 0; i < rolls; i ++) {
       game.roll(pins)
     };
   };

   function rollSpare(){
     game.roll(5);
     game.roll(5);
   };
 });
