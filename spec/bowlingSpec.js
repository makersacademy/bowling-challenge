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


 describe('board will NOT record points for',function(){
   it('a roll > 10', function(){
    game.roll(5, 6);
    expect(game.rollPoints).toEqual(0);
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


 describe('board will NOT record bonus points for', function(){
    it('a roll equal to less than 10', function(){
      game.roll(1, 2);
      game.rollBonus(2);
      expect(game.frameBonus).toEqual(0);
    });
  });


 describe('board can record total frame points for', function(){
   it('a roll', function(){
    game.roll(5, 5);
    game.rollBonus(5);
    expect(game.frameScore()).toEqual(15);
   });
 it('a strike', function(){
    game.strike();
    game.strikeBonus(10, 10);
    expect(game.frameScore()).toEqual(30);
   });
 it('a spare', function(){
    game.spare();
    game.spareBonus(10);
    expect(game.frameScore()).toEqual(20);
   });
  });
});

