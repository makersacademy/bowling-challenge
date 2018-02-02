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
})
