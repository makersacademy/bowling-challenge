describe('frame', function() {
  it( 'should be able to take two numbers and return the total', function() {
    var frame = new Frame(2, 5)
    expect(frame.baseScore()).toEqual( 2 + 5 )
  })
})
