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
      bowling.throw(10)
      bowling.throw(4)
      bowling.throw(6)
      expect(bowling.allThrows).toEqual([2,10,4,6])
    })
  })

})
