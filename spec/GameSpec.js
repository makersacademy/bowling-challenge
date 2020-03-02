describe('Game', function(){

  var game

  beforeEach(function(){
    game = new Game(player1 = new Player('Tim'), player2 = new Player('Ray'))
  });

  it('game should be created with players', function() {
    expect(game.player1.name).toEqual('Tim')
  });

  it('game should start on first turn', function(){
    expect(game.player1.scoreTracker.length).toEqual(0)
  });

  describe('keeping score', function(){

    it('score after first turn should be 9', function(){
      game.player1.firstRoll(5)
      game.player1.secondRoll(4)
      expect(game.player1.score).toEqual(9)
      expect(game.player1.onSpare).toEqual(false)
      expect(game.player1.strikeStreak).toEqual(0)
      expect(game.player1.scoreTracker.length + 1).toEqual(2) // +1 because array start a 0
    });

    it('score a spare', function(){
      game.player1.firstRoll(4)
      game.player1.secondRoll(6)
      expect(game.player1.onSpare).toEqual(true)
      expect(game.player1.strikeStreak).toEqual(0)
    });

    it('second turn after no strikes or spares', function(){
      game.player1.firstRoll(5)
      game.player1.secondRoll(4)
      game.player1.firstRoll(2)
      game.player1.secondRoll(4)
      expect(game.player1.score).toEqual(15)
      expect(game.player1.scoreTracker).toEqual([[5,4], [2,4]])
    });

    it('second turn score after a spare in the first turn', function(){
      game.player1.firstRoll(6)
      game.player1.secondRoll(4)
      expect(game.player1.score).toEqual(0)
      game.player1.firstRoll(7)
      expect(game.player1.score).toEqual(17)
      game.player1.secondRoll(1)
      expect(game.player1.score).toEqual(25)
      expect(game.player1.scoreTracker).toEqual([[6,'spare'], [7,1]])
    });

    it('end of third turn after a strike', function(){
      game.player1.firstRoll(3)
      game.player1.secondRoll(2)
      expect(game.player1.score).toEqual(5)
      game.player1.firstRoll(10)
      expect(game.player1.strikeStreak).toEqual(1)
      expect(game.player1.score).toEqual(5)
      game.player1.firstRoll(5)
      game.player1.secondRoll(2)
      expect(game.player1.score).toEqual(29)
    });

    it('end a third turn after spare and strike', function(){
      game.player1.firstRoll(5)
      game.player1.secondRoll(5)
      expect(game.player1.onSpare).toEqual(true)
      game.player1.firstRoll(10)
      expect(game.player1.strikeStreak).toEqual(1)
      expect(game.player1.onSpare).toEqual(false)
      game.player1.firstRoll(2)
      game.player1.secondRoll(4)
      expect(game.player1.score).toEqual(42)
      expect(game.player1.scoreTracker).toEqual([[5,'spare'], ['strike','NA'], [2,4]])
    });

    it('end fourth turn after with two strikes in a row', function(){
      game.player1.firstRoll(5)
      game.player1.secondRoll(4)
      expect(game.player1.score).toEqual(9)
      game.player1.firstRoll(10)
      game.player1.firstRoll(10)
      game.player1.firstRoll(5)
      game.player1.secondRoll(2)
      expect(game.player1.score).toEqual(58)
      expect(game.player1.scoresArr).toEqual([9, 34, 51, 58])
      console.log(game.player1.scoresArr)
    });

    it('strike then a spare', function(){
      game.player1.firstRoll(5)
      game.player1.secondRoll(4)
      expect(game.player1.score).toEqual(9)
      game.player1.firstRoll(10)
      game.player1.firstRoll(5)
      game.player1.secondRoll(5)
      game.player1.firstRoll(5)
      game.player1.secondRoll(3)
      expect(game.player1.score).toEqual(52)
    });

    it('9 frame game', function(){
      game.player1.firstRoll(7)
      game.player1.secondRoll(2)
      console.log(game.player1.score)
      game.player1.firstRoll(3)
      game.player1.secondRoll(5)
      console.log(game.player1.score)
      game.player1.firstRoll(10)
      console.log(game.player1.score)
      game.player1.firstRoll(2)
      game.player1.secondRoll(7)
      expect(game.player1.score).toEqual(45)
      console.log(game.player1.score)
      game.player1.firstRoll(1)
      game.player1.secondRoll(9)
      expect(game.player1.score).toEqual(45)
      console.log(game.player1.score)
      game.player1.firstRoll(6)
      game.player1.secondRoll(0)
      expect(game.player1.score).toEqual(67)
      console.log(game.player1.score)
      game.player1.firstRoll(5)
      game.player1.secondRoll(4)
      console.log(game.player1.score)
      game.player1.firstRoll(10)
      console.log(game.player1.score)
      game.player1.firstRoll(5)
      game.player1.secondRoll(1)
      console.log(game.player1.score)
      expect(game.player1.score).toEqual(98)
      console.log(game.player1.scoresArr)
      
      expect(game.player1.scoresArr).toEqual([9, 17, 36, 45, 61, 67, 76, 92, 98])
    });

    it('three strikes in row', function(){
      game.player1.firstRoll(5)
      game.player1.secondRoll(4)
      expect(game.player1.score).toEqual(9)
      game.player1.firstRoll(10)
      game.player1.firstRoll(10)
      game.player1.firstRoll(10)
      game.player1.firstRoll(5)
      game.player1.secondRoll(3)
      expect(game.player1.score).toEqual(90)
      console.log(game.player1.scoresArr)
      expect(game.player1.scoresArr).toEqual([9, 39, 64, 82, 90])
    });


  }); 
});