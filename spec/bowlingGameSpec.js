'use strict';

describe("Game", function() {

  var game;

  // Institentiates a new version of game each time.
  beforeEach(function() {
    game = new Game(); 
  });

 it('can roll a gutter game', function() {
   rollMany(0, 20)
   expect(game.score()).toBe(0); 
  });

  it('can roll all ones', function() {
    rollMany(1, 20)
    expect(game.score()).toBe(20);
  });

  // Bonus 3 points for doing a spare.
  it('can roll a spare', function() {
    game.roll(5)
    game.roll(5)
    game.roll(3)
    rollMany(0, 17)
    expect(game.score()).toBe(16); 
  });

  it('can roll a strike', function(){
    game.roll(10)
    game.roll(4)
    game.roll(3)
    rollMany(0, 16)
    expect(game.score()).toBe(24);
  }); 

  it('can roll a perfect game', function() {
    rollMany(10, 12)
    expect(game.score()).toBe(300);
  });
// 10+2(10) for 10 frames - 2(10) is the bonus amount
  var rollMany = function(pins_knocked, rolls) {
    for(var i = 0; i < 20; i++) {
      game.roll(pins_knocked);
    }
  };
});
 


// rollMany(Pins knocked down, how many times we bowl the ball)
// A normal game is 20 rolls. 
// A gutter game is 20 rolls of 0 pins_knocked. So i is the number of rolls.