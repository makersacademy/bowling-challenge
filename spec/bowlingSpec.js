describe('Game',function(){
var game;

beforeEach(function() {
    game = new Game();
});

describe('board can record points for',function(){
   it('a roll', function(){
    game.roll(1, 2);
    expect(game.frameScore()).toEqual(3);
   });

   it('a strike', function(){
    game.strike();
    expect(game.frameScore()).toEqual(10);
   });

    });
});

