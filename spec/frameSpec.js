describe('Frame', function(){

  it('is defined', function(){
    var frame = new Frame([1,2])
    expect(frame).toBeDefined()
  })

  it('calculates the total score', function(){
    var frame = new Frame([4,3])
    frame.calculateScore()
    expect(frame._score).toEqual(7)
  })

  it('accounts for Strike', function(){
    var frame = new Frame([10,0])
    frame.calculateScore()
    expect(frame.isStrike).toEqual(true)
  })

  it('accounts for Spare', function(){
    var frame = new Frame([8,2])
    frame.calculateScore()
    expect(frame.isSpare).toEqual(true)
  })

})