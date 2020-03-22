describe ('Game', function(){

  var game;

  beforeEach(function() {
    game = new Game();
  });

  it ('can keep score of one roll', function() {
    game.roll(3);
    rollMany(19, 0);
    expect(game.currentScore()).toEqual(3);
  });

  it ('tests for guttergame (0 score from 20 rolls)', function(){
    rollMany(20, 0)
    expect(game.currentScore()).toEqual(0);
  });

  it ('tests for all fours', function(){
    rollMany(20, 4)
    expect(game.currentScore()).toEqual(80);
  });

  it ('tests for a spare', function (){
    game.roll(5);
    game.roll(5);
    game.roll(2);
    rollMany(17, 0);
    expect(game.currentScore()).toEqual(14)
  })


  function rollMany(x, pins) {
    for (var i = 0; i < x; i ++) {
      game.roll(pins)};
  };

});