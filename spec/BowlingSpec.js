describe('Bowling', function(){

  beforeEach(function(){
    bowling = new Bowling()
  })
  it ('should have a starting score of zero', function(){
    expect(bowling.score).toEqual(0)
  })

})
