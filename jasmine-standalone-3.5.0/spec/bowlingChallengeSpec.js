describe('bowlingRules',function(){
  var game;

  beforeEach(function() {
    game = new BowlingGame();
  })

  it('should return 0 for a game of all zeros',function(){
    rollMany(0,20)
    expect(game.score).toEqual(0)
  });
  
  it('should return 20 for a game of all ones',function(){
    rollMany(1,20)
    expect(game.score).toEqual(20)
  });

  function rollMany(pins, rolls) {
    for (let loopcounter = 0; loopcounter < rolls; loopcounter++) {
      game.roll(pins);
    }
  }

});

  
  

