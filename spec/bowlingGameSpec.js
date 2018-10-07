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

  describe('calculateScore',function(){
    it('should add up the current Score based on a bowling game', function(){
      bowling.allThrows = [10,0,4,5]
      bowling.calculateScore();
      expect(bowling.currentScore).toEqual(28)
    })

    it('should add up the current Score to equal 150', function(){
      bowling.allThrows = [10,0,10,0,10,0,10,0,10,0,9,1,10,0,4,6]
      bowling.calculateScore();
      expect(bowling.currentScore).toEqual(150)
    })

    it('should add up the current Score to equal 48', function(){
      bowling.allThrows = [1,2,3,4,5,5,6,1,2,3,7,3]
      bowling.calculateScore();
      expect(bowling.currentScore).toEqual(48)
    })

    it('should add up the current Score to equal 85', function(){
      bowling.allThrows = [4,6,2,3,7,1,8,2,10,0,0,10,5,0]
      bowling.calculateScore();
      expect(bowling.currentScore).toEqual(85)
    })
  })

})
