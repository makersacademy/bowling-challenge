describe('Bowling', function(){
  
  beforeEach(function(){
    bowlingScore = new BowlingScore()
  })

  it('Strike is set to false by default', function(){
    expect(bowlingScore.isStrike).toEqual(false)
  });
})
