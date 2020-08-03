describe('Shape', function() {
  var shape
  beforeEach(function() {
    shape = new Shape()
  })
  it('says hello', function() {
    expect(shape.hello()).toEqual('hello')
  })
})