describe('Game', function(){
  var game;

  beforeEach(function(){
    game = new Game();
  });

  it('plays a gutter game', function(){
    rollMany(20, 0);
    expect(game.score()).toBe(0);
  });

  it('scores 1 in each roll totalling a score of 20', function(){
    rollMany(20, 1);
    expect(game.score()).toBe(20);
  });

  it('scores a spare correctly', function(){
    rollSpare();
    game.roll(2);
    rollMany(17, 0);
    expect(game.score()).toBe(14);
  });

  it('scores a strike correctly', function(){
    rollStrike();
    game.roll(3);
    game.roll(4);
    rollMany(16, 0);
    expect(game.score()).toBe(24);
  });

  it('scores the perfect game', function(){
    rollMany(12, 10);
    expect(game.score()).toBe(300);
  });

  function rollMany(rolls, pins){
    for(var count = 0; count < rolls; count++){
      game.roll(pins);
    }
  }

  function rollSpare() {
    game.roll(5);
    game.roll(5);
  }

  function rollStrike() {
    game.roll(10);
  }
});
