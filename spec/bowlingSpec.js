describe('bowling', function(){
  var bowling;

  beforeEach(function(){
    bowling = new Bowling('Alexis');
  })

  it ('has a player', function(){
    expect(bowling.playerName).toEqual('Alexis');
  })

  it ('starts with default values', function(){
    expect(bowling.roll).toEqual(0)
    expect(bowling.currentFrame).toEqual(0)
    expect(bowling.allFrames).toEqual([])
    expect(bowling.totalScore()).toEqual(0);
  })

  it ('throw error when score higher than 10', function(){
    expect(function() {bowling.throw(11)}).toThrowError('Cannot score more than 10');
  })

  describe ('counting rolls and frames', function(){
    beforeEach(function(){
      bowling.throw(5);
    })

    it ('saves current frame', function(){
      expect(bowling.currentFrame).toEqual(5)
      bowling.throw(1)
      expect(bowling.currentFrame).toEqual(6)
      bowling.throw(1)
      expect(bowling.currentFrame).toEqual(1);
    })

    it ('counts rolls', function(){
      expect(bowling.roll).toEqual(1)
      bowling.throw(1)
      expect(bowling.roll).toEqual(2)
      bowling.throw(6)
      expect(bowling.roll).toEqual(1);
    })

    it ('sums up frames in totalScore and allFrames', function(){
      bowling.throw(1)
      expect(bowling.allFrames.length).toEqual(1)
      expect(bowling.allFrames[0]).toEqual(6)
      bowling.throw(1)
      bowling.throw(2)
      expect(bowling.allFrames.length).toEqual(2)
      expect(bowling.allFrames[1]).toEqual(3)
      expect(bowling.totalScore).toEqual(9)
    })

    it ('throws an error when sum of two rolls exceeds 10', function(){
    expect(function() {bowling.throw(6)}).toThrowError('Cannot score more than 10');
    })
  })
})