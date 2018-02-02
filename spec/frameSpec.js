describe('Frame', function(){

  beforeEach(function(){
    frame = new Frame()
  })

  it('Strike is set to false by default', function(){
    expect(frame).isStrike).toEqual(false)
  });
})
