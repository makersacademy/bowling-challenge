describe('Bowling', function(){

  beforeEach(function(){
    new_game = new Bowling();
  })

  it('addRoll adds to the total', function(){
    new_game.addRoll(6);
    expect(new_game.total).toEqual(6);
  })

  it('scoring a spare applies a bonus', function(){
    new_game.addRoll(6);
    new_game.addRoll(4);
    expect(new_game.bonus).toEqual(1);
  })

  it('scoring a spare means that your next roll is doubled', function(){
    new_game.addRoll(6);
    new_game.addRoll(4);
    new_game.addRoll(4);
    expect(new_game.total).toEqual(18);
  })

  it('a spares bonus only lasts for 1 round', function(){
    new_game.addRoll(6);
    new_game.addRoll(4);
    new_game.addRoll(4);
    expect(new_game.bonus).toEqual(0);
  })

  it('scoring a stike means you get 2 rounds of bonus scores', function(){
    new_game.addRoll(6);
    new_game.addRoll(3);
    new_game.addRoll(10);
    expect(new_game.bonus).toEqual(2);
  })

  it('scoring 2 strikes then a 5 gives you a total of 45', function(){
    new_game.addRoll(10);
    new_game.addRoll(10);
    new_game.addRoll(5);
    expect(new_game.total).toEqual(45);
  })

  it('scoring 3 strikes then 4 3s gives you a score of 81', function(){
    for (var i = 0; i < 3; i++) {
      new_game.addRoll(10);
    }
    for (var i = 0; i < 4; i++) {
      new_game.addRoll(3);
    }
    expect(new_game.total).toEqual(81);
  })

  it('gutter game gives you 0 points', function(){
    for (var i = 0; i < 20; i++) {
      new_game.addRoll(0);
    }
    expect(new_game.total).toEqual(0);
  })

  it('rolling after the game is over gives you an error', function(){
    for (var i = 0; i < 20; i++) {
      new_game.addRoll(0);
    }
    expect(function(){ new_game.addRoll(0); }).toThrowError('The game is over!');
  })

  it('rolling a full game of 5s gives you a score of 150', function(){
    for (var i = 0; i < 21; i++) {
      new_game.addRoll(5);
    }
    expect(new_game.total).toEqual(150);
  })

  it('perfect game is 300', function(){
    for (var i = 0; i < 12; i++) {
      new_game.addRoll(10);
    }
    expect(new_game.total).toEqual(300);
  })
  it('cant roll an extra strike after the perfect game', function(){
    for (var i = 0; i < 12; i++) {
      new_game.addRoll(10);
    }
    expect(function(){ new_game.addRoll(10); }).toThrowError('The game is over!');
  })
})
