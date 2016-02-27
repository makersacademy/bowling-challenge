
describe('JavaScript Bowling Game', function(){
  var game;
  beforeEach(function(){
    game = new BowlingGame();
  });

  //  it('I can play a single normal frame and see the score', function(){
  //    var game = new BowlingGame();
  //    spyOn(game, "playBall").and.returnValue(3); 
  //    game.letsBowl();
  //    game.letsBowl();
  //    expect(game.currentFrame()).toBe(2);
  //    expect(game.scoreCard.getScore()).toBe(6); 
  //  })
  //  it('I can bowl a spare and it will give me double points on the next bowl', function(){
  //    var game = new BowlingGame();
  //    spyOn(game, "playBall").and.returnValue(5);
  //    game.letsBowl();
  //    game.letsBowl();
  //    game.letsBowl();
  //    expect(game.scoreCard.getScore()).toBe(20); 
  //
  //  });

  it('can roll a gutter game', function(){
    rollMany(0, 20);
    expect(game.score()).toBe(0);
  });

  it('can roll all ones', function(){
    rollMany(1, 20);
    expect(game.score()).toBe(20);
  });

  it('can roll a spare', function(){
    game.roll(5);
    game.roll(5);
    game.roll(3);
    rollMany(0, 17);
    expect(game.score()).toBe(16);
  });

  it('can roll a strike', function(){
    game.roll(10);
    game.roll(4);
    game.roll(3);
    rollMany(0, 16);
    expect(game.score()).toBe(24);
  });

  it('can roll a perfect game', function(){
    rollMany(10, 12);
   expect(game.score()).toBe(300); 
  });

  var rollMany = function (pins, rolls) {
    for (var i = 0; i < rolls; i++) {
      game.roll(pins);
    };
  };


});
