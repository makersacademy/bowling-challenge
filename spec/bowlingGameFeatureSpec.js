describe ('Bowling Game', function(){

  beforeEach(function(){
    game = new Game();
  })

  function rollMany(n, pins) {
    for (var i = 0; i < n; i++) {
        game.roll(pins)
    };
  };

  function rollSpare(){
    game.roll(5)
    game.roll(5)
  }

  function rollStrike(){
    game.roll(10)
  }

  it ('should return a score of zero when there is a gutter game', function(){
    rollMany(20, 0)
    expect(game.score()).toEqual(0);
  });

  it ('should return a score of 20 when 1 pin is knocked down each roll', function(){
    rollMany(20, 1)
    expect(game.score()).toEqual(20);
  })

  it ('should be able to calculate the score when there are spares', function(){
    rollSpare()
    rollMany(18, 1)
    expect(game.score()).toEqual(29);
  })

  it ('should be able to calculate the score when there is a mix of spares', function(){
    rollSpare()
    rollMany(12, 1)
    rollSpare()
    rollMany(4, 1)
    expect(game.score()).toEqual(38);
  })

  it ('should be able to calculate the score when there are strikes', function(){
    rollStrike()
    rollMany(18, 1)
    expect(game.score()).toEqual(30)
  });

  it ('should calculate the score for a perfect game', function(){
    rollMany(12, 10)
    expect(game.score()).toEqual(300)
  })

});
