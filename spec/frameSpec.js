describe('Frame', function(){

  beforeEach(function(){
    frame = new Frame()
  })

  it('Strike is set to false by default', function(){
    expect(frame.isStrike).toEqual(false)
  });

  it('If player scores ten on first role, strike is set to true', function(){
    frame.firstBowl(10)
    expect(frame.isStrike).toEqual(true)
  })

  it('Second bowl returns the score', function(){
    expect(frame.secondBowl(7)).toEqual(7)
  })

  it('Frame knows the frames score', function(){
    frame.firstBowl(3)
    frame.secondBowl(4)
    expect(frame.frameScore().length).toEqual(2)
  })
})
