describe('frame', function() {
  it( 'should be able to take two numbers and return the total', function() {
    var frame = new Frame
    frame.roll1(2)
    frame.roll2(5)
    expect(frame.baseScore()).toEqual( 2 + 5 )
  })
})
