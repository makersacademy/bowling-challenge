describe("Game", function(){
  var game;

  beforeEach(function() {
    game = new Game;
  });

  it("adds roll to rolls array", function(){
    game.roll(9)
    expect(game.rolls).toEqual([9])
  });

  it("knows a strike", function(){
    game.roll(1)
    game.roll(2)
    game.roll(10)
    expect(game.isStrike(2)).toEqual(true)
  });

  it("knows a spare", function(){
    game.roll(1)
    game.roll(9)
    expect(game.isSpare(0)).toEqual(true)
  });

  it('knows the score of one frame', function(){
    game.roll(1)
    game.roll(8)
    expect(game.frameScore(0)).toEqual(9)

  });

  it("scores a gutter game", function(){
     rollSometoMany(20, 0);
     expect(game.calcScore()).toEqual(0);
   });

   it("scores a perfect game", function(){
      rollSometoMany(20, 10);
      expect(game.calcScore()).toEqual(300);
    });

   function rollSometoMany(rolls, pins){
     var r = 0;
     while(r < rolls){
       game.roll(pins);
       r++
     }
   };

});
