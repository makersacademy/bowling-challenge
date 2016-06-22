describe('Bowling', function(){
  var game;

  beforeEach(function(){
    game = new Bowling();
  });

  var wholeGame = function(pins,rolls){
    for(i = 0; i < rolls; i++){
      game.roll(pins)
    }
  }

  it('starts as a gutter game as the points at the beginning is zero', function(){
    expect(game.rolls).toEqual([]);
  })

  it('should show the current points of a match', function(){
    game.roll(5);
    expect(game.rolls).toEqual([5]);
  });

  it ('can make a game of only ones', function(){
      wholeGame(1,20)
      expect(game.score()).toBe(20)

  })
  it ('can roll a spare', function(){
    game.roll(6)
    game.roll(4)
    game.roll(5)
    wholeGame(0,17)
    expect(game.score()).toEqual(20)
  })
  it ('can roll a strike', function(){
    game.roll(10)
    game.roll(8)
    game.roll(0)
    wholeGame(0,16)
    expect(game.score()).toEqual(26)
  })
  it ('can score a perfect game',function(){
    wholeGame(10,12)
    expect(game.score()).toEqual(300)
  })
});
