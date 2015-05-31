describe('Game',function(){
var game;

beforeEach(function() {
    game = new Game();
});

describe('board can record points for',function(){
   it('a roll', function(){
    game.roll(1, 2);
    expect(game.rollPoints).toEqual(3);
   });

   it('a strike', function(){
    game.strike();
    expect(game.strikePoints).toEqual(10);
   });

   it('a spare', function(){
    game.spare();
    expect(game.sparePoints).toEqual(10);
   });
 });
 describe('board can record bonus points for', function(){
  it('a roll equal 10', function(){
    game.roll(1, 9);
    game.rollBonus(2);
    expect(game.frameBonus).toEqual(2);
  });
  it('a strike', function(){
    game.strike();
    game.strikeBonus(2, 3);
    expect(game.frameBonus).toEqual(5);
  });
  it('a spare', function(){
    game.spare();
    game.spareBonus(2);
    expect(game.frameBonus).toEqual(2);
  });

 });
});

