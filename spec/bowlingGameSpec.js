describe('bowlingGame',function() {
  var bowling;

  beforeEach(function(){
    bowling = new BowlingGame('aidan');
  })

  it('should have a player name',function(){
    expect(bowling.playerName).toEqual('aidan')
  })

  it('should have an initial score of 0',function(){
    expect(bowling.currentScore).toEqual(0)
  })

  describe('throw',function(){
    it('should add things into an array of all throws', function(){
      bowling.throw(2)
      bowling.throw(9)
      bowling.throw(4)
      bowling.throw(6)
      expect(bowling.allThrows).toEqual([2,9,4,6])
    })

    it('should add a 0 after a 10 to indicate a frame is over',function(){
      bowling.throw(10)
      expect(bowling.allThrows).toEqual([10,0])
    })
  })

})
